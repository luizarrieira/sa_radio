// renderer.js — Versão SA: Motor Sequencial de Alta Precisão (Com Gapless Playback)

/* =================== AudioContext / Constants =================== */
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContextClass();

/* =================== Gerador de Silêncio Real =================== */
function gerarSilencio10Segundos() {
    const sampleRate = 8000, segundos = 10, channels = 1, bps = 16;
    const blockAlign = channels * (bps / 8);
    const dataSize = sampleRate * segundos * blockAlign; 
    const buffer = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buffer);
    const writeStr = (pos, str) => { for(let i=0; i<str.length; i++) view.setUint8(pos+i, str.charCodeAt(i)); };

    writeStr(0, 'RIFF'); view.setUint32(4, 36 + dataSize, true);
    writeStr(8, 'WAVE'); writeStr(12, 'fmt '); view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); view.setUint16(22, channels, true);
    view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * blockAlign, true);
    view.setUint16(32, blockAlign, true); view.setUint16(34, bps, true);
    writeStr(36, 'data'); view.setUint32(40, dataSize, true);

    let binary = '';
    const bytes = new Uint8Array(buffer);
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
        binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
    }
    return 'data:audio/wav;base64,' + btoa(binary);
}
const silentTrack = gerarSilencio10Segundos();

/* =================== Gains / Streaming =================== */
const masterGain = audioCtx.createGain(); 
masterGain.gain.value = 1.0; 
masterGain.connect(audioCtx.destination);

const streamAudioElement = new Audio();
streamAudioElement.crossOrigin = "anonymous";
streamAudioElement.setAttribute('playsinline', ''); 
streamAudioElement.setAttribute('webkit-playsinline', '');
streamAudioElement.src = silentTrack; 
streamAudioElement.style.display = 'none';
document.body.appendChild(streamAudioElement);

/* =================== State Management =================== */
const audioBufferCache = new Map();
let started = false;
let currentSessionId = 0; 

let activeRadioKey = 'radio_kdst'; 
let activeAudioSources = [];
let preloadedEvents = new Map();
let currentTimeline = [];

let iosUnlocked = false;

// Variável crucial para a costura matemática das músicas
let nextValidScheduleTime = 0;

/* =================== Lógica de Clima =================== */
let currentWeatherMain = 'Clear';

async function fetchWeather(){
    try{
        const key = '0cad953b1e9b3793a944d644d5193d3a';
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Maringa,BR&appid=${key}`);
        const j = await resp.json();
        currentWeatherMain = j?.weather?.[0]?.main || 'Clear';
        log(`☁️ Clima atualizado: ${currentWeatherMain}`);
    }catch(e){ 
        currentWeatherMain = 'Clear'; 
    }
}

function pickWeatherFileSA(radioKey, condition){
    const pools = window.STATION_DATA.PROGRAMACOES['sa'][radioKey]?.weatherPools;
    if (!pools) return null;

    const c = condition.toLowerCase();
    let arr = pools.sunny; 
    
    if(c.includes('rain') || c.includes('drizzle') || c.includes('thunderstorm')) {
        arr = pools.rain;
    } else if(c.includes('fog') || c.includes('mist') || c.includes('haze') || c.includes('clouds')) {
        arr = pools.fog; 
    }

    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

/* =================== Utils =================== */
function log(...args){ console.log('[RADIO SA]', ...args); }

function getCurrentMonthMs() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    return now.getTime() - startOfMonth.getTime();
}

function updateChromeMediaHub(titleText) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: titleText,
            artist: 'San Andreas Radio Player',
            album: 'GTA SA EDITION'
        });
    }
}

function unlockAudioForiOS() {
    if (iosUnlocked) return;
    if (audioCtx.state !== 'running') audioCtx.resume().catch(()=>{});

    if (!streamAudioElement.src.startsWith('data:')) {
        streamAudioElement.src = silentTrack;
    }
    streamAudioElement.muted = false; 
    streamAudioElement.loop = true;
    
    streamAudioElement.play().then(() => {
        iosUnlocked = true;
        log("🍏 iOS Audio Desbloqueado com sucesso (Widget Ativo)!");
    }).catch(e => log('Desbloqueio aguardando interação do usuário.'));

    ['touchstart', 'touchend', 'click'].forEach(evt => document.removeEventListener(evt, unlockAudioForiOS));
}
['touchstart', 'touchend', 'click'].forEach(evt => document.addEventListener(evt, unlockAudioForiOS, { once: true }));

/* =================== Data Loaders =================== */
async function loadTimeline(radioKey) {
    const fileName = radioKey.replace('radio_', 'prog_') + '.json';
    const url = `programacoes_mensais/sa/${fileName}`;
    
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status} - Não encontrado em: ${url}`);
        currentTimeline = await resp.json();
    } catch(e) {
        console.error("Erro CRÍTICO ao carregar timeline:", e.message);
        currentTimeline = [];
    }
}

async function getAudioBuffer(filePath, limparDaMemoria = false) {
    if (!filePath) return null;
    if (audioBufferCache.has(filePath)) {
        const buf = audioBufferCache.get(filePath);
        if (limparDaMemoria) audioBufferCache.delete(filePath);
        return buf;
    }
    try {
        const resp = await fetch(filePath);
        if (!resp.ok) throw new Error(`404`);
        const ab = await resp.arrayBuffer();
        const buf = await audioCtx.decodeAudioData(ab);
        audioBufferCache.set(filePath, buf);
        
        if (audioBufferCache.size > 15) { 
            const oldestKey = audioBufferCache.keys().next().value;
            audioBufferCache.delete(oldestKey);
        }
        return buf;
    } catch (e) {
        return null;
    }
}

/* =================== O Scanner & Executor =================== */
async function preloadEvent(ev) {
    if (ev.type === 'dynamic_weather') {
        await fetchWeather(); 
        const wPath = pickWeatherFileSA(activeRadioKey, currentWeatherMain);
        if (wPath) {
            ev._resolvedPath = wPath; 
            await getAudioBuffer(wPath);
        }
    } else if (ev.path) {
        await getAudioBuffer(ev.path);
    }
}

async function executeEvent(ev, mySession, isHotSwap = false, hotSwapStartMs = 0) {
    if (!started || currentSessionId !== mySession) return;

    if (streamAudioElement.paused || !streamAudioElement.src.startsWith('data:')) {
        streamAudioElement.src = silentTrack; 
        streamAudioElement.muted = false; 
        streamAudioElement.loop = true;
        streamAudioElement.play().catch(e => {});
        updateChromeMediaHub(activeRadioKey.replace('radio_', '').toUpperCase().replace(/_/g, ' '));
    }

    let pathToPlay = ev.path;
    if (ev.type === 'dynamic_weather') pathToPlay = ev._resolvedPath || pickWeatherFileSA(activeRadioKey, currentWeatherMain);
    if (!pathToPlay) return;

    const buf = await getAudioBuffer(pathToPlay, true);
    if (!buf || !started || currentSessionId !== mySession) return;

    if (audioCtx.state !== 'running') audioCtx.resume().catch(e => log('Erro ao acordar placa:', e));

    const s = audioCtx.createBufferSource();
    s.buffer = buf;
    activeAudioSources.push(s);
    s.connect(masterGain);

    s.onended = () => { activeAudioSources = activeAudioSources.filter(x => x !== s); };

    // --- MAGIA GAPLESS ---
    let scheduleTime;
    let offset = 0;

    // Se é a PRIMEIRA música tocando ao girar a roda (Hot Swap)
    if (isHotSwap) {
        scheduleTime = audioCtx.currentTime + 0.05; // Margem de segurança de play instantâneo
        offset = (hotSwapStartMs - ev.startMs) / 1000;
        if (offset < 0) offset = 0;
        
        // Próximo evento DEVE grudar no final do que acabamos de tocar
        nextValidScheduleTime = scheduleTime + (buf.duration - offset);
        
        log(`🔄 HOT-SWAP: ${pathToPlay} (Avançado: ${offset.toFixed(2)}s)`);
        s.start(scheduleTime, offset);
        window.dispatchEvent(new CustomEvent('radio-ready')); // Avisa a interface para parar a estática
    } 
    // Se é a SEQUÊNCIA natural da rádio (Gapless)
    else {
        // Se a esteira perdeu o tempo (usuário travou a aba, etc), ressincroniza
        if (nextValidScheduleTime < audioCtx.currentTime) {
            nextValidScheduleTime = audioCtx.currentTime + 0.1;
        }

        scheduleTime = nextValidScheduleTime;
        
        // A esteira é empurrada exatamente pela duração REAL do áudio que a placa decodificou
        nextValidScheduleTime = scheduleTime + buf.duration;

        log(`▶️ Agendado Gapless: ${pathToPlay} para ${scheduleTime.toFixed(3)}s`);
        s.start(scheduleTime, offset);
    }
}

async function radioLoop(mySession) {
    log(`A sintonizar Rádio (${activeRadioKey})...`);
    await loadTimeline(activeRadioKey);
    
    if (currentTimeline.length === 0) return;

    let eventIndex = 0;
    let nowMs = getCurrentMonthMs();
    
    const hotSwapEvents = [];
    for (let i = 0; i < currentTimeline.length; i++) {
        const ev = currentTimeline[i];
        if (ev.startMs <= nowMs && ev.endMs > nowMs) {
            hotSwapEvents.push(ev); 
        } else if (ev.startMs > nowMs && ev.startMs - nowMs <= 2000) {
            hotSwapEvents.push(ev); 
        }
        if (ev.startMs > nowMs + 2000 && eventIndex === 0) {
            eventIndex = i;
        }
    }
    if (eventIndex === 0) eventIndex = currentTimeline.findIndex(ev => ev.startMs > nowMs + 2000);

    // Zerar a esteira gapless sempre que mudar de rádio
    nextValidScheduleTime = 0; 

    if (hotSwapEvents.length > 0) {
        await Promise.all(hotSwapEvents.map(ev => preloadEvent(ev)));
        nowMs = getCurrentMonthMs();
        
        let firstSwap = true;
        for (const ev of hotSwapEvents) {
            if (ev.startMs <= nowMs && firstSwap) {
                executeEvent(ev, mySession, true, nowMs);
                firstSwap = false;
            } else {
                executeEvent(ev, mySession, false); 
            }
        }
    }

    async function radarTick() {
        if (!started || currentSessionId !== mySession) return;
        if (audioCtx.state !== 'running') audioCtx.resume().catch(()=>{});

        nowMs = getCurrentMonthMs();

        for (let i = eventIndex; i < currentTimeline.length; i++) {
            const ev = currentTimeline[i];
            if (ev.startMs - nowMs <= 30000) {
                if (!preloadedEvents.has(i)) {
                    preloadedEvents.set(i, true);
                    preloadEvent(ev).catch(e => {}); 
                }
            } else { break; }
        }

        while (eventIndex < currentTimeline.length) {
            const ev = currentTimeline[eventIndex];
            const timeUntilStart = ev.startMs - nowMs;

            if (timeUntilStart > 15000) break;

            if (ev.endMs > nowMs) { 
                executeEvent(ev, mySession, false);
            }
            preloadedEvents.delete(eventIndex); 
            eventIndex++;
        }

        if (eventIndex >= currentTimeline.length) {
            eventIndex = 0;
            preloadedEvents.clear();
        }
    }

    streamAudioElement.addEventListener('timeupdate', radarTick);
    
    const pcInterval = setInterval(() => {
        if (!started || currentSessionId !== mySession) {
            clearInterval(pcInterval);
            streamAudioElement.removeEventListener('timeupdate', radarTick);
            return;
        }
        radarTick();
    }, 250);
}

// ==== CONTROLE DE ESTADO GLOBAL ====
async function startRadio(radioKey){
    if(started && activeRadioKey === radioKey) return;
    
    stopRadio(); 
    
    activeRadioKey = radioKey;
    started = true;
    currentSessionId++; 
    const mySession = currentSessionId;
    
    unlockAudioForiOS();
    
    if(audioCtx.state !== 'running') {
        audioCtx.resume().catch(()=>{});
    }
    
    radioLoop(mySession).catch(e => {
        if(currentSessionId === mySession) started = false;
    });
}

function stopRadio() {
    log('Parando a rádio atual...');
    started = false; 

    activeAudioSources.forEach(src => {
        try { src.stop(); } catch(e) {}
    });
    activeAudioSources = [];
    preloadedEvents.clear();
    nextValidScheduleTime = 0; // Limpa a esteira

    streamAudioElement.pause();
    
    if (!streamAudioElement.src.startsWith('data:')) {
        streamAudioElement.src = silentTrack; 
    }
}

window.__RADIO = window.__RADIO || {};
window.__RADIO.startRadio = startRadio;
window.__RADIO.stopRadio = stopRadio;