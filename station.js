// station.js — Músicas, IDs, Narrações e Definição de Programações (GTA San Andreas)
// Requer: geral.js carregado antes.

(function() {
  const G = window.GERAL_DATA || { adv: { sa: [] } }; // Fallback de segurança

  /* ================================================================================= */
  /* ================================= 1. K-DST ====================================== */
  /* ================================================================================= */

  // Músicas fatiadas em Intro, Mid e Outro
  const kdst_musicas = [
    {
      name: 'A_HORSE_WITH_NO_NAME',
      intros: ['KDST/a_horse_with_no_name_intro.ogg', 'KDST/a_horse_with_no_name_intro_dj_1.ogg', 'KDST/a_horse_with_no_name_intro_dj_2.ogg'],
      mid: 'KDST/a_horse_with_no_name_mid.ogg',
      outros: ['KDST/a_horse_with_no_name_outro.ogg', 'KDST/a_horse_with_no_name_outro_dj_1.ogg', 'KDST/a_horse_with_no_name_outro_dj_2.ogg']
    },
    {
      name: 'BARRACUDA',
      intros: ['KDST/barracuda_intro.ogg', 'KDST/barracuda_intro_dj_1.ogg', 'KDST/barracuda_intro_dj_2.ogg'],
      mid: 'KDST/barracuda_mid.ogg',
      outros: ['KDST/barracuda_outro.ogg', 'KDST/barracuda_outro_dj_1.ogg', 'KDST/barracuda_outro_dj_2.ogg']
    },
    {
      name: 'EMINENCE_FRONT',
      intros: ['KDST/eminence_front_intro.ogg', 'KDST/eminence_front_intro_dj_1.ogg', 'KDST/eminence_front_intro_dj_2.ogg'],
      mid: 'KDST/eminence_front_mid.ogg',
      outros: ['KDST/eminence_front_outro.ogg', 'KDST/eminence_front_outro_dj_1.ogg', 'KDST/eminence_front_outro_dj_2.ogg']
    },
    {
      name: 'FREE_BIRD',
      intros: ['KDST/free_bird_intro.ogg', 'KDST/free_bird_intro_dj_1.ogg', 'KDST/free_bird_intro_dj_2.ogg'],
      mid: 'KDST/free_bird_mid.ogg',
      outros: ['KDST/free_bird_outro.ogg', 'KDST/free_bird_outro_dj_1.ogg', 'KDST/free_bird_outro_dj_2.ogg']
    },
    {
      name: 'GET_DOWN_TO_IT',
      intros: ['KDST/get_down_to_it_intro.ogg', 'KDST/get_down_to_it_intro_dj_1.ogg', 'KDST/get_down_to_it_intro_dj_2.ogg'],
      mid: 'KDST/get_down_to_it_mid.ogg',
      outros: ['KDST/get_down_to_it_outro.ogg', 'KDST/get_down_to_it_outro_dj_1.ogg', 'KDST/get_down_to_it_outro_dj_2.ogg']
    },
    {
      name: 'GREEN_RIVER',
      intros: ['KDST/green_river_intro.ogg', 'KDST/green_river_intro_dj_1.ogg', 'KDST/green_river_intro_dj_2.ogg'],
      mid: 'KDST/green_river_mid.ogg',
      outros: ['KDST/green_river_outro.ogg', 'KDST/green_river_outro_dj_1.ogg']
    },
    {
      // Nota: Esta música não tem variações de DJ, então o array tem tamanho 1
      name: 'HOLD_THE_LINE',
      intros: ['KDST/hold_the_line_intro.ogg'],
      mid: 'KDST/hold_the_line_mid.ogg',
      outros: ['KDST/hold_the_line_outro.ogg']
    },
    {
      name: 'RUNNING_DOWN_A_DREAM',
      intros: ['KDST/running_down_a_dream_intro.ogg', 'KDST/running_down_a_dream_intro_dj_1.ogg', 'KDST/running_down_a_dream_intro_dj_2.ogg'],
      mid: 'KDST/running_down_a_dream_mid.ogg',
      outros: ['KDST/running_down_a_dream_outro.ogg', 'KDST/running_down_a_dream_outro_dj_1.ogg', 'KDST/running_down_a_dream_outro_dj_2.ogg']
    },
    {
      name: 'SLOW_RIDE',
      intros: ['KDST/slow_ride_intro.ogg', 'KDST/slow_ride_intro_dj_1.ogg', 'KDST/slow_ride_intro_dj_2.ogg'],
      mid: 'KDST/slow_ride_mid.ogg',
      outros: ['KDST/slow_ride_outro.ogg', 'KDST/slow_ride_outro_dj_1.ogg', 'KDST/slow_ride_outro_dj_2.ogg']
    },
    {
      name: 'SMOKIN',
      intros: ['KDST/smokin_intro.ogg', 'KDST/smokin_intro_dj_1.ogg', 'KDST/smokin_intro_dj_2.ogg'],
      mid: 'KDST/smokin_mid.ogg',
      outros: ['KDST/smokin_outro.ogg', 'KDST/smokin_outro_dj_1.ogg', 'KDST/smokin_outro_dj_2.ogg']
    },
    {
      name: 'SOME_KIND_OF_WONDERFUL',
      intros: ['KDST/some_kind_of_wonderful_intro.ogg', 'KDST/some_kind_of_wonderful_intro_dj_1.ogg', 'KDST/some_kind_of_wonderful_intro_dj_2.ogg'],
      mid: 'KDST/some_kind_of_wonderful_mid.ogg',
      outros: ['KDST/some_kind_of_wonderful_outro.ogg', 'KDST/some_kind_of_wonderful_outro_dj_1.ogg', 'KDST/some_kind_of_wonderful_outro_dj_2.ogg']
    },
    {
      name: 'SOMEBODY_UP_THERE_LIKES_ME',
      intros: ['KDST/somebody_up_there_likes_me_intro.ogg', 'KDST/somebody_up_there_likes_me_intro_dj_1.ogg', 'KDST/somebody_up_there_likes_me_intro_dj_2.ogg'],
      mid: 'KDST/somebody_up_there_likes_me_mid.ogg',
      outros: ['KDST/somebody_up_there_likes_me_outro.ogg', 'KDST/somebody_up_there_likes_me_outro_dj_1.ogg']
    },
    {
      name: 'STRUTTER',
      intros: ['KDST/strutter_intro.ogg', 'KDST/strutter_intro_dj_1.ogg', 'KDST/strutter_intro_dj_2.ogg'],
      mid: 'KDST/strutter_mid.ogg',
      outros: ['KDST/strutter_outro.ogg', 'KDST/strutter_outro_dj_1.ogg', 'KDST/strutter_outro_dj_2.ogg']
    },
    {
      name: 'TWO_TICKETS_TO_PARADISE',
      intros: ['KDST/two_tickets_to_paradise_intro.ogg', 'KDST/two_tickets_to_paradise_intro_dj_1.ogg', 'KDST/two_tickets_to_paradise_intro_dj_2.ogg'],
      mid: 'KDST/two_tickets_to_paradise_mid.ogg',
      outros: ['KDST/two_tickets_to_paradise_outro.ogg', 'KDST/two_tickets_to_paradise_outro_dj_1.ogg', 'KDST/two_tickets_to_paradise_outro_dj_2.ogg']
    },
    {
      name: 'WHITE_WEDDING',
      intros: ['KDST/white_wedding_intro.ogg', 'KDST/white_wedding_intro_dj_1.ogg', 'KDST/white_wedding_intro_dj_2.ogg'],
      mid: 'KDST/white_wedding_mid.ogg',
      outros: ['KDST/white_wedding_outro.ogg', 'KDST/white_wedding_outro_dj_1.ogg', 'KDST/white_wedding_outro_dj_2.ogg']
    },
    {
      name: 'WOMAN_TO_WOMAN',
      intros: ['KDST/woman_to_woman_intro.ogg', 'KDST/woman_to_woman_intro_dj_1.ogg', 'KDST/woman_to_woman_intro_dj_2.ogg'],
      mid: 'KDST/woman_to_woman_mid.ogg',
      outros: ['KDST/woman_to_woman_outro.ogg', 'KDST/woman_to_woman_outro_dj_1.ogg', 'KDST/woman_to_woman_outro_dj_2.ogg']
    },
    {
      name: 'YOUNG_TURKS',
      intros: ['KDST/young_turks_intro.ogg', 'KDST/young_turks_intro_dj_1.ogg', 'KDST/young_turks_intro_dj_2.ogg'],
      mid: 'KDST/young_turks_mid.ogg',
      outros: ['KDST/young_turks_outro.ogg', 'KDST/young_turks_outro_dj_1.ogg', 'KDST/young_turks_outro_dj_2.ogg']
    }
  ];

  // Identificadores (IDs)
  const kdst_ids = [
    'KDST/id_ashes_to_ashes_dust_to_dust.ogg',
    'KDST/id_gone_to_rehab.ogg',
    'KDST/id_if_the_police_cant_stop_you_1.ogg',
    'KDST/id_if_the_police_cant_stop_you_2.ogg',
    'KDST/id_ive_got_a_word_for_you_homey_dust.ogg',
    'KDST/id_k_dst_the_dust.ogg',
    'KDST/id_music_never_gets_old.ogg',
    'KDST/id_real_rockers_wear_leather_jackets.ogg',
    'KDST/id_songs_about_abusing_drugs_and_women.ogg',
    'KDST/id_the_way_it_was_meant_to_be_enjoyed.ogg',
    'KDST/id_tommy_the_nightmare_smith_on_the_dust.ogg'
  ];

  // DJ e Callers agrupados para o gerador sortear (70/30)
  const kdst_djs_callers = {
    dj: [
      'KDST/dj_1977what_a_year.ogg',
      'KDST/dj_get_to_the_clinic.ogg',
      'KDST/dj_i_live_the_dream.ogg',
      'KDST/dj_keeping_the_spirit_of_rock_alive.ogg',
      'KDST/dj_music_may_not_be_the_food_of_love.ogg',
      'KDST/dj_rock_n_roll_or_classical.ogg',
      'KDST/dj_two_kinds_of_people.ogg',
      'KDST/dj_werent_the_70s_great.ogg',
      'KDST/dj_whatever_happened_to_love_fist.ogg'
    ],
    caller: [
      'KDST/caller_im_in_hell_right.ogg',
      'KDST/caller_that_band_you_were_in.ogg',
      'KDST/caller_youre_so_lame.ogg'
    ]
  };

  // Clima e Horário (Atmosphere) separados para tratativas diferentes
  const kdst_time = {
    morning: ['KDST/atmosphere_morning_1.ogg', 'KDST/atmosphere_morning_2.ogg', 'KDST/atmosphere_morning_3.ogg'],
    evening: ['KDST/atmosphere_evening_1.ogg', 'KDST/atmosphere_evening_2.ogg'],
    night: ['KDST/atmosphere_night_1.ogg', 'KDST/atmosphere_night_2.ogg', 'KDST/atmosphere_night_3.ogg']
  };

  const kdst_weather = {
    sunny: ['KDST/atmosphere_sunny_1.ogg', 'KDST/atmosphere_sunny_2.ogg'],
    rain: ['KDST/atmosphere_rain_1.ogg', 'KDST/atmosphere_rain_2.ogg'],
    fog: ['KDST/atmosphere_fog_1.ogg', 'KDST/atmosphere_fog_2.ogg']
  };

  // História da Campanha Principal
  const kdst_story = {
    10: ['KDST/story_weed_farm_burned_down.ogg'],
    11: ['KDST/story_prosecutor_busted_for_weed.ogg'],
    16: ['KDST/story_lights_in_desert.ogg']
  };

  const obj_kdst = {
    musicasList: kdst_musicas,
    grupoID: kdst_ids,
    grupoDJSolo: kdst_djs_callers, // Agrupamos Caller e DJ aqui
    timePools: kdst_time,
    weatherPools: kdst_weather,
    storyPools: kdst_story, // Guardado para implementação futura
    grupoAdv: G.adv.sa // Comerciais gerais de SA que configuraremos depois
  };

  /* ================================================================================= */
  /* ============================= 2. MASTER SOUNDS 98.3 ============================= */
  /* ================================================================================= */

  const master_sounds_musicas = [
    {
      name: 'CROSS_THE_TRACKS_WE_BETTER_GO_BACK',
      intros: ['MASTER_SOUNDS/cross_the_tracks_we_better_go_back_intro.ogg', 'MASTER_SOUNDS/cross_the_tracks_we_better_go_back_intro_dj_1.ogg', 'MASTER_SOUNDS/cross_the_tracks_we_better_go_back_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/cross_the_tracks_we_better_go_back_mid.ogg',
      outros: ['MASTER_SOUNDS/cross_the_tracks_we_better_go_back_outro.ogg', 'MASTER_SOUNDS/cross_the_tracks_we_better_go_back_outro_dj_1.ogg', 'MASTER_SOUNDS/cross_the_tracks_we_better_go_back_outro_dj_2.ogg']
    },
    {
      name: 'EXPRESS_YOURSELF',
      intros: ['MASTER_SOUNDS/express_yourself_intro.ogg', 'MASTER_SOUNDS/express_yourself_intro_dj_1.ogg', 'MASTER_SOUNDS/express_yourself_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/express_yourself_mid.ogg',
      outros: ['MASTER_SOUNDS/express_yourself_outro.ogg', 'MASTER_SOUNDS/express_yourself_outro_dj_1.ogg', 'MASTER_SOUNDS/express_yourself_outro_dj_2.ogg']
    },
    {
      name: 'FUNKY_PRESIDENT',
      intros: ['MASTER_SOUNDS/funky_president_intro.ogg', 'MASTER_SOUNDS/funky_president_intro_dj_1.ogg', 'MASTER_SOUNDS/funky_president_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/funky_president_mid.ogg',
      outros: ['MASTER_SOUNDS/funky_president_outro.ogg', 'MASTER_SOUNDS/funky_president_outro_dj_1.ogg', 'MASTER_SOUNDS/funky_president_outro_dj_2.ogg']
    },
    {
      name: 'GREEN_ONIONS',
      intros: ['MASTER_SOUNDS/green_onions_intro.ogg', 'MASTER_SOUNDS/green_onions_intro_dj_1.ogg', 'MASTER_SOUNDS/green_onions_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/green_onions_mid.ogg',
      outros: ['MASTER_SOUNDS/green_onions_outro.ogg', 'MASTER_SOUNDS/green_onions_outro_dj_1.ogg', 'MASTER_SOUNDS/green_onions_outro_dj_2.ogg']
    },
    {
      name: 'GRUNT',
      intros: ['MASTER_SOUNDS/grunt_intro.ogg', 'MASTER_SOUNDS/grunt_intro_dj_1.ogg', 'MASTER_SOUNDS/grunt_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/grunt_mid.ogg',
      outros: ['MASTER_SOUNDS/grunt_outro.ogg', 'MASTER_SOUNDS/grunt_outro_dj_1.ogg', 'MASTER_SOUNDS/grunt_outro_dj_2.ogg']
    },
    {
      name: 'HOT_PANTS',
      intros: ['MASTER_SOUNDS/hot_pants_intro.ogg', 'MASTER_SOUNDS/hot_pants_intro_dj_1.ogg', 'MASTER_SOUNDS/hot_pants_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/hot_pants_mid.ogg',
      outros: ['MASTER_SOUNDS/hot_pants_outro.ogg', 'MASTER_SOUNDS/hot_pants_outro_dj_1.ogg', 'MASTER_SOUNDS/hot_pants_outro_dj_2.ogg']
    },
    {
      name: 'I_GOT_SO_MUCH_TROUBLE_IN_MY_MIND',
      intros: ['MASTER_SOUNDS/i_got_so_much_trouble_in_my_mind_intro.ogg', 'MASTER_SOUNDS/i_got_so_much_trouble_in_my_mind_intro_dj_1.ogg', 'MASTER_SOUNDS/i_got_so_much_trouble_in_my_mind_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/i_got_so_much_trouble_in_my_mind_mid.ogg',
      outros: ['MASTER_SOUNDS/i_got_so_much_trouble_in_my_mind_outro.ogg', 'MASTER_SOUNDS/i_got_so_much_trouble_in_my_mind_outro_dj_1.ogg']
    },
    {
      name: 'I_KNOW_YOU_GOT_SOUL',
      intros: ['MASTER_SOUNDS/i_know_you_got_soul_intro.ogg', 'MASTER_SOUNDS/i_know_you_got_soul_intro_dj_1.ogg', 'MASTER_SOUNDS/i_know_you_got_soul_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/i_know_you_got_soul_mid.ogg',
      outros: ['MASTER_SOUNDS/i_know_you_got_soul_outro.ogg', 'MASTER_SOUNDS/i_know_you_got_soul_outro_dj_1.ogg']
    },
    {
      name: 'JUNGLE_FEVER',
      intros: ['MASTER_SOUNDS/jungle_fever_intro.ogg', 'MASTER_SOUNDS/jungle_fever_intro_dj_1.ogg', 'MASTER_SOUNDS/jungle_fever_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/jungle_fever_mid.ogg',
      outros: ['MASTER_SOUNDS/jungle_fever_outro.ogg', 'MASTER_SOUNDS/jungle_fever_outro_dj_1.ogg', 'MASTER_SOUNDS/jungle_fever_outro_dj_2.ogg']
    },
    {
      name: 'LOW_RIDER',
      intros: ['MASTER_SOUNDS/low_rider_intro.ogg', 'MASTER_SOUNDS/low_rider_intro_dj_1.ogg', 'MASTER_SOUNDS/low_rider_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/low_rider_mid.ogg',
      outros: ['MASTER_SOUNDS/low_rider_outro.ogg', 'MASTER_SOUNDS/low_rider_outro_dj_1.ogg', 'MASTER_SOUNDS/low_rider_outro_dj_2.ogg']
    },
    {
      name: 'NAUTILUS',
      intros: ['MASTER_SOUNDS/nautilus_intro.ogg', 'MASTER_SOUNDS/nautilus_intro_dj_1.ogg', 'MASTER_SOUNDS/nautilus_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/nautilus_mid.ogg',
      outros: ['MASTER_SOUNDS/nautilus_outro.ogg', 'MASTER_SOUNDS/nautilus_outro_dj_1.ogg']
    },
    {
      name: 'ROCK_CREEK_PARK',
      intros: ['MASTER_SOUNDS/rock_creek_park_intro.ogg', 'MASTER_SOUNDS/rock_creek_park_intro_dj_1.ogg', 'MASTER_SOUNDS/rock_creek_park_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/rock_creek_park_mid.ogg',
      outros: ['MASTER_SOUNDS/rock_creek_park_outro.ogg', 'MASTER_SOUNDS/rock_creek_park_outro_dj_1.ogg', 'MASTER_SOUNDS/rock_creek_park_outro_dj_2.ogg']
    },
    {
      name: 'ROCK_ME_AGAIN_AND_AGAIN',
      intros: ['MASTER_SOUNDS/rock_me_again_and_again_intro.ogg', 'MASTER_SOUNDS/rock_me_again_and_again_intro_dj_1.ogg', 'MASTER_SOUNDS/rock_me_again_and_again_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/rock_me_again_and_again_mid.ogg',
      outros: ['MASTER_SOUNDS/rock_me_again_and_again_outro.ogg', 'MASTER_SOUNDS/rock_me_again_and_again_outro_dj_1.ogg', 'MASTER_SOUNDS/rock_me_again_and_again_outro_dj_2.ogg']
    },
    {
      name: 'SMOKIN_CHEEBA_CHEEBA',
      intros: ['MASTER_SOUNDS/smokin_cheeba_cheeba_intro.ogg', 'MASTER_SOUNDS/smokin_cheeba_cheeba_intro_dj_1.ogg', 'MASTER_SOUNDS/smokin_cheeba_cheeba_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/smokin_cheeba_cheeba_mid.ogg',
      outros: ['MASTER_SOUNDS/smokin_cheeba_cheeba_outro.ogg', 'MASTER_SOUNDS/smokin_cheeba_cheeba_outro_dj_1.ogg', 'MASTER_SOUNDS/smokin_cheeba_cheeba_outro_dj_2.ogg']
    },
    {
      name: 'SOUL_POWER_74',
      intros: ['MASTER_SOUNDS/soul_power_74_intro.ogg', 'MASTER_SOUNDS/soul_power_74_intro_dj_1.ogg'],
      mid: 'MASTER_SOUNDS/soul_power_74_mid.ogg',
      outros: ['MASTER_SOUNDS/soul_power_74_outro.ogg', 'MASTER_SOUNDS/soul_power_74_outro_dj_1.ogg']
    },
    {
      name: 'TAINTED_LOVE',
      intros: ['MASTER_SOUNDS/tainted_love_intro.ogg'],
      mid: 'MASTER_SOUNDS/tainted_love_mid.ogg',
      outros: ['MASTER_SOUNDS/tainted_love_outro.ogg']
    },
    {
      name: 'THE_PAYBACK',
      intros: ['MASTER_SOUNDS/the_payback_intro.ogg', 'MASTER_SOUNDS/the_payback_intro_dj_1.ogg', 'MASTER_SOUNDS/the_payback_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/the_payback_mid.ogg',
      outros: ['MASTER_SOUNDS/the_payback_outro.ogg']
    },
    {
      name: 'THINK_ABOUT_IT',
      intros: ['MASTER_SOUNDS/think_about_it_intro.ogg', 'MASTER_SOUNDS/think_about_it_intro_dj_1.ogg', 'MASTER_SOUNDS/think_about_it_intro_dj_2.ogg'],
      mid: 'MASTER_SOUNDS/think_about_it_mid.ogg',
      outros: ['MASTER_SOUNDS/think_about_it_outro.ogg', 'MASTER_SOUNDS/think_about_it_outro_dj_1.ogg', 'MASTER_SOUNDS/think_about_it_outro_dj_2.ogg']
    }
  ];

  const master_sounds_ids = [
    'MASTER_SOUNDS/id_before_it_got_sampled.ogg',
    'MASTER_SOUNDS/id_big_daddys_back_in_town.ogg',
    'MASTER_SOUNDS/id_find_a_beat_to_steer_you.ogg',
    'MASTER_SOUNDS/id_its_the_love_giant.ogg',
    'MASTER_SOUNDS/id_stop_listen_and_learn.ogg',
    'MASTER_SOUNDS/id_the_home_of_cool_rare_grooves.ogg',
    'MASTER_SOUNDS/id_were_bringing_it_back.ogg',
    'MASTER_SOUNDS/id_when_the_rhythm_method_was_king.ogg'
  ];

  const master_sounds_djs_callers = {
    dj: [
      'MASTER_SOUNDS/dj_a_little_dude_wit_a_attitude.ogg',
      'MASTER_SOUNDS/dj_big_daddy.ogg',
      'MASTER_SOUNDS/dj_check_out_your_headlights.ogg',
      'MASTER_SOUNDS/dj_dont_be_a_fool_and_be_defiant.ogg',
      'MASTER_SOUNDS/dj_eye_level_with_your_kitty_cat.ogg',
      'MASTER_SOUNDS/dj_gonna_end_up_in_the_hospital.ogg',
      'MASTER_SOUNDS/dj_i_am_the_giant.ogg',
      'MASTER_SOUNDS/dj_i_know_you_thinkin_girl.ogg',
      'MASTER_SOUNDS/dj_im_about_to_suck_you_right_on_up.ogg',
      'MASTER_SOUNDS/dj_its_all_pink_on_the_inside.ogg',
      'MASTER_SOUNDS/dj_keep_the_groove_groovin.ogg',
      'MASTER_SOUNDS/dj_lovin_you_coz_you_my_bitch.ogg',
      'MASTER_SOUNDS/dj_my_book.ogg',
      'MASTER_SOUNDS/dj_playing_it_for_keeps.ogg',
      'MASTER_SOUNDS/dj_right_in_your_earhole_3d_style.ogg',
      'MASTER_SOUNDS/dj_small_packages.ogg',
      'MASTER_SOUNDS/dj_the_art_of_love_andsensible_advice.ogg',
      'MASTER_SOUNDS/dj_the_love_doctor.ogg',
      'MASTER_SOUNDS/dj_the_master_of_the_rare_groove.ogg',
      'MASTER_SOUNDS/dj_to_heaven_like_nineteen_times.ogg',
      'MASTER_SOUNDS/dj_too_much_soul.ogg',
      'MASTER_SOUNDS/dj_youre_tuned_into_who.ogg'
    ],
    caller: [
      'MASTER_SOUNDS/caller_how_tall_are_you.ogg',
      'MASTER_SOUNDS/caller_i_get_a_great_boner.ogg',
      'MASTER_SOUNDS/caller_we_love_you.ogg',
      'MASTER_SOUNDS/caller_what_was_that_racket_last_night.ogg',
      'MASTER_SOUNDS/caller_your_attitude_is_disgusting.ogg'
    ]
  };

  const master_sounds_time = {
    morning: ['MASTER_SOUNDS/atmosphere_morning_1.ogg', 'MASTER_SOUNDS/atmosphere_morning_2.ogg'],
    evening: ['MASTER_SOUNDS/atmosphere_evening_1.ogg', 'MASTER_SOUNDS/atmosphere_evening_2.ogg'],
    night: ['MASTER_SOUNDS/atmosphere_night_1.ogg', 'MASTER_SOUNDS/atmosphere_night_2.ogg']
  };

  const master_sounds_weather = {
    sunny: ['MASTER_SOUNDS/atmosphere_sunny.ogg'], // Único
    rain: ['MASTER_SOUNDS/atmosphere_rain_1.ogg', 'MASTER_SOUNDS/atmosphere_rain_2.ogg'],
    fog: ['MASTER_SOUNDS/atmosphere_fog_1.ogg', 'MASTER_SOUNDS/atmosphere_fog_2.ogg', 'MASTER_SOUNDS/atmosphere_fog_3.ogg']
  };

  const master_sounds_story = {
    2: ['MASTER_SOUNDS/story_burglaries.ogg'],
    9: ['MASTER_SOUNDS/story_countryside_racing.ogg'],
    13: ['MASTER_SOUNDS/story_mafia_family_killed.ogg'],
    16: ['MASTER_SOUNDS/story_lights_in_desert.ogg'],
    28: ['MASTER_SOUNDS/story_police_trial.ogg']
  };

  const obj_master_sounds = {
    musicasList: master_sounds_musicas,
    grupoID: master_sounds_ids,
    grupoDJSolo: master_sounds_djs_callers, 
    timePools: master_sounds_time,
    weatherPools: master_sounds_weather,
    storyPools: master_sounds_story,
    grupoAdv: G.adv.sa 
  };

  /* ================================================================================= */
  /* ================================= 3. BOUNCE FM ================================== */
  /* ================================================================================= */

  const bounce_fm_musicas = [
    {
      name: 'BETWEEN_THE_SHEETS',
      intros: ['BOUNCE_FM/between_the_sheets_intro.ogg', 'BOUNCE_FM/between_the_sheets_intro_dj_1.ogg', 'BOUNCE_FM/between_the_sheets_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/between_the_sheets_mid.ogg',
      outros: ['BOUNCE_FM/between_the_sheets_outro.ogg', 'BOUNCE_FM/between_the_sheets_outro_dj_1.ogg', 'BOUNCE_FM/between_the_sheets_outro_dj_2.ogg']
    },
    {
      name: 'CANDY',
      intros: ['BOUNCE_FM/candy_intro.ogg', 'BOUNCE_FM/candy_intro_dj_1.ogg', 'BOUNCE_FM/candy_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/candy_mid.ogg',
      outros: ['BOUNCE_FM/candy_outro.ogg', 'BOUNCE_FM/candy_outro_dj_1.ogg', 'BOUNCE_FM/candy_outro_dj_2.ogg']
    },
    {
      name: 'COLD_BLOODED',
      intros: ['BOUNCE_FM/cold_blooded_intro.ogg', 'BOUNCE_FM/cold_blooded_intro_dj_1.ogg', 'BOUNCE_FM/cold_blooded_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/cold_blooded_mid.ogg',
      outros: ['BOUNCE_FM/cold_blooded_outro.ogg', 'BOUNCE_FM/cold_blooded_outro_dj_1.ogg', 'BOUNCE_FM/cold_blooded_outro_dj_2.ogg']
    },
    {
      name: 'FANTASTIC_VOYAGE',
      intros: ['BOUNCE_FM/fantastic_voyage_intro.ogg', 'BOUNCE_FM/fantastic_voyage_intro_dj_1.ogg', 'BOUNCE_FM/fantastic_voyage_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/fantastic_voyage_mid.ogg',
      outros: ['BOUNCE_FM/fantastic_voyage_outro.ogg', 'BOUNCE_FM/fantastic_voyage_outro_dj_1.ogg', 'BOUNCE_FM/fantastic_voyage_outro_dj_2.ogg']
    },
    {
      name: 'FUNKY_WORM',
      intros: ['BOUNCE_FM/funky_worm_intro.ogg', 'BOUNCE_FM/funky_worm_intro_dj_1.ogg', 'BOUNCE_FM/funky_worm_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/funky_worm_mid.ogg',
      outros: ['BOUNCE_FM/funky_worm_outro.ogg', 'BOUNCE_FM/funky_worm_outro_dj_1.ogg', 'BOUNCE_FM/funky_worm_outro_dj_2.ogg']
    },
    {
      name: 'HOLLYWOOD_SWINGIN',
      intros: ['BOUNCE_FM/hollywood_swingin_intro.ogg', 'BOUNCE_FM/hollywood_swingin_intro_dj_1.ogg', 'BOUNCE_FM/hollywood_swingin_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/hollywood_swingin_mid.ogg',
      outros: ['BOUNCE_FM/hollywood_swingin_outro.ogg', 'BOUNCE_FM/hollywood_swingin_outro_dj_1.ogg', 'BOUNCE_FM/hollywood_swingin_outro_dj_2.ogg']
    },
    {
      name: 'I_CAN_MAKE_YOU_DANCE',
      intros: ['BOUNCE_FM/i_can_make_you_dance_intro.ogg', 'BOUNCE_FM/i_can_make_you_dance_intro_dj_1.ogg', 'BOUNCE_FM/i_can_make_you_dance_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/i_can_make_you_dance_mid.ogg',
      outros: ['BOUNCE_FM/i_can_make_you_dance_outro.ogg', 'BOUNCE_FM/i_can_make_you_dance_outro_dj_1.ogg', 'BOUNCE_FM/i_can_make_you_dance_outro_dj_2.ogg']
    },
    {
      name: 'LET_IT_WHIP',
      intros: ['BOUNCE_FM/let_it_whip_intro.ogg', 'BOUNCE_FM/let_it_whip_intro_dj_1.ogg', 'BOUNCE_FM/let_it_whip_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/let_it_whip_mid.ogg',
      outros: ['BOUNCE_FM/let_it_whip_outro.ogg', 'BOUNCE_FM/let_it_whip_outro_dj_1.ogg', 'BOUNCE_FM/let_it_whip_outro_dj_2.ogg']
    },
    {
      name: 'LOOPZILLA',
      intros: ['BOUNCE_FM/loopzilla_intro.ogg', 'BOUNCE_FM/loopzilla_intro_dj_1.ogg', 'BOUNCE_FM/loopzilla_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/loopzilla_mid.ogg',
      outros: ['BOUNCE_FM/loopzilla_outro.ogg', 'BOUNCE_FM/loopzilla_outro_dj_1.ogg', 'BOUNCE_FM/loopzilla_outro_dj_2.ogg']
    },
    {
      name: 'LOVE_IS_THE_MESSAGE',
      intros: ['BOUNCE_FM/love_is_the_message_intro.ogg', 'BOUNCE_FM/love_is_the_message_intro_dj_1.ogg', 'BOUNCE_FM/love_is_the_message_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/love_is_the_message_mid.ogg',
      outros: ['BOUNCE_FM/love_is_the_message_outro.ogg', 'BOUNCE_FM/love_is_the_message_outro_dj_1.ogg', 'BOUNCE_FM/love_is_the_message_outro_dj_2.ogg']
    },
    {
      name: 'LOVE_ROLLERCOASTER',
      intros: ['BOUNCE_FM/love_rollercoaster_intro.ogg', 'BOUNCE_FM/love_rollercoaster_intro_dj_1.ogg', 'BOUNCE_FM/love_rollercoaster_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/love_rollercoaster_mid.ogg',
      outros: ['BOUNCE_FM/love_rollercoaster_outro.ogg', 'BOUNCE_FM/love_rollercoaster_outro_dj_1.ogg', 'BOUNCE_FM/love_rollercoaster_outro_dj_2.ogg']
    },
    {
      name: 'ODYSSEY',
      intros: ['BOUNCE_FM/odyssey_intro.ogg', 'BOUNCE_FM/odyssey_intro_dj_1.ogg', 'BOUNCE_FM/odyssey_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/odyssey_mid.ogg',
      outros: ['BOUNCE_FM/odyssey_outro.ogg', 'BOUNCE_FM/odyssey_outro_dj_1.ogg', 'BOUNCE_FM/odyssey_outro_dj_2.ogg']
    },
    {
      name: 'RUNNING_AWAY',
      intros: ['BOUNCE_FM/running_away_intro.ogg', 'BOUNCE_FM/running_away_intro_dj_1.ogg', 'BOUNCE_FM/running_away_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/running_away_mid.ogg',
      outros: ['BOUNCE_FM/running_away_outro.ogg', 'BOUNCE_FM/running_away_outro_dj_1.ogg', 'BOUNCE_FM/running_away_outro_dj_2.ogg']
    },
    {
      name: 'TWILIGHT',
      intros: ['BOUNCE_FM/twilight_intro.ogg', 'BOUNCE_FM/twilight_intro_dj_1.ogg', 'BOUNCE_FM/twilight_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/twilight_mid.ogg',
      outros: ['BOUNCE_FM/twilight_outro.ogg', 'BOUNCE_FM/twilight_outro_dj_1.ogg', 'BOUNCE_FM/twilight_outro_dj_2.ogg']
    },
    {
      name: 'WEST_COAST_POPLOCK',
      intros: ['BOUNCE_FM/west_coast_poplock_intro.ogg', 'BOUNCE_FM/west_coast_poplock_intro_dj_1.ogg', 'BOUNCE_FM/west_coast_poplock_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/west_coast_poplock_mid.ogg',
      outros: ['BOUNCE_FM/west_coast_poplock_outro.ogg', 'BOUNCE_FM/west_coast_poplock_outro_dj_1.ogg', 'BOUNCE_FM/west_coast_poplock_outro_dj_2.ogg']
    },
    {
      name: 'YOU_DROPPED_A_BOMB_ON_ME',
      intros: ['BOUNCE_FM/you_dropped_a_bomb_on_me_intro.ogg', 'BOUNCE_FM/you_dropped_a_bomb_on_me_intro_dj_1.ogg', 'BOUNCE_FM/you_dropped_a_bomb_on_me_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/you_dropped_a_bomb_on_me_mid.ogg',
      outros: ['BOUNCE_FM/you_dropped_a_bomb_on_me_outro.ogg', 'BOUNCE_FM/you_dropped_a_bomb_on_me_outro_dj_1.ogg', 'BOUNCE_FM/you_dropped_a_bomb_on_me_outro_dj_2.ogg']
    },
    {
      name: 'YUM_YUM',
      intros: ['BOUNCE_FM/yum_yum_intro.ogg', 'BOUNCE_FM/yum_yum_intro_dj_1.ogg', 'BOUNCE_FM/yum_yum_intro_dj_2.ogg'],
      mid: 'BOUNCE_FM/yum_yum_mid.ogg',
      outros: ['BOUNCE_FM/yum_yum_outro.ogg', 'BOUNCE_FM/yum_yum_outro_dj_1.ogg', 'BOUNCE_FM/yum_yum_outro_dj_2.ogg']
    }
  ];

  const bounce_fm_ids = [
    'BOUNCE_FM/id_nobodys_sober_at_the_party.ogg',
    'BOUNCE_FM/id_party_ships_crash_landed.ogg',
    'BOUNCE_FM/id_ready_to_fly_into_space.ogg',
    'BOUNCE_FM/id_share_your_stash_with_everyone_baby.ogg',
    'BOUNCE_FM/id_the_party_never_stops.ogg',
    'BOUNCE_FM/id_until_everyones_pregnant.ogg',
    'BOUNCE_FM/id_what_did_i_do_last_night.ogg',
    'BOUNCE_FM/id_whos_next_on_my_wife.ogg'
  ];

  const bounce_fm_djs_callers = {
    dj: [
      'BOUNCE_FM/dj_a_b_c_d_me.ogg',
      'BOUNCE_FM/dj_a_shitty_outlook_on_life.ogg',
      'BOUNCE_FM/dj_back_up_into_something_wet.ogg',
      'BOUNCE_FM/dj_blunted.ogg',
      'BOUNCE_FM/dj_can_you_imagine_me_in_handcuffs.ogg',
      'BOUNCE_FM/dj_do_fries_go_with_that_shake.ogg',
      'BOUNCE_FM/dj_doing_it_to_you_in_your_earhole.ogg',
      'BOUNCE_FM/dj_funk_is_the_dna_in_rap.ogg',
      'BOUNCE_FM/dj_i_cant_believe_my_lyin_eyes.ogg',
      'BOUNCE_FM/dj_i_know_all_about_that_prune.ogg',
      'BOUNCE_FM/dj_if_i_look_back_ill_see_me_coming.ogg',
      'BOUNCE_FM/dj_im_not_saying_please.ogg',
      'BOUNCE_FM/dj_like_a_choo_choo.ogg',
      'BOUNCE_FM/dj_no_mental_hospital_can_hold_me.ogg',
      'BOUNCE_FM/dj_party_til_you_poop.ogg',
      'BOUNCE_FM/dj_primordial_funk.ogg',
      'BOUNCE_FM/dj_proper_preparation_prevent_piss_poor_performance.ogg',
      'BOUNCE_FM/dj_shake_your_ass.ogg',
      'BOUNCE_FM/dj_smelling_like_the_funk.ogg',
      'BOUNCE_FM/dj_so_you_wanna_be_me.ogg',
      'BOUNCE_FM/dj_stop_funking_around.ogg',
      'BOUNCE_FM/dj_stop_towing_the_funktipus_mobile.ogg',
      'BOUNCE_FM/dj_take_it_off_baby.ogg',
      'BOUNCE_FM/dj_the_funktapus_is_like_sushi.ogg',
      'BOUNCE_FM/dj_theres_a_lot_of_stress_out_there.ogg',
      'BOUNCE_FM/dj_those_casinos_is_getting_crazy.ogg',
      'BOUNCE_FM/dj_what_have_you_been_smoking.ogg',
      'BOUNCE_FM/dj_would_you_believe_theyre_paying_me_for_this.ogg',
      'BOUNCE_FM/dj_you_know_you_want_it.ogg',
      'BOUNCE_FM/dj_you_lost_the_funk.ogg'
    ],
    caller: [
      'BOUNCE_FM/caller_everyone_here_is_so_fake.ogg',
      'BOUNCE_FM/caller_how_do_i_get_on_the_party_ship.ogg',
      'BOUNCE_FM/caller_sounds_like_you_have_a_bipolar_disorder.ogg'
    ]
  };

  const bounce_fm_time = {
    morning: ['BOUNCE_FM/atmosphere_morning_1.ogg', 'BOUNCE_FM/atmosphere_morning_2.ogg', 'BOUNCE_FM/atmosphere_morning_3.ogg'],
    evening: ['BOUNCE_FM/atmosphere_evening_1.ogg', 'BOUNCE_FM/atmosphere_evening_2.ogg'],
    night: ['BOUNCE_FM/atmosphere_night_1.ogg', 'BOUNCE_FM/atmosphere_night_2.ogg']
  };

  const bounce_fm_weather = {
    sunny: ['BOUNCE_FM/atmosphere_sunny_1.ogg', 'BOUNCE_FM/atmosphere_sunny_2.ogg'],
    rain: ['BOUNCE_FM/atmosphere_rain_1.ogg', 'BOUNCE_FM/atmosphere_rain_2.ogg'],
    fog: ['BOUNCE_FM/atmosphere_fog_1.ogg', 'BOUNCE_FM/atmosphere_fog_2.ogg', 'BOUNCE_FM/atmosphere_smog.ogg']
  };

  const bounce_fm_story = {
    16: ['BOUNCE_FM/story_lights_in_desert.ogg'],
    24: ['BOUNCE_FM/story_lost_jumpjet.ogg']
  };

  const obj_bounce_fm = {
    musicasList: bounce_fm_musicas,
    grupoID: bounce_fm_ids,
    grupoDJSolo: bounce_fm_djs_callers, 
    timePools: bounce_fm_time,
    weatherPools: bounce_fm_weather,
    storyPools: bounce_fm_story,
    grupoAdv: G.adv.sa 
  };

  /* ================================================================================= */
  /* ==================================== 4. CSR ===================================== */
  /* ================================================================================= */

  const csr_musicas = [
    {
      name: 'DONT_BE_AFRAID',
      intros: ['CSR/dont_be_afraid_intro.ogg', 'CSR/dont_be_afraid_intro_dj_1.ogg', 'CSR/dont_be_afraid_intro_dj_2.ogg'],
      mid: 'CSR/dont_be_afraid_mid.ogg',
      outros: ['CSR/dont_be_afraid_outro.ogg', 'CSR/dont_be_afraid_outro_dj_1.ogg', 'CSR/dont_be_afraid_outro_dj_2.ogg']
    },
    {
      name: 'DONT_BE_CRUEL',
      intros: ['CSR/dont_be_cruel_intro.ogg', 'CSR/dont_be_cruel_intro_dj_1.ogg', 'CSR/dont_be_cruel_intro_dj_2.ogg'],
      mid: 'CSR/dont_be_cruel_mid.ogg',
      outros: ['CSR/dont_be_cruel_outro.ogg', 'CSR/dont_be_cruel_outro_dj_1.ogg', 'CSR/dont_be_cruel_outro_dj_2.ogg']
    },
    {
      name: 'GROOVE_ME',
      intros: ['CSR/groove_me_intro.ogg', 'CSR/groove_me_intro_dj_1.ogg', 'CSR/groove_me_intro_dj_2.ogg'],
      mid: 'CSR/groove_me_mid.ogg',
      outros: ['CSR/groove_me_outro.ogg', 'CSR/groove_me_outro_dj_1.ogg', 'CSR/groove_me_outro_dj_2.ogg']
    },
    {
      name: 'I_GOT_THE_FEELING',
      intros: ['CSR/i_got_the_feeling_intro.ogg', 'CSR/i_got_the_feeling_intro_dj_1.ogg', 'CSR/i_got_the_feeling_intro_dj_2.ogg'],
      mid: 'CSR/i_got_the_feeling_mid.ogg',
      outros: ['CSR/i_got_the_feeling_outro.ogg', 'CSR/i_got_the_feeling_outro_dj_1.ogg', 'CSR/i_got_the_feeling_outro_dj_2.ogg']
    },
    {
      name: 'IM_SO_INTO_YOU',
      intros: ['CSR/im_so_into_you_intro.ogg', 'CSR/im_so_into_you_intro_dj_1.ogg', 'CSR/im_so_into_you_intro_dj_2.ogg'],
      mid: 'CSR/im_so_into_you_mid.ogg',
      outros: ['CSR/im_so_into_you_outro.ogg', 'CSR/im_so_into_you_outro_dj_1.ogg', 'CSR/im_so_into_you_outro_dj_2.ogg']
    },
    {
      name: 'KEEP_ON_MOVIN',
      intros: ['CSR/keep_on_movin_intro.ogg', 'CSR/keep_on_movin_intro_dj_1.ogg', 'CSR/keep_on_movin_intro_dj_2.ogg'],
      mid: 'CSR/keep_on_movin_mid.ogg',
      outros: ['CSR/keep_on_movin_outro.ogg', 'CSR/keep_on_movin_outro_dj_1.ogg', 'CSR/keep_on_movin_outro_dj_2.ogg']
    },
    {
      name: 'MOTOWNPHILLY',
      intros: ['CSR/motownphilly_intro.ogg', 'CSR/motownphilly_intro_dj_1.ogg', 'CSR/motownphilly_intro_dj_2.ogg'],
      mid: 'CSR/motownphilly_mid.ogg',
      outros: ['CSR/motownphilly_outro.ogg', 'CSR/motownphilly_outro_dj_1.ogg', 'CSR/motownphilly_outro_dj_2.ogg']
    },
    {
      name: 'MY_LOVIN_NEVER_GONNA_GET_IT',
      intros: ['CSR/my_lovin_never_gonna_get_it_intro.ogg', 'CSR/my_lovin_never_gonna_get_it_intro_dj_1.ogg', 'CSR/my_lovin_never_gonna_get_it_intro_dj_2.ogg'],
      mid: 'CSR/my_lovin_never_gonna_get_it_mid.ogg',
      outros: ['CSR/my_lovin_never_gonna_get_it_outro.ogg', 'CSR/my_lovin_never_gonna_get_it_outro_dj_1.ogg', 'CSR/my_lovin_never_gonna_get_it_outro_dj_2.ogg']
    },
    {
      name: 'NEW_JACK_SWING',
      intros: ['CSR/new_jack_swing_intro.ogg', 'CSR/new_jack_swing_intro_dj_1.ogg', 'CSR/new_jack_swing_intro_dj_2.ogg'],
      mid: 'CSR/new_jack_swing_mid.ogg',
      outros: ['CSR/new_jack_swing_outro.ogg', 'CSR/new_jack_swing_outro_dj_1.ogg', 'CSR/new_jack_swing_outro_dj_2.ogg']
    },
    {
      name: 'POISON',
      intros: ['CSR/poison_intro.ogg', 'CSR/poison_intro_dj_1.ogg', 'CSR/poison_intro_dj_2.ogg'],
      mid: 'CSR/poison_mid.ogg',
      outros: ['CSR/poison_outro.ogg', 'CSR/poison_outro_dj_1.ogg', 'CSR/poison_outro_dj_2.ogg']
    },
    {
      name: 'RUB_YOU_THE_RIGHT_WAY',
      intros: ['CSR/rub_you_the_right_way_intro.ogg', 'CSR/rub_you_the_right_way_intro_dj_1.ogg', 'CSR/rub_you_the_right_way_intro_dj_2.ogg'],
      mid: 'CSR/rub_you_the_right_way_mid.ogg',
      outros: ['CSR/rub_you_the_right_way_outro.ogg', 'CSR/rub_you_the_right_way_outro_dj_1.ogg', 'CSR/rub_you_the_right_way_outro_dj_2.ogg']
    },
    {
      name: 'SENSITIVITY',
      intros: ['CSR/sensitivity_intro.ogg', 'CSR/sensitivity_intro_dj_1.ogg', 'CSR/sensitivity_intro_dj_2.ogg'],
      mid: 'CSR/sensitivity_mid.ogg',
      outros: ['CSR/sensitivity_outro.ogg', 'CSR/sensitivity_outro_dj_1.ogg', 'CSR/sensitivity_outro_dj_2.ogg']
    },
    {
      name: 'SO_YOU_LIKE_WHAT_YOU_SEE',
      intros: ['CSR/so_you_like_what_you_see_intro.ogg', 'CSR/so_you_like_what_you_see_intro_dj_1.ogg', 'CSR/so_you_like_what_you_see_intro_dj_2.ogg'],
      mid: 'CSR/so_you_like_what_you_see_mid.ogg',
      outros: ['CSR/so_you_like_what_you_see_outro.ogg', 'CSR/so_you_like_what_you_see_outro_dj_1.ogg', 'CSR/so_you_like_what_you_see_outro_dj_2.ogg']
    }
  ];

  const csr_ids = [
    'CSR/id_old_jack_we_killed_his_old_ass.ogg',
    'CSR/id_sold_my_soul_to_the_devil.ogg',
    'CSR/id_soul_has_to_have_integrity.ogg',
    'CSR/id_swing_on_this_baby.ogg',
    'CSR/id_the_home_of_new_jack_swing.ogg',
    'CSR/id_what_do_you_call_it.ogg',
    'CSR/id_what_happens_when_you_mix.ogg',
    'CSR/id_why_are_you_dressed_like_a_preppie.ogg'
  ];

  const csr_djs_callers = {
    dj: [
      'CSR/dj_buying_a_cane.ogg',
      'CSR/dj_contemporary_soul_radio.ogg',
      'CSR/dj_get_off_your_fat_ass_and_dance.ogg',
      'CSR/dj_get_ready_to_get_down.ogg',
      'CSR/dj_momentum.ogg',
      'CSR/dj_never_trust_a_big_butt_and_a_smile.ogg',
      'CSR/dj_one_is_music_the_other_belongs_in_therapy.ogg',
      'CSR/dj_people_that_can_really_sing.ogg',
      'CSR/dj_sing_my_name.ogg',
      'CSR/dj_swing_with_your_wife.ogg',
      'CSR/dj_the_home_of_modern_soul.ogg',
      'CSR/dj_with_a_good_voice_and_some_music.ogg'
    ],
    caller: [
      'CSR/caller_im_in_love_with_a_girl.ogg',
      'CSR/caller_male_chauvanist_pigs.ogg'
    ]
  };

  const csr_time = {
    morning: ['CSR/atmosphere_morning_1.ogg', 'CSR/atmosphere_morning_2.ogg'],
    evening: ['CSR/atmosphere_evening.ogg'],
    night: ['CSR/atmosphere_night_1.ogg', 'CSR/atmosphere_night_2.ogg']
  };

  const csr_weather = {
    sunny: ['CSR/atmosphere_sunny_1.ogg', 'CSR/atmosphere_sunny_2.ogg'],
    rain: ['CSR/atmosphere_rain_1.ogg', 'CSR/atmosphere_rain_2.ogg'],
    fog: ['CSR/atmosphere_fog_1.ogg', 'CSR/atmosphere_fog_2.ogg']
  };

  const csr_story = {
    10: ['CSR/story_weed_farm_burned_down.ogg'],
    15: ['CSR/story_casino_opening.ogg'],
    16: ['CSR/story_lights_in_desert.ogg']
  };

  const obj_csr = {
    musicasList: csr_musicas,
    grupoID: csr_ids,
    grupoDJSolo: csr_djs_callers, 
    timePools: csr_time,
    weatherPools: csr_weather,
    storyPools: csr_story,
    grupoAdv: G.adv.sa 
  };

  /* ================================================================================= */
  /* ================================== 5. K-JAH WEST ================================ */
  /* ================================================================================= */

  const kjah_musicas = [
    {
      name: 'ARMAGIDEON_TIME',
      intros: ['KJAH/armagideon_time_intro.ogg', 'KJAH/armagideon_time_intro_dj_1.ogg', 'KJAH/armagideon_time_intro_dj_2.ogg'],
      mid: 'KJAH/armagideon_time_mid.ogg',
      outros: ['KJAH/armagideon_time_outro.ogg', 'KJAH/armagideon_time_outro_dj_1.ogg', 'KJAH/armagideon_time_outro_dj_2.ogg']
    },
    {
      name: 'BAM_BAM',
      intros: ['KJAH/bam_bam_intro.ogg', 'KJAH/bam_bam_intro_dj_1.ogg', 'KJAH/bam_bam_intro_dj_2.ogg'],
      mid: 'KJAH/bam_bam_mid.ogg',
      outros: ['KJAH/bam_bam_outro.ogg', 'KJAH/bam_bam_outro_dj_1.ogg']
    },
    {
      name: 'BATTY_RIDER',
      intros: ['KJAH/batty_rider_intro.ogg', 'KJAH/batty_rider_intro_dj_1.ogg', 'KJAH/batty_rider_intro_dj_2.ogg'],
      mid: 'KJAH/batty_rider_mid.ogg',
      outros: ['KJAH/batty_rider_outro.ogg', 'KJAH/batty_rider_outro_dj_1.ogg', 'KJAH/batty_rider_outro_dj_2.ogg']
    },
    {
      name: 'CHASE_THE_DEVIL',
      intros: ['KJAH/chase_the_devil_intro.ogg', 'KJAH/chase_the_devil_intro_dj_1.ogg', 'KJAH/chase_the_devil_intro_dj_2.ogg'],
      mid: 'KJAH/chase_the_devil_mid.ogg',
      outros: ['KJAH/chase_the_devil_outro.ogg', 'KJAH/chase_the_devil_outro_dj_1.ogg']
    },
    {
      name: 'COCAINE_IN_MY_BRAIN',
      intros: ['KJAH/cocaine_in_my_brain_intro.ogg', 'KJAH/cocaine_in_my_brain_intro_dj_1.ogg', 'KJAH/cocaine_in_my_brain_intro_dj_2.ogg'],
      mid: 'KJAH/cocaine_in_my_brain_mid.ogg',
      outros: ['KJAH/cocaine_in_my_brain_outro.ogg', 'KJAH/cocaine_in_my_brain_outro_dj_1.ogg', 'KJAH/cocaine_in_my_brain_outro_dj_2.ogg']
    },
    {
      name: 'DONT_LET_IT_GO_TO_YOUR_HEAD',
      intros: ['KJAH/dont_let_it_go_to_your_head_intro.ogg', 'KJAH/dont_let_it_go_to_your_head_intro_dj_1.ogg', 'KJAH/dont_let_it_go_to_your_head_intro_dj_2.ogg'],
      mid: 'KJAH/dont_let_it_go_to_your_head_mid.ogg',
      outros: ['KJAH/dont_let_it_go_to_your_head_outro.ogg', 'KJAH/dont_let_it_go_to_your_head_outro_dj_1.ogg', 'KJAH/dont_let_it_go_to_your_head_outro_dj_2.ogg']
    },
    {
      name: 'DRUM_PAN_SOUND',
      intros: ['KJAH/drum_pan_sound_intro.ogg', 'KJAH/drum_pan_sound_intro_dj_1.ogg', 'KJAH/drum_pan_sound_intro_dj_2.ogg'],
      mid: 'KJAH/drum_pan_sound_mid.ogg',
      outros: ['KJAH/drum_pan_sound_outro.ogg', 'KJAH/drum_pan_sound_outro_dj_1.ogg', 'KJAH/drum_pan_sound_outro_dj_2.ogg']
    },
    {
      name: 'FUNKY_KINGSTON',
      intros: ['KJAH/funky_kingston_intro.ogg', 'KJAH/funky_kingston_intro_dj_1.ogg', 'KJAH/funky_kingston_intro_dj_2.ogg'],
      mid: 'KJAH/funky_kingston_mid.ogg',
      outros: ['KJAH/funky_kingston_outro.ogg', 'KJAH/funky_kingston_outro_dj_1.ogg', 'KJAH/funky_kingston_outro_dj_2.ogg']
    },
    {
      name: 'GREAT_TRAIN_ROBBERY',
      intros: ['KJAH/great_train_robbery_intro.ogg', 'KJAH/great_train_robbery_intro_dj_1.ogg'],
      mid: 'KJAH/great_train_robbery_mid.ogg',
      outros: ['KJAH/great_train_robbery_outro.ogg', 'KJAH/great_train_robbery_outro_dj_1.ogg', 'KJAH/great_train_robbery_outro_dj_2.ogg']
    },
    {
      name: 'HERE_I_COME',
      intros: ['KJAH/here_i_come_intro.ogg', 'KJAH/here_i_come_intro_dj_1.ogg', 'KJAH/here_i_come_intro_dj_2.ogg'],
      mid: 'KJAH/here_i_come_mid.ogg',
      outros: ['KJAH/here_i_come_outro.ogg', 'KJAH/here_i_come_outro_dj_1.ogg', 'KJAH/here_i_come_outro_dj_2.ogg']
    },
    {
      name: 'KING_TUBBY_MEETS_THE_ROCKERS_UPTOWN',
      intros: ['KJAH/king_tubby_meets_the_rockers_uptown_intro.ogg', 'KJAH/king_tubby_meets_the_rockers_uptown_intro_dj_1.ogg', 'KJAH/king_tubby_meets_the_rockers_uptown_intro_dj_2.ogg'],
      mid: 'KJAH/king_tubby_meets_the_rockers_uptown_mid.ogg',
      outros: ['KJAH/king_tubby_meets_the_rockers_uptown_outro.ogg', 'KJAH/king_tubby_meets_the_rockers_uptown_outro_dj_1.ogg', 'KJAH/king_tubby_meets_the_rockers_uptown_outro_dj_2.ogg']
    },
    {
      name: 'PRESSURE_DROP',
      intros: ['KJAH/pressure_drop_intro.ogg', 'KJAH/pressure_drop_intro_dj_1.ogg', 'KJAH/pressure_drop_intro_dj_2.ogg'],
      mid: 'KJAH/pressure_drop_mid.ogg',
      outros: ['KJAH/pressure_drop_outro.ogg', 'KJAH/pressure_drop_outro_dj_1.ogg', 'KJAH/pressure_drop_outro_dj_2.ogg']
    },
    {
      name: 'REVOLUTION',
      intros: ['KJAH/revolution_intro.ogg', 'KJAH/revolution_intro_dj_1.ogg', 'KJAH/revolution_intro_dj_2.ogg'],
      mid: 'KJAH/revolution_mid.ogg',
      outros: ['KJAH/revolution_outro.ogg', 'KJAH/revolution_outro_dj_1.ogg', 'KJAH/revolution_outro_dj_2.ogg']
    },
    {
      name: 'RING_MY_BELL',
      intros: ['KJAH/ring_my_bell_intro.ogg', 'KJAH/ring_my_bell_intro_dj_1.ogg', 'KJAH/ring_my_bell_intro_dj_2.ogg'],
      mid: 'KJAH/ring_my_bell_mid.ogg',
      outros: ['KJAH/ring_my_bell_outro.ogg', 'KJAH/ring_my_bell_outro_dj_1.ogg', 'KJAH/ring_my_bell_outro_dj_2.ogg']
    },
    {
      name: 'SIDEWALK_KILLER',
      intros: ['KJAH/sidewalk_killer_intro.ogg', 'KJAH/sidewalk_killer_intro_dj_1.ogg', 'KJAH/sidewalk_killer_intro_dj_2.ogg'],
      mid: 'KJAH/sidewalk_killer_mid.ogg',
      outros: ['KJAH/sidewalk_killer_outro.ogg', 'KJAH/sidewalk_killer_outro_dj_1.ogg', 'KJAH/sidewalk_killer_outro_dj_2.ogg']
    },
    {
      name: 'WICKED_INNA_BED',
      intros: ['KJAH/wicked_inna_bed_intro.ogg', 'KJAH/wicked_inna_bed_intro_dj_1.ogg', 'KJAH/wicked_inna_bed_intro_dj_2.ogg'],
      mid: 'KJAH/wicked_inna_bed_mid.ogg',
      outros: ['KJAH/wicked_inna_bed_outro.ogg', 'KJAH/wicked_inna_bed_outro_dj_1.ogg', 'KJAH/wicked_inna_bed_outro_dj_2.ogg']
    }
  ];

  const kjah_ids = [
    'KJAH/id_a_breath_of_fresh_air.ogg',
    'KJAH/id_cool_out_with_k_jah.ogg',
    'KJAH/id_k_jah_west.ogg',
    'KJAH/id_no_argument_now.ogg',
    'KJAH/id_put_your_guns_down.ogg',
    'KJAH/id_stop_working.ogg',
    'KJAH/id_that_aint_bass.ogg',
    'KJAH/id_the_best_in_reggae.ogg',
    'KJAH/id_we_are_pilgrims.ogg',
    'KJAH/id_winners_dont_use_hard_drugs.ogg'
  ];

  const kjah_djs_callers = {
    dj: [
      'KJAH/dj_a_straight_man.ogg',
      'KJAH/dj_actor_johnny.ogg',
      'KJAH/dj_all_they_do_is_smoke.ogg',
      'KJAH/dj_beware_of_the_parlour_tricks.ogg',
      'KJAH/dj_caught_the_acting_bug.ogg',
      'KJAH/dj_dreadlocks_gonna_save_us_all.ogg',
      'KJAH/dj_hes_no_rockstar.ogg',
      'KJAH/dj_i_love_my_music.ogg',
      'KJAH/dj_if_youre_working_quit.ogg',
      'KJAH/dj_ill_get_myself_in_line.ogg',
      'KJAH/dj_mash_it_up.ogg',
      'KJAH/dj_more_smokin_reggae.ogg',
      'KJAH/dj_my_best_friend_got_stolen_away.ogg',
      'KJAH/dj_smoking_break.ogg',
      'KJAH/dj_snow_in_jamaica.ogg',
      'KJAH/dj_so_you_want_to_be_a_rude_boy.ogg',
      'KJAH/dj_that_sound_like_a_good_idea.ogg',
      'KJAH/dj_the_british.ogg',
      'KJAH/dj_they_just_lock_you_up.ogg',
      'KJAH/dj_to_all_you_scientists.ogg',
      'KJAH/dj_where_is_the_love_gone.ogg',
      'KJAH/dj_yeah_this_is_k_jah_west.ogg'
    ],
    caller: [] // Não possui ligações
  };

  const kjah_time = {
    morning: ['KJAH/atmosphere_morning_1.ogg', 'KJAH/atmosphere_morning_2.ogg'],
    evening: ['KJAH/atmosphere_evening_1.ogg', 'KJAH/atmosphere_evening_2.ogg'],
    night: ['KJAH/atmosphere_night_1.ogg', 'KJAH/atmosphere_night_2.ogg']
  };

  const kjah_weather = {
    sunny: ['KJAH/atmosphere_sunny_1.ogg', 'KJAH/atmosphere_sunny_2.ogg'],
    rain: ['KJAH/atmosphere_rain_1.ogg', 'KJAH/atmosphere_rain_2.ogg', 'KJAH/atmosphere_storm.ogg'],
    fog: ['KJAH/atmosphere_fog_1.ogg', 'KJAH/atmosphere_fog_2.ogg']
  };

  const kjah_story = {
    7: ['KJAH/story_gang_warfare.ogg'],
    16: ['KJAH/story_lights_in_desert.ogg'],
    24: ['KJAH/story_foolishness_of_babylon.ogg'],
    28: ['KJAH/story_riot.ogg']
  };

  const obj_kjah = {
    musicasList: kjah_musicas,
    grupoID: kjah_ids,
    grupoDJSolo: kjah_djs_callers, 
    timePools: kjah_time,
    weatherPools: kjah_weather,
    storyPools: kjah_story,
    grupoAdv: G.adv.sa 
  };


  /* ================================================================================= */
  /* ==================================== 6. K-ROSE ================================== */
  /* ================================================================================= */

  const krose_musicas = [
    {
      name: 'ALL_MY_EXES_LIVE_IN_TEXAS',
      intros: ['KROSE/all_my_exes_live_in_texas_intro.ogg', 'KROSE/all_my_exes_live_in_texas_intro_dj_1.ogg', 'KROSE/all_my_exes_live_in_texas_intro_dj_2.ogg'],
      mid: 'KROSE/all_my_exes_live_in_texas_mid.ogg',
      outros: ['KROSE/all_my_exes_live_in_texas_outro.ogg', 'KROSE/all_my_exes_live_in_texas_outro_dj_1.ogg', 'KROSE/all_my_exes_live_in_texas_outro_dj_2.ogg']
    },
    {
      name: 'ALWAYS_WANTING_YOU',
      intros: ['KROSE/always_wanting_you_intro.ogg', 'KROSE/always_wanting_you_intro_dj_1.ogg', 'KROSE/always_wanting_you_intro_dj_2.ogg'],
      mid: 'KROSE/always_wanting_you_mid.ogg',
      outros: ['KROSE/always_wanting_you_outro.ogg', 'KROSE/always_wanting_you_outro_dj_1.ogg', 'KROSE/always_wanting_you_outro_dj_2.ogg']
    },
    {
      name: 'AMOS_MOSES',
      intros: ['KROSE/amos_moses_intro.ogg', 'KROSE/amos_moses_intro_dj_1.ogg', 'KROSE/amos_moses_intro_dj_2.ogg'],
      mid: 'KROSE/amos_moses_mid.ogg',
      outros: ['KROSE/amos_moses_outro.ogg', 'KROSE/amos_moses_outro_dj_1.ogg', 'KROSE/amos_moses_outro_dj_2.ogg']
    },
    {
      name: 'BED_OF_ROSES',
      intros: ['KROSE/bed_of_roses_intro.ogg', 'KROSE/bed_of_roses_intro_dj_1.ogg', 'KROSE/bed_of_roses_intro_dj_2.ogg'],
      mid: 'KROSE/bed_of_roses_mid.ogg',
      outros: ['KROSE/bed_of_roses_outro.ogg', 'KROSE/bed_of_roses_outro_dj_1.ogg', 'KROSE/bed_of_roses_outro_dj_2.ogg']
    },
    {
      name: 'CRAZY',
      intros: ['KROSE/crazy_intro.ogg', 'KROSE/crazy_intro_dj_1.ogg', 'KROSE/crazy_intro_dj_2.ogg'],
      mid: 'KROSE/crazy_mid.ogg',
      outros: ['KROSE/crazy_outro.ogg', 'KROSE/crazy_outro_dj_1.ogg', 'KROSE/crazy_outro_dj_2.ogg']
    },
    {
      name: 'HEY_GOOD_LOOKIN',
      intros: ['KROSE/hey_good_lookin_intro.ogg', 'KROSE/hey_good_lookin_intro_dj_1.ogg', 'KROSE/hey_good_lookin_intro_dj_2.ogg'],
      mid: 'KROSE/hey_good_lookin_mid.ogg',
      outros: ['KROSE/hey_good_lookin_outro.ogg', 'KROSE/hey_good_lookin_outro_dj_1.ogg', 'KROSE/hey_good_lookin_outro_dj_2.ogg']
    },
    {
      name: 'I_LOVE_A_RAINY_NIGHT',
      intros: ['KROSE/i_love_a_rainy_night_intro.ogg', 'KROSE/i_love_a_rainy_night_intro_dj_1.ogg', 'KROSE/i_love_a_rainy_night_intro_dj_2.ogg'],
      mid: 'KROSE/i_love_a_rainy_night_mid.ogg',
      outros: ['KROSE/i_love_a_rainy_night_outro.ogg', 'KROSE/i_love_a_rainy_night_outro_dj_1.ogg', 'KROSE/i_love_a_rainy_night_outro_dj_2.ogg']
    },
    {
      name: 'LOUISIANA_WOMAN_MISSISSIPPI_MAN',
      intros: ['KROSE/louisiana_woman_mississippi_man_intro.ogg', 'KROSE/louisiana_woman_mississippi_man_intro_dj_1.ogg', 'KROSE/louisiana_woman_mississippi_man_intro_dj_2.ogg'],
      mid: 'KROSE/louisiana_woman_mississippi_man_mid.ogg',
      outros: ['KROSE/louisiana_woman_mississippi_man_outro.ogg', 'KROSE/louisiana_woman_mississippi_man_outro_dj_1.ogg', 'KROSE/louisiana_woman_mississippi_man_outro_dj_2.ogg']
    },
    {
      name: 'MAKE_THE_WORLD_GO_AWAY',
      intros: ['KROSE/make_the_world_go_away_intro.ogg', 'KROSE/make_the_world_go_away_intro_dj_1.ogg', 'KROSE/make_the_world_go_away_intro_dj_2.ogg'],
      mid: 'KROSE/make_the_world_go_away_mid.ogg',
      outros: ['KROSE/make_the_world_go_away_outro.ogg', 'KROSE/make_the_world_go_away_outro_dj_1.ogg', 'KROSE/make_the_world_go_away_outro_dj_2.ogg']
    },
    {
      name: 'MAMMAS_DONT_LET_YOUR_BABIES',
      intros: ['KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_intro.ogg', 'KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_intro_dj_1.ogg', 'KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_intro_dj_2.ogg'],
      mid: 'KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_mid.ogg',
      outros: ['KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_outro.ogg', 'KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_outro_dj_1.ogg', 'KROSE/mammas_dont_let_your_babies_grow_up_to_be_cowboys_outro_dj_2.ogg']
    },
    {
      name: 'NEW_YORK_CITY',
      intros: ['KROSE/new_york_city_intro.ogg', 'KROSE/new_york_city_intro_dj_1.ogg', 'KROSE/new_york_city_intro_dj_2.ogg'],
      mid: 'KROSE/new_york_city_mid.ogg',
      outros: ['KROSE/new_york_city_outro.ogg', 'KROSE/new_york_city_outro_dj_1.ogg', 'KROSE/new_york_city_outro_dj_2.ogg']
    },
    {
      name: 'ONE_STEP_FORWARD',
      intros: ['KROSE/one_step_forward_intro.ogg', 'KROSE/one_step_forward_intro_dj_1.ogg', 'KROSE/one_step_forward_intro_dj_2.ogg'],
      mid: 'KROSE/one_step_forward_mid.ogg',
      outros: ['KROSE/one_step_forward_outro.ogg', 'KROSE/one_step_forward_outro_dj_1.ogg', 'KROSE/one_step_forward_outro_dj_2.ogg']
    },
    {
      name: 'QUEEN_OF_HEARTS',
      intros: ['KROSE/queen_of_hearts_intro.ogg', 'KROSE/queen_of_hearts_intro_dj_1.ogg', 'KROSE/queen_of_hearts_intro_dj_2.ogg'],
      mid: 'KROSE/queen_of_hearts_mid.ogg',
      outros: ['KROSE/queen_of_hearts_outro.ogg', 'KROSE/queen_of_hearts_outro_dj_1.ogg', 'KROSE/queen_of_hearts_outro_dj_2.ogg']
    },
    {
      name: 'THE_LETTER_THAT_JOHNNY_WALKER_READ',
      intros: ['KROSE/the_letter_that_johnny_walker_read_intro.ogg', 'KROSE/the_letter_that_johnny_walker_read_intro_dj_1.ogg', 'KROSE/the_letter_that_johnny_walker_read_intro_dj_2.ogg'],
      mid: 'KROSE/the_letter_that_johnny_walker_read_mid.ogg',
      outros: ['KROSE/the_letter_that_johnny_walker_read_outro.ogg', 'KROSE/the_letter_that_johnny_walker_read_outro_dj_1.ogg', 'KROSE/the_letter_that_johnny_walker_read_outro_dj_2.ogg']
    },
    {
      name: 'THREE_CIGARETTES_IN_THE_ASHTRAY',
      intros: ['KROSE/three_cigarettes_in_the_ashtray_intro.ogg', 'KROSE/three_cigarettes_in_the_ashtray_intro_dj_1.ogg', 'KROSE/three_cigarettes_in_the_ashtray_intro_dj_2.ogg'],
      mid: 'KROSE/three_cigarettes_in_the_ashtray_mid.ogg',
      outros: ['KROSE/three_cigarettes_in_the_ashtray_outro.ogg', 'KROSE/three_cigarettes_in_the_ashtray_outro_dj_1.ogg', 'KROSE/three_cigarettes_in_the_ashtray_outro_dj_2.ogg']
    }
  ];

  const krose_ids = [
    'KROSE/id_all_america_loves_a_cowboy.ogg',
    'KROSE/id_barefoot_and_pregnant_again.ogg',
    'KROSE/id_farm_animals.ogg',
    'KROSE/id_from_cow_poking_to_cow_tipping.ogg',
    'KROSE/id_invented_the_electric_guitar.ogg',
    'KROSE/id_iron_horse_with_a_drinking_problem.ogg',
    'KROSE/id_it_takes_a_cowboy_to_know_when_to_shoot.ogg',
    'KROSE/id_when_love_shoots_you_in_the_back.ogg',
    'KROSE/id_whistle_on_a_lonely_night.ogg'
  ];

  const krose_djs_callers = {
    dj: [
      'KROSE/dj_belt_buckles.ogg',
      'KROSE/dj_darwinism.ogg',
      'KROSE/dj_downstairs_harmonica_talents.ogg',
      'KROSE/dj_euthanasia_is_a_beautiful_thing.ogg',
      'KROSE/dj_harmonica_down_south_again.ogg',
      'KROSE/dj_harmonica_in_my_pants.ogg',
      'KROSE/dj_hurts_a_little_when_i_try_to_put_it_in.ogg',
      'KROSE/dj_i_am_shit_faced.ogg',
      'KROSE/dj_i_keep_moving_on.ogg',
      'KROSE/dj_i_might_start_to_cry.ogg',
      'KROSE/dj_it_aint_easy_raising_nine_kids.ogg',
      'KROSE/dj_its_like_kant_said.ogg',
      'KROSE/dj_latte.ogg',
      'KROSE/dj_legs_akimbo.ogg',
      'KROSE/dj_like_the_plug_but_a_musical_version.ogg',
      'KROSE/dj_love_everyone_like_myself.ogg',
      'KROSE/dj_make_you_want_to_square_dance.ogg',
      'KROSE/dj_on_the_prairie.ogg',
      'KROSE/dj_play_a_harmonica_and_sing_at_the_same_time.ogg',
      'KROSE/dj_you_know_what_war_im_talking_about.ogg'
    ],
    caller: [
      'KROSE/caller_being_faithful_and_cheating_at_the_same_time.ogg',
      'KROSE/caller_wicked_evil_wealthy_woman.ogg'
    ]
  };

  const krose_time = {
    morning: ['KROSE/atmosphere_morning_1.ogg', 'KROSE/atmosphere_morning_2.ogg'],
    evening: [], // Sem narrações de fim de tarde para a K-Rose (Toca direto a vinheta)
    night: ['KROSE/atmosphere_night_1.ogg', 'KROSE/atmosphere_night_2.ogg']
  };

  const krose_weather = {
    sunny: ['KROSE/atmosphere_sunny_1.ogg', 'KROSE/atmosphere_sunny_2.ogg'],
    rain: ['KROSE/atmosphere_rain.ogg', 'KROSE/atmosphere_storm_1.ogg', 'KROSE/atmosphere_storm_2.ogg'],
    fog: ['KROSE/atmosphere_fog_1.ogg', 'KROSE/atmosphere_fog_2.ogg']
  };

  const krose_story = {
    7: ['KROSE/story_gang_warfare.ogg'],
    8: ['KROSE/story_badlands_robberies.ogg'],
    10: ['KROSE/story_weed_farm_burned_down.ogg'],
    16: ['KROSE/story_lights_in_desert.ogg'],
    28: ['KROSE/story_police_trial.ogg']
  };

  const obj_krose = {
    musicasList: krose_musicas,
    grupoID: krose_ids,
    grupoDJSolo: krose_djs_callers, 
    timePools: krose_time,
    weatherPools: krose_weather,
    storyPools: krose_story,
    grupoAdv: G.adv.sa 
  };

  /* ================================================================================= */
  /* ================================= 7. PLAYBACK FM ================================ */
  /* ================================================================================= */

  const playback_fm_musicas = [
    {
      name: 'BRAND_NUBIAN',
      intros: ['PLAYBACK_FM/brand_nubian_intro.ogg', 'PLAYBACK_FM/brand_nubian_intro_dj_1.ogg', 'PLAYBACK_FM/brand_nubian_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/brand_nubian_mid.ogg',
      outros: ['PLAYBACK_FM/brand_nubian_outro.ogg', 'PLAYBACK_FM/brand_nubian_outro_dj_1.ogg', 'PLAYBACK_FM/brand_nubian_outro_dj_2.ogg']
    },
    {
      name: 'BYS',
      intros: ['PLAYBACK_FM/bys_intro.ogg', 'PLAYBACK_FM/bys_intro_dj_1.ogg', 'PLAYBACK_FM/bys_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/bys_mid.ogg',
      outros: ['PLAYBACK_FM/bys_outro.ogg', 'PLAYBACK_FM/bys_outro_dj_1.ogg', 'PLAYBACK_FM/bys_outro_dj_2.ogg']
    },
    {
      name: 'CHILDRENS_STORY',
      intros: ['PLAYBACK_FM/childrens_story_intro.ogg', 'PLAYBACK_FM/childrens_story_intro_dj_1.ogg', 'PLAYBACK_FM/childrens_story_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/childrens_story_mid.ogg',
      outros: ['PLAYBACK_FM/childrens_story_outro.ogg', 'PLAYBACK_FM/childrens_story_outro_dj_1.ogg', 'PLAYBACK_FM/childrens_story_outro_dj_2.ogg']
    },
    {
      name: 'CRITICAL_BEATDOWN',
      intros: ['PLAYBACK_FM/critical_beatdown_intro.ogg', 'PLAYBACK_FM/critical_beatdown_intro_dj_1.ogg', 'PLAYBACK_FM/critical_beatdown_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/critical_beatdown_mid.ogg',
      outros: ['PLAYBACK_FM/critical_beatdown_outro.ogg', 'PLAYBACK_FM/critical_beatdown_outro_dj_1.ogg', 'PLAYBACK_FM/critical_beatdown_outro_dj_2.ogg']
    },
    {
      name: 'I_KNOW_YOU_GOT_SOUL', // Sim, esta música também toca na Master Sounds em SA!
      intros: ['PLAYBACK_FM/i_know_you_got_soul_intro.ogg', 'PLAYBACK_FM/i_know_you_got_soul_intro_dj_1.ogg', 'PLAYBACK_FM/i_know_you_got_soul_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/i_know_you_got_soul_mid.ogg',
      outros: ['PLAYBACK_FM/i_know_you_got_soul_outro.ogg', 'PLAYBACK_FM/i_know_you_got_soul_outro_dj_1.ogg', 'PLAYBACK_FM/i_know_you_got_soul_outro_dj_2.ogg']
    },
    {
      name: 'IT_TAKES_TWO',
      intros: ['PLAYBACK_FM/it_takes_two_intro.ogg', 'PLAYBACK_FM/it_takes_two_intro_dj_1.ogg', 'PLAYBACK_FM/it_takes_two_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/it_takes_two_mid.ogg',
      outros: ['PLAYBACK_FM/it_takes_two_outro.ogg', 'PLAYBACK_FM/it_takes_two_outro_dj_1.ogg', 'PLAYBACK_FM/it_takes_two_outro_dj_2.ogg']
    },
    {
      name: 'ME_THE_BIZ',
      intros: ['PLAYBACK_FM/me_the_biz_intro.ogg', 'PLAYBACK_FM/me_the_biz_intro_dj_1.ogg', 'PLAYBACK_FM/me_the_biz_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/me_the_biz_mid.ogg',
      outros: ['PLAYBACK_FM/me_the_biz_outro.ogg', 'PLAYBACK_FM/me_the_biz_outro_dj_1.ogg', 'PLAYBACK_FM/me_the_biz_outro_dj_2.ogg']
    },
    {
      name: 'REBEL_WITHOUT_A_PAUSE',
      intros: ['PLAYBACK_FM/rebel_without_a_pause_intro.ogg', 'PLAYBACK_FM/rebel_without_a_pause_intro_dj_1.ogg', 'PLAYBACK_FM/rebel_without_a_pause_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/rebel_without_a_pause_mid.ogg',
      outros: ['PLAYBACK_FM/rebel_without_a_pause_outro.ogg', 'PLAYBACK_FM/rebel_without_a_pause_outro_dj_1.ogg', 'PLAYBACK_FM/rebel_without_a_pause_outro_dj_2.ogg']
    },
    {
      name: 'ROAD_TO_THE_RICHES',
      intros: ['PLAYBACK_FM/road_to_the_riches_intro.ogg', 'PLAYBACK_FM/road_to_the_riches_intro_dj_1.ogg', 'PLAYBACK_FM/road_to_the_riches_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/road_to_the_riches_mid.ogg',
      outros: ['PLAYBACK_FM/road_to_the_riches_outro.ogg', 'PLAYBACK_FM/road_to_the_riches_outro_dj_1.ogg', 'PLAYBACK_FM/road_to_the_riches_outro_dj_2.ogg']
    },
    {
      name: 'THE_GODFATHER',
      intros: ['PLAYBACK_FM/the_godfather_intro.ogg', 'PLAYBACK_FM/the_godfather_intro_dj_1.ogg', 'PLAYBACK_FM/the_godfather_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/the_godfather_mid.ogg',
      outros: ['PLAYBACK_FM/the_godfather_outro.ogg', 'PLAYBACK_FM/the_godfather_outro_dj_1.ogg', 'PLAYBACK_FM/the_godfather_outro_dj_2.ogg']
    },
    {
      name: 'THE_VAPORS',
      intros: ['PLAYBACK_FM/the_vapors_intro.ogg', 'PLAYBACK_FM/the_vapors_intro_dj_1.ogg', 'PLAYBACK_FM/the_vapors_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/the_vapors_mid.ogg',
      outros: ['PLAYBACK_FM/the_vapors_outro.ogg', 'PLAYBACK_FM/the_vapors_outro_dj_1.ogg', 'PLAYBACK_FM/the_vapors_outro_dj_2.ogg']
    },
    {
      name: 'WARM_IT_UP_KANE',
      intros: ['PLAYBACK_FM/warm_it_up_kane_intro.ogg', 'PLAYBACK_FM/warm_it_up_kane_intro_dj_1.ogg', 'PLAYBACK_FM/warm_it_up_kane_intro_dj_2.ogg'],
      mid: 'PLAYBACK_FM/warm_it_up_kane_mid.ogg',
      outros: ['PLAYBACK_FM/warm_it_up_kane_outro.ogg', 'PLAYBACK_FM/warm_it_up_kane_outro_dj_1.ogg', 'PLAYBACK_FM/warm_it_up_kane_outro_dj_2.ogg']
    }
  ];

  const playback_fm_ids = [
    'PLAYBACK_FM/id_doper_than_anyone_else.ogg',
    'PLAYBACK_FM/id_drop_out_of_that_whack_ass_school.ogg',
    'PLAYBACK_FM/id_givin_it_to_ya_straight_up_homeboy.ogg',
    'PLAYBACK_FM/id_layin_it_down_old_skool.ogg',
    'PLAYBACK_FM/id_skills_on_the_mic.ogg',
    'PLAYBACK_FM/id_the_home_of_classic_hiphop.ogg',
    'PLAYBACK_FM/id_the_man_with_an_opinion_on_everything.ogg',
    'PLAYBACK_FM/id_the_reason_you_put_that_subwoofer_in_your_car.ogg',
    'PLAYBACK_FM/id_while_you_suckers_were_wearing_diapers.ogg',
    'PLAYBACK_FM/id_word_to_your_mamma.ogg',
    'PLAYBACK_FM/id_word_up.ogg'
  ];

  const playback_fm_djs_callers = {
    dj: [
      'PLAYBACK_FM/dj_be_educated_on_the_sounds_that_brung_ya.ogg',
      'PLAYBACK_FM/dj_cavern_of_sorrow_marathon.ogg',
      'PLAYBACK_FM/dj_get_back_to_the_burbs_you_fools.ogg',
      'PLAYBACK_FM/dj_help_aint_no_charity.ogg',
      'PLAYBACK_FM/dj_i_got_seven_digits_as_it_is.ogg',
      'PLAYBACK_FM/dj_ill_go_speed_of_light_on_yall.ogg',
      'PLAYBACK_FM/dj_los_santos_police.ogg',
      'PLAYBACK_FM/dj_propaganda.ogg',
      'PLAYBACK_FM/dj_ready_for_your_training_wheels.ogg',
      'PLAYBACK_FM/dj_shoulda_paid_more_attention_in_school.ogg',
      'PLAYBACK_FM/dj_small_minded_robots.ogg',
      'PLAYBACK_FM/dj_theres_a_party_over_here.ogg',
      'PLAYBACK_FM/dj_this_goes_out_to_my_man_the_iceman.ogg',
      'PLAYBACK_FM/dj_ugly_like_yo_momma.ogg',
      'PLAYBACK_FM/dj_west_coast_radio_suckers.ogg',
      'PLAYBACK_FM/dj_you_dont_last_a_minute.ogg'
    ],
    caller: [
      'PLAYBACK_FM/caller_well_actually_its_csr.ogg',
      'PLAYBACK_FM/caller_youre_really_annoying.ogg'
    ]
  };

  const playback_fm_time = {
    morning: ['PLAYBACK_FM/atmosphere_morning_1.ogg', 'PLAYBACK_FM/atmosphere_morning_2.ogg'],
    evening: ['PLAYBACK_FM/atmosphere_evening_1.ogg', 'PLAYBACK_FM/atmosphere_evening_2.ogg'],
    night: ['PLAYBACK_FM/atmosphere_night_1.ogg', 'PLAYBACK_FM/atmosphere_night_2.ogg']
  };

  const playback_fm_weather = {
    sunny: ['PLAYBACK_FM/atmosphere_sunny_1.ogg', 'PLAYBACK_FM/atmosphere_sunny_2.ogg'],
    rain: ['PLAYBACK_FM/atmosphere_rain_1.ogg', 'PLAYBACK_FM/atmosphere_rain_2.ogg', 'PLAYBACK_FM/atmosphere_rain_3.ogg'],
    fog: ['PLAYBACK_FM/atmosphere_fog_1.ogg', 'PLAYBACK_FM/atmosphere_fog_2.ogg', 'PLAYBACK_FM/atmosphere_smog.ogg']
  };

  const obj_playback_fm = {
    musicasList: playback_fm_musicas,
    grupoID: playback_fm_ids,
    grupoDJSolo: playback_fm_djs_callers, 
    timePools: playback_fm_time,
    weatherPools: playback_fm_weather,
    grupoAdv: G.adv.sa 
  };


  /* ================================================================================= */
  /* ============================== 8. RADIO LOS SANTOS ============================== */
  /* ================================================================================= */

  const rls_musicas = [
    {
      name: 'ALWAYZ_INTO_SOMETHIN',
      intros: ['RADIO_LOS_SANTOS/alwayz_into_somethin_intro.ogg', 'RADIO_LOS_SANTOS/alwayz_into_somethin_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/alwayz_into_somethin_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/alwayz_into_somethin_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/alwayz_into_somethin_outro.ogg', 'RADIO_LOS_SANTOS/alwayz_into_somethin_outro_dj_1.ogg']
    },
    {
      name: 'CHECK_YO_SELF',
      intros: ['RADIO_LOS_SANTOS/check_yo_self_the_message_remix_intro.ogg', 'RADIO_LOS_SANTOS/check_yo_self_the_message_remix_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/check_yo_self_the_message_remix_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/check_yo_self_the_message_remix_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/check_yo_self_the_message_remix_outro.ogg', 'RADIO_LOS_SANTOS/check_yo_self_the_message_remix_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/check_yo_self_the_message_remix_outro_dj_2.ogg']
    },
    {
      name: 'DEEP_COVER',
      intros: ['RADIO_LOS_SANTOS/deep_cover_intro.ogg', 'RADIO_LOS_SANTOS/deep_cover_intro_dj_1.ogg'],
      mid: 'RADIO_LOS_SANTOS/deep_cover_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/deep_cover_outro.ogg', 'RADIO_LOS_SANTOS/deep_cover_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/deep_cover_outro_dj_2.ogg']
    },
    {
      name: 'EAZY_ER_SAID_THAN_DUNN',
      intros: ['RADIO_LOS_SANTOS/eazy_er_said_than_dunn_intro.ogg', 'RADIO_LOS_SANTOS/eazy_er_said_than_dunn_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/eazy_er_said_than_dunn_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/eazy_er_said_than_dunn_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/eazy_er_said_than_dunn_outro.ogg', 'RADIO_LOS_SANTOS/eazy_er_said_than_dunn_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/eazy_er_said_than_dunn_outro_dj_2.ogg']
    },
    {
      name: 'EXPRESS_YOURSELF', // Clássico do NWA!
      intros: ['RADIO_LOS_SANTOS/express_yourself_intro.ogg', 'RADIO_LOS_SANTOS/express_yourself_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/express_yourself_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/express_yourself_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/express_yourself_outro.ogg', 'RADIO_LOS_SANTOS/express_yourself_outro_dj_1.ogg']
    },
    {
      name: 'FUCK_WIT_DRE_DAY',
      intros: ['RADIO_LOS_SANTOS/fuck_wit_dre_day_intro.ogg', 'RADIO_LOS_SANTOS/fuck_wit_dre_day_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/fuck_wit_dre_day_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/fuck_wit_dre_day_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/fuck_wit_dre_day_outro.ogg', 'RADIO_LOS_SANTOS/fuck_wit_dre_day_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/fuck_wit_dre_day_outro_dj_2.ogg']
    },
    {
      name: 'GUERILLAS_IN_THA_MIST',
      intros: ['RADIO_LOS_SANTOS/guerillas_in_tha_mist_intro.ogg', 'RADIO_LOS_SANTOS/guerillas_in_tha_mist_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/guerillas_in_tha_mist_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/guerillas_in_tha_mist_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/guerillas_in_tha_mist_outro.ogg', 'RADIO_LOS_SANTOS/guerillas_in_tha_mist_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/guerillas_in_tha_mist_outro_dj_2.ogg']
    },
    {
      name: 'HOOD_TOOK_ME_UNDER',
      intros: ['RADIO_LOS_SANTOS/hood_took_me_under_intro.ogg', 'RADIO_LOS_SANTOS/hood_took_me_under_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/hood_took_me_under_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/hood_took_me_under_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/hood_took_me_under_outro.ogg', 'RADIO_LOS_SANTOS/hood_took_me_under_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/hood_took_me_under_outro_dj_2.ogg']
    },
    {
      name: 'HOW_I_COULD_JUST_KILL_A_MAN',
      intros: ['RADIO_LOS_SANTOS/how_i_could_just_kill_a_man_intro.ogg', 'RADIO_LOS_SANTOS/how_i_could_just_kill_a_man_intro_dj_1.ogg'],
      mid: 'RADIO_LOS_SANTOS/how_i_could_just_kill_a_man_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/how_i_could_just_kill_a_man_outro.ogg', 'RADIO_LOS_SANTOS/how_i_could_just_kill_a_man_outro_dj_1.ogg']
    },
    {
      name: 'I_DONT_GIVE_A_FUCK',
      intros: ['RADIO_LOS_SANTOS/i_dont_give_a_fuck_intro.ogg', 'RADIO_LOS_SANTOS/i_dont_give_a_fuck_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/i_dont_give_a_fuck_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/i_dont_give_a_fuck_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/i_dont_give_a_fuck_outro.ogg', 'RADIO_LOS_SANTOS/i_dont_give_a_fuck_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/i_dont_give_a_fuck_outro_dj_2.ogg']
    },
    {
      name: 'IT_WAS_A_GOOD_DAY',
      intros: ['RADIO_LOS_SANTOS/it_was_a_good_day_intro.ogg', 'RADIO_LOS_SANTOS/it_was_a_good_day_intro_dj_1.ogg'],
      mid: 'RADIO_LOS_SANTOS/it_was_a_good_day_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/it_was_a_good_day_outro.ogg', 'RADIO_LOS_SANTOS/it_was_a_good_day_outro_dj_1.ogg']
    },
    {
      name: 'ITS_FUNKY_ENOUGH',
      intros: ['RADIO_LOS_SANTOS/its_funky_enough_intro.ogg', 'RADIO_LOS_SANTOS/its_funky_enough_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/its_funky_enough_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/its_funky_enough_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/its_funky_enough_outro.ogg', 'RADIO_LOS_SANTOS/its_funky_enough_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/its_funky_enough_outro_dj_2.ogg']
    },
    {
      name: 'LA_RAZA',
      intros: ['RADIO_LOS_SANTOS/la_raza_intro.ogg', 'RADIO_LOS_SANTOS/la_raza_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/la_raza_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/la_raza_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/la_raza_outro.ogg', 'RADIO_LOS_SANTOS/la_raza_outro_dj_1.ogg']
    },
    {
      name: 'MURDER_RAP',
      intros: ['RADIO_LOS_SANTOS/murder_rap_intro.ogg', 'RADIO_LOS_SANTOS/murder_rap_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/murder_rap_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/murder_rap_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/murder_rap_outro.ogg', 'RADIO_LOS_SANTOS/murder_rap_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/murder_rap_outro_dj_2.ogg']
    },
    {
      name: 'NUTHIN_BUT_A_G_THANG',
      intros: ['RADIO_LOS_SANTOS/nuthin_but_a_g_thang_intro.ogg', 'RADIO_LOS_SANTOS/nuthin_but_a_g_thang_intro_dj_1.ogg', 'RADIO_LOS_SANTOS/nuthin_but_a_g_thang_intro_dj_2.ogg'],
      mid: 'RADIO_LOS_SANTOS/nuthin_but_a_g_thang_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/nuthin_but_a_g_thang_outro.ogg', 'RADIO_LOS_SANTOS/nuthin_but_a_g_thang_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/nuthin_but_a_g_thang_outro_dj_2.ogg']
    },
    {
      name: 'THE_GHETTO',
      intros: ['RADIO_LOS_SANTOS/the_ghetto_intro.ogg'],
      mid: 'RADIO_LOS_SANTOS/the_ghetto_mid.ogg',
      outros: ['RADIO_LOS_SANTOS/the_ghetto_outro.ogg', 'RADIO_LOS_SANTOS/the_ghetto_outro_dj_1.ogg', 'RADIO_LOS_SANTOS/the_ghetto_outro_dj_2.ogg']
    }
  ];

  const rls_ids = [
    'RADIO_LOS_SANTOS/id_b_real_of_cypress_hill.ogg',
    'RADIO_LOS_SANTOS/id_can_i_have_a_t_shirt.ogg',
    'RADIO_LOS_SANTOS/id_doin_it_evolution_style.ogg',
    'RADIO_LOS_SANTOS/id_fool_gave_me_the_clap.ogg',
    'RADIO_LOS_SANTOS/id_i_sent_you_my_demo_nine_times.ogg',
    'RADIO_LOS_SANTOS/id_julios_the_man.ogg',
    'RADIO_LOS_SANTOS/id_madd_dogg.ogg',
    'RADIO_LOS_SANTOS/id_og_loc.ogg',
    'RADIO_LOS_SANTOS/id_shout_outs.ogg',
    'RADIO_LOS_SANTOS/id_the_home_of_gansta_rap_and_gangsta_bitches.ogg',
    'RADIO_LOS_SANTOS/id_your_voice_is_sooo_sexy.ogg'
  ];

  const rls_djs_callers = {
    dj: [
      'RADIO_LOS_SANTOS/dj_burglary_and_carjacking_is_both_up.ogg',
      'RADIO_LOS_SANTOS/dj_denise_is_desperate.ogg',
      'RADIO_LOS_SANTOS/dj_difference_between_a_rapper_and_a_gangster.ogg',
      'RADIO_LOS_SANTOS/dj_dont_touch_that_dial.ogg',
      'RADIO_LOS_SANTOS/dj_i_get_it_first_the_others_get_it_last.ogg',
      'RADIO_LOS_SANTOS/dj_my_man_les_in_the_north.ogg',
      'RADIO_LOS_SANTOS/dj_not_the_home_of_gangster_fools.ogg',
      'RADIO_LOS_SANTOS/dj_original_home_of_the_drive_by.ogg',
      'RADIO_LOS_SANTOS/dj_ruling_the_airwaves.ogg',
      'RADIO_LOS_SANTOS/dj_sam_and_the_boys_from_liberty_city.ogg',
      'RADIO_LOS_SANTOS/dj_self_styled_audio_boys.ogg',
      'RADIO_LOS_SANTOS/dj_the_home_of_gangsta_rap.ogg',
      'RADIO_LOS_SANTOS/dj_the_hottest_shit_around.ogg',
      'RADIO_LOS_SANTOS/dj_the_rest_of_the_world_can_follow.ogg',
      'RADIO_LOS_SANTOS/dj_we_play_the_real_shit.ogg',
      'RADIO_LOS_SANTOS/dj_your_man_julio_g.ogg'
    ],
    caller: [] // Radio Los Santos não tem arquivos de ligações diretas separados
  };

  const rls_time = {
    morning: ['RADIO_LOS_SANTOS/atmosphere_morning_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_morning_2.ogg'],
    evening: ['RADIO_LOS_SANTOS/atmosphere_evening_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_evening_2.ogg'],
    night: ['RADIO_LOS_SANTOS/atmosphere_night_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_night_2.ogg']
  };

  const rls_weather = {
    sunny: ['RADIO_LOS_SANTOS/atmosphere_sunny_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_sunny_2.ogg'],
    rain: ['RADIO_LOS_SANTOS/atmosphere_rain_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_rain_2.ogg', 'RADIO_LOS_SANTOS/atmosphere_storm_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_storm_2.ogg'],
    fog: ['RADIO_LOS_SANTOS/atmosphere_fog_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_fog_2.ogg', 'RADIO_LOS_SANTOS/atmosphere_smog_1.ogg', 'RADIO_LOS_SANTOS/atmosphere_smog_2.ogg']
  };

  const rls_story = {
    7: ['RADIO_LOS_SANTOS/story_gang_warfare.ogg'],
    11: ['RADIO_LOS_SANTOS/story_gang_warfare_ballas_and_vagos_taking_over.ogg'],
    26: ['RADIO_LOS_SANTOS/story_gang_warfare_grove_street_getting_stronger.ogg'],
    28: ['RADIO_LOS_SANTOS/story_riot.ogg']
  };

  const obj_rls = {
    musicasList: rls_musicas,
    grupoID: rls_ids,
    grupoDJSolo: rls_djs_callers, 
    timePools: rls_time,
    weatherPools: rls_weather,
    storyPools: rls_story,
    grupoAdv: G.adv.sa 
  };

  /* ================================================================================= */
  /* ================================== 9. RADIO X =================================== */
  /* ================================================================================= */

  const radio_x_musicas = [
    {
      name: 'BEEN_CAUGHT_STEALING',
      intros: ['RADIO_X/been_caught_stealing_intro.ogg', 'RADIO_X/been_caught_stealing_intro_dj_1.ogg', 'RADIO_X/been_caught_stealing_intro_dj_2.ogg'],
      mid: 'RADIO_X/been_caught_stealing_mid.ogg',
      outros: ['RADIO_X/been_caught_stealing_outro.ogg', 'RADIO_X/been_caught_stealing_outro_dj_1.ogg', 'RADIO_X/been_caught_stealing_outro_dj_2.ogg']
    },
    {
      name: 'CULT_OF_PERSONALITY',
      intros: ['RADIO_X/cult_of_personality_intro.ogg', 'RADIO_X/cult_of_personality_intro_dj_1.ogg', 'RADIO_X/cult_of_personality_intro_dj_2.ogg'],
      mid: 'RADIO_X/cult_of_personality_mid.ogg',
      outros: ['RADIO_X/cult_of_personality_outro.ogg', 'RADIO_X/cult_of_personality_outro_dj_1.ogg', 'RADIO_X/cult_of_personality_outro_dj_2.ogg']
    },
    {
      name: 'FOOLS_GOLD',
      intros: ['RADIO_X/fools_gold_intro.ogg', 'RADIO_X/fools_gold_intro_dj_1.ogg', 'RADIO_X/fools_gold_intro_dj_2.ogg'],
      mid: 'RADIO_X/fools_gold_mid.ogg',
      outros: ['RADIO_X/fools_gold_outro.ogg', 'RADIO_X/fools_gold_outro_dj_1.ogg', 'RADIO_X/fools_gold_outro_dj_2.ogg']
    },
    {
      name: 'HELLRAISER',
      intros: ['RADIO_X/hellraiser_intro.ogg', 'RADIO_X/hellraiser_intro_dj_1.ogg', 'RADIO_X/hellraiser_intro_dj_2.ogg'],
      mid: 'RADIO_X/hellraiser_mid.ogg',
      outros: ['RADIO_X/hellraiser_outro.ogg', 'RADIO_X/hellraiser_outro_dj_1.ogg', 'RADIO_X/hellraiser_outro_dj_2.ogg']
    },
    {
      name: 'KILLING_IN_THE_NAME',
      intros: ['RADIO_X/killing_in_the_name_intro.ogg', 'RADIO_X/killing_in_the_name_intro_dj_1.ogg', 'RADIO_X/killing_in_the_name_intro_dj_2.ogg'],
      mid: 'RADIO_X/killing_in_the_name_mid.ogg',
      outros: ['RADIO_X/killing_in_the_name_outro.ogg', 'RADIO_X/killing_in_the_name_outro_dj_1.ogg', 'RADIO_X/killing_in_the_name_outro_dj_2.ogg']
    },
    {
      name: 'MIDLIFE_CRISIS',
      intros: ['RADIO_X/midlife_crisis_intro.ogg', 'RADIO_X/midlife_crisis_intro_dj_1.ogg', 'RADIO_X/midlife_crisis_intro_dj_2.ogg'],
      mid: 'RADIO_X/midlife_crisis_mid.ogg',
      outros: ['RADIO_X/midlife_crisis_outro.ogg', 'RADIO_X/midlife_crisis_outro_dj_1.ogg', 'RADIO_X/midlife_crisis_outro_dj_2.ogg']
    },
    {
      name: 'MOTHER',
      intros: ['RADIO_X/mother_intro.ogg', 'RADIO_X/mother_intro_dj_1.ogg', 'RADIO_X/mother_intro_dj_2.ogg'],
      mid: 'RADIO_X/mother_mid.ogg',
      outros: ['RADIO_X/mother_outro.ogg', 'RADIO_X/mother_outro_dj_1.ogg', 'RADIO_X/mother_outro_dj_2.ogg']
    },
    {
      name: 'MOVIN_ON_UP',
      intros: ['RADIO_X/movin_on_up_intro.ogg', 'RADIO_X/movin_on_up_intro_dj_1.ogg', 'RADIO_X/movin_on_up_intro_dj_2.ogg'],
      mid: 'RADIO_X/movin_on_up_mid.ogg',
      outros: ['RADIO_X/movin_on_up_outro.ogg', 'RADIO_X/movin_on_up_outro_dj_1.ogg', 'RADIO_X/movin_on_up_outro_dj_2.ogg']
    },
    {
      name: 'PERSONAL_JESUS',
      intros: ['RADIO_X/personal_jesus_intro.ogg', 'RADIO_X/personal_jesus_intro_dj_1.ogg', 'RADIO_X/personal_jesus_intro_dj_2.ogg'],
      mid: 'RADIO_X/personal_jesus_mid.ogg',
      outros: ['RADIO_X/personal_jesus_outro.ogg', 'RADIO_X/personal_jesus_outro_dj_1.ogg', 'RADIO_X/personal_jesus_outro_dj_2.ogg']
    },
    {
      name: 'PLUSH', // Exceção: Apenas arquivos limpos
      intros: ['RADIO_X/plush_intro.ogg'],
      mid: 'RADIO_X/plush_mid.ogg',
      outros: ['RADIO_X/plush_outro.ogg']
    },
    {
      name: 'PRETEND_WERE_DEAD',
      intros: ['RADIO_X/pretend_were_dead_intro.ogg', 'RADIO_X/pretend_were_dead_intro_dj_1.ogg', 'RADIO_X/pretend_were_dead_intro_dj_2.ogg'],
      mid: 'RADIO_X/pretend_were_dead_mid.ogg',
      outros: ['RADIO_X/pretend_were_dead_outro.ogg', 'RADIO_X/pretend_were_dead_outro_dj_1.ogg', 'RADIO_X/pretend_were_dead_outro_dj_2.ogg']
    },
    {
      name: 'RUSTY_CAGE',
      intros: ['RADIO_X/rusty_cage_intro.ogg', 'RADIO_X/rusty_cage_intro_dj_1.ogg', 'RADIO_X/rusty_cage_intro_dj_2.ogg'],
      mid: 'RADIO_X/rusty_cage_mid.ogg',
      outros: ['RADIO_X/rusty_cage_outro.ogg', 'RADIO_X/rusty_cage_outro_dj_1.ogg', 'RADIO_X/rusty_cage_outro_dj_2.ogg']
    },
    {
      name: 'THEM_BONES',
      intros: ['RADIO_X/them_bones_intro.ogg', 'RADIO_X/them_bones_intro_dj_1.ogg', 'RADIO_X/them_bones_intro_dj_2.ogg'],
      mid: 'RADIO_X/them_bones_mid.ogg',
      outros: ['RADIO_X/them_bones_outro.ogg', 'RADIO_X/them_bones_outro_dj_1.ogg', 'RADIO_X/them_bones_outro_dj_2.ogg']
    },
    {
      name: 'UNSUNG',
      intros: ['RADIO_X/unsung_intro.ogg', 'RADIO_X/unsung_intro_dj_1.ogg', 'RADIO_X/unsung_intro_dj_2.ogg'],
      mid: 'RADIO_X/unsung_mid.ogg',
      outros: ['RADIO_X/unsung_outro.ogg', 'RADIO_X/unsung_outro_dj_1.ogg', 'RADIO_X/unsung_outro_dj_2.ogg']
    },
    {
      name: 'WELCOME_TO_THE_JUNGLE',
      intros: ['RADIO_X/welcome_to_the_jungle_intro.ogg', 'RADIO_X/welcome_to_the_jungle_intro_dj_1.ogg', 'RADIO_X/welcome_to_the_jungle_intro_dj_2.ogg'],
      mid: 'RADIO_X/welcome_to_the_jungle_mid.ogg',
      outros: ['RADIO_X/welcome_to_the_jungle_outro.ogg', 'RADIO_X/welcome_to_the_jungle_outro_dj_1.ogg', 'RADIO_X/welcome_to_the_jungle_outro_dj_2.ogg']
    }
  ];

  const radio_x_ids = [
    'RADIO_X/id_at_the_end_of_the_alphabet.ogg',
    'RADIO_X/id_jump_off_a_bridge_and_die.ogg',
    'RADIO_X/id_much_better_than_real_friends.ogg',
    'RADIO_X/id_self_important_nihilists.ogg',
    'RADIO_X/id_the_birthplace_of_modern_rock.ogg',
    'RADIO_X/id_the_id_the_ego.ogg',
    'RADIO_X/id_they_dont_care_about_money.ogg',
    'RADIO_X/id_this_is_our_time.ogg',
    'RADIO_X/id_trust_fund_babies.ogg',
    'RADIO_X/id_were_the_only_identity_youve_got.ogg',
    'RADIO_X/id_who_cares_about_hunger.ogg'
  ];

  const radio_x_djs_callers = {
    dj: [
      'RADIO_X/dj_being_a_dj_is_so_hard.ogg',
      'RADIO_X/dj_bombarded_with_commercials.ogg',
      'RADIO_X/dj_god_i_love_crying.ogg',
      'RADIO_X/dj_guys_in_skirts.ogg',
      'RADIO_X/dj_i_dont_want_a_real_job.ogg',
      'RADIO_X/dj_i_have_to_work_so_hard.ogg',
      'RADIO_X/dj_like_a_big_mix_tape.ogg',
      'RADIO_X/dj_no_tracers_yet.ogg',
      'RADIO_X/dj_one_must_always_go_forward.ogg',
      'RADIO_X/dj_people_over_thirty.ogg',
      'RADIO_X/dj_sage.ogg',
      'RADIO_X/dj_that_bitch_at_the_record_store.ogg',
      'RADIO_X/dj_yes_that_is_my_real_name.ogg'
    ],
    caller: [
      'RADIO_X/caller_what_a_stupid_name.ogg',
      'RADIO_X/caller_you_really_are_full_of_yourself.ogg'
    ]
  };

  const radio_x_time = {
    morning: ['RADIO_X/atmosphere_morning_1.ogg', 'RADIO_X/atmosphere_morning_2.ogg'],
    evening: ['RADIO_X/atmosphere_evening_1.ogg', 'RADIO_X/atmosphere_evening_2.ogg'],
    night: ['RADIO_X/atmosphere_night_1.ogg', 'RADIO_X/atmosphere_night_2.ogg']
  };

  const radio_x_weather = {
    sunny: ['RADIO_X/atmosphere_sunny_1.ogg', 'RADIO_X/atmosphere_sunny_2.ogg'],
    rain: ['RADIO_X/atmosphere_rain_1.ogg', 'RADIO_X/atmosphere_rain_2.ogg', 'RADIO_X/atmosphere_storm.ogg'],
    fog: ['RADIO_X/atmosphere_fog_1.ogg', 'RADIO_X/atmosphere_fog_2.ogg']
  };

  const radio_x_story = {
    5: ['RADIO_X/story_rap_crisis.ogg'],
    10: ['RADIO_X/story_weed_farm_burned_down.ogg'],
    15: ['RADIO_X/story_casino_opening.ogg'],
    28: ['RADIO_X/story_riot.ogg']
  };

  const obj_radio_x = {
    musicasList: radio_x_musicas,
    grupoID: radio_x_ids,
    grupoDJSolo: radio_x_djs_callers, 
    timePools: radio_x_time,
    weatherPools: radio_x_weather,
    storyPools: radio_x_story,
    grupoAdv: G.adv.sa 
  };


  /* ================================================================================= */
  /* =================================== 10. SF-UR =================================== */
  /* ================================================================================= */

  // Exceção de SF-UR: Não existem arquivos _intro ou _outro puros. 
  // O DJ sempre fala nas transições das batidas da House Music.
  const sfur_musicas = [
    {
      name: 'BREAK_4_LOVE',
      intros: ['SFUR/break_4_love_intro_dj_1.ogg', 'SFUR/break_4_love_intro_dj_2.ogg'],
      mid: 'SFUR/break_4_love_mid.ogg',
      outros: ['SFUR/break_4_love_outro_dj_1.ogg', 'SFUR/break_4_love_outro_dj_2.ogg']
    },
    {
      name: 'CAN_YOU_FEEL_IT',
      intros: ['SFUR/can_you_feel_it_intro_dj_1.ogg', 'SFUR/can_you_feel_it_intro_dj_2.ogg'],
      mid: 'SFUR/can_you_feel_it_mid.ogg',
      outros: ['SFUR/can_you_feel_it_outro_dj_1.ogg', 'SFUR/can_you_feel_it_outro_dj_2.ogg']
    },
    {
      name: 'I_NEED_A_RHYTHM',
      intros: ['SFUR/i_need_a_rhythm_intro_dj_1.ogg', 'SFUR/i_need_a_rhythm_intro_dj_2.ogg'],
      mid: 'SFUR/i_need_a_rhythm_mid.ogg',
      outros: ['SFUR/i_need_a_rhythm_outro_dj_1.ogg', 'SFUR/i_need_a_rhythm_outro_dj_2.ogg']
    },
    {
      name: 'ILL_BE_YOUR_FRIEND',
      intros: ['SFUR/ill_be_your_friend_intro_dj_1.ogg', 'SFUR/ill_be_your_friend_intro_dj_2.ogg'],
      mid: 'SFUR/ill_be_your_friend_mid.ogg',
      outros: ['SFUR/ill_be_your_friend_outro_dj_1.ogg', 'SFUR/ill_be_your_friend_outro_dj_2.ogg']
    },
    {
      name: 'LET_THE_MUSIC_USE_YOU',
      intros: ['SFUR/let_the_music_use_you_intro_dj_1.ogg', 'SFUR/let_the_music_use_you_intro_dj_2.ogg'],
      mid: 'SFUR/let_the_music_use_you_mid.ogg',
      outros: ['SFUR/let_the_music_use_you_outro_dj_1.ogg', 'SFUR/let_the_music_use_you_outro_dj_2.ogg']
    },
    {
      name: 'MA_FOOM_BEY',
      intros: ['SFUR/ma_foom_bey_intro_dj_1.ogg', 'SFUR/ma_foom_bey_intro_dj_2.ogg'],
      mid: 'SFUR/ma_foom_bey_mid.ogg',
      outros: ['SFUR/ma_foom_bey_outro_dj_1.ogg', 'SFUR/ma_foom_bey_outro_dj_2.ogg']
    },
    {
      name: 'MAKE_MY_BODY_ROCK',
      intros: ['SFUR/make_my_body_rock_intro_dj_1.ogg', 'SFUR/make_my_body_rock_intro_dj_2.ogg'],
      mid: 'SFUR/make_my_body_rock_mid.ogg',
      outros: ['SFUR/make_my_body_rock_outro_dj_1.ogg', 'SFUR/make_my_body_rock_outro_dj_2.ogg']
    },
    {
      name: 'MOVE_YOUR_BODY',
      intros: ['SFUR/move_your_body_intro_dj_1.ogg', 'SFUR/move_your_body_intro_dj_2.ogg'],
      mid: 'SFUR/move_your_body_mid.ogg',
      outros: ['SFUR/move_your_body_outro_dj_1.ogg', 'SFUR/move_your_body_outro_dj_2.ogg']
    },
    {
      name: 'PACIFIC',
      intros: ['SFUR/pacific_intro_dj_1.ogg', 'SFUR/pacific_intro_dj_2.ogg'],
      mid: 'SFUR/pacific_mid.ogg',
      outros: ['SFUR/pacific_outro_dj_1.ogg', 'SFUR/pacific_outro_dj_2.ogg']
    },
    {
      name: 'PROMISED_LAND',
      intros: ['SFUR/promised_land_intro_dj_1.ogg', 'SFUR/promised_land_intro_dj_2.ogg'],
      mid: 'SFUR/promised_land_mid.ogg',
      outros: ['SFUR/promised_land_outro_dj_1.ogg', 'SFUR/promised_land_outro_dj_2.ogg']
    },
    {
      name: 'SOMEDAY',
      intros: ['SFUR/someday_intro_dj_1.ogg', 'SFUR/someday_intro_dj_2.ogg'],
      mid: 'SFUR/someday_mid.ogg',
      outros: ['SFUR/someday_outro_dj_1.ogg', 'SFUR/someday_outro_dj_2.ogg']
    },
    {
      name: 'THE_MORNING_AFTER',
      intros: ['SFUR/the_morning_after_intro_dj_1.ogg', 'SFUR/the_morning_after_intro_dj_2.ogg'],
      mid: 'SFUR/the_morning_after_mid.ogg',
      outros: ['SFUR/the_morning_after_outro_dj_1.ogg', 'SFUR/the_morning_after_outro_dj_2.ogg']
    },
    {
      name: 'THIS_IS_ACID',
      intros: ['SFUR/this_is_acid_intro_dj_1.ogg', 'SFUR/this_is_acid_intro_dj_2.ogg'],
      mid: 'SFUR/this_is_acid_mid.ogg',
      outros: ['SFUR/this_is_acid_outro_dj_1.ogg', 'SFUR/this_is_acid_outro_dj_2.ogg']
    },
    {
      name: 'VOODOO_RAY',
      intros: ['SFUR/voodoo_ray_intro_dj_1.ogg', 'SFUR/voodoo_ray_intro_dj_2.ogg'],
      mid: 'SFUR/voodoo_ray_mid.ogg',
      outros: ['SFUR/voodoo_ray_outro_dj_1.ogg', 'SFUR/voodoo_ray_outro_dj_2.ogg']
    },
    {
      name: 'WEEKEND',
      intros: ['SFUR/weekend_intro_dj_1.ogg', 'SFUR/weekend_intro_dj_2.ogg'],
      mid: 'SFUR/weekend_mid.ogg',
      outros: ['SFUR/weekend_outro_dj_1.ogg', 'SFUR/weekend_outro_dj_2.ogg']
    },
    {
      name: 'YOUR_LOVE',
      intros: ['SFUR/your_love_intro_dj_1.ogg', 'SFUR/your_love_intro_dj_2.ogg'],
      mid: 'SFUR/your_love_mid.ogg',
      outros: ['SFUR/your_love_outro_dj_1.ogg', 'SFUR/your_love_outro_dj_2.ogg']
    }
  ];

  // A SF-UR não possui IDs clássicos no seu despejo de áudio. 
  // O DJ cuida de todo o "branding" da rádio.
  const sfur_ids = []; 

  const sfur_djs_callers = {
    dj: [
      'SFUR/dj_dont_make_me_go_to_rehab.ogg',
      'SFUR/dj_european_style_shaved.ogg',
      'SFUR/dj_harder_faster_deeper.ogg',
      'SFUR/dj_has_anyone_got_any_cigarette_papers.ogg',
      'SFUR/dj_has_that_dealer_turned_up_yet.ogg',
      'SFUR/dj_i_am_a_rebel.ogg',
      'SFUR/dj_i_am_communing_with_you.ogg',
      'SFUR/dj_i_come_to_america.ogg',
      'SFUR/dj_i_love_complete_strangers.ogg',
      'SFUR/dj_i_love_you_san_fierro.ogg',
      'SFUR/dj_i_want_to_cry.ogg',
      'SFUR/dj_i_went_to_liberty_city_once.ogg',
      'SFUR/dj_keep_the_party_moving_in_here.ogg',
      'SFUR/dj_keeping_it_on_a_housey_tip_now.ogg',
      'SFUR/dj_lets_party.ogg',
      'SFUR/dj_living_in_a_digital_future.ogg',
      'SFUR/dj_people_cry_when_they_see_my_record_collection.ogg',
      'SFUR/dj_shut_up_and_dance_you_fools.ogg',
      'SFUR/dj_the_computers_have_taken_over.ogg',
      'SFUR/dj_we_are_like_dolphins_clicking.ogg',
      'SFUR/dj_would_you_like_a_pillow.ogg'
    ],
    caller: [
      'SFUR/caller_id_like_to_request_a_song.ogg',
      'SFUR/caller_play_some_wagner.ogg'
    ]
  };

  const sfur_time = {
    morning: ['SFUR/atmosphere_morning_1.ogg', 'SFUR/atmosphere_morning_2.ogg', 'SFUR/atmosphere_morning_3.ogg'],
    evening: ['SFUR/atmosphere_evening_1.ogg', 'SFUR/atmosphere_evening_2.ogg', 'SFUR/atmosphere_evening_3.ogg'],
    night: ['SFUR/atmosphere_night_1.ogg', 'SFUR/atmosphere_night_2.ogg', 'SFUR/atmosphere_night_3.ogg']
  };

  // SF-UR não reage ao clima (Sunny, Rain, Fog)
  const sfur_weather = {}; 
  const sfur_story = []; // Sem reações à história também

  const obj_sfur = {
    musicasList: sfur_musicas,
    grupoID: sfur_ids, // Vazio
    grupoDJSolo: sfur_djs_callers, 
    timePools: sfur_time,
    weatherPools: sfur_weather, // Vazio, o gerador_mes fará o fallback seguro
    storyPools: sfur_story, // Vazio
    grupoAdv: G.adv.sa 
  };

  /* ================================================================================= */
  /* ================================== 11. WCTR ===================================== */
  /* ================================================================================= */

  const wctr_ids = [
    'WCTR/id_all_the_news.ogg',
    'WCTR/id_at_home_at_work_or_in_rehab.ogg',
    'WCTR/id_deal_with_your_ignorance.ogg',
    'WCTR/id_if_you_crave_news.ogg',
    'WCTR/id_opinions_are_free.ogg',
    'WCTR/id_people_dying_and_explosions.ogg',
    'WCTR/id_sensationalist_bullshit.ogg',
    'WCTR/id_talk_is_cheap.ogg'
  ];

  const wctr_programs = {
    area_53: [
      { name: 'AREA_53_EP1', intros: ['WCTR/area_53_episode_1_intro.ogg'], mid: 'WCTR/area_53_episode_1_mid.ogg', outros: ['WCTR/area_53_episode_1_outro.ogg'] },
      { name: 'AREA_53_EP2', intros: ['WCTR/area_53_episode_2_intro.ogg'], mid: 'WCTR/area_53_episode_2_mid.ogg', outros: ['WCTR/area_53_episode_2_outro.ogg'] },
      { name: 'AREA_53_EP3', intros: ['WCTR/area_53_episode_3_intro.ogg'], mid: 'WCTR/area_53_episode_3_mid.ogg', outros: ['WCTR/area_53_episode_3_outro.ogg'] }
    ],
    entertaining_america: [
      { name: 'ENTERTAINING_AMERICA_EP1', intros: ['WCTR/entertaining_america_episode_1_intro.ogg'], mid: 'WCTR/entertaining_america_episode_1_mid.ogg', outros: ['WCTR/entertaining_america_episode_1_outro.ogg'] },
      { name: 'ENTERTAINING_AMERICA_EP2', intros: ['WCTR/entertaining_america_episode_2_intro.ogg'], mid: 'WCTR/entertaining_america_episode_2_mid.ogg', outros: ['WCTR/entertaining_america_episode_2_outro.ogg'] },
      { name: 'ENTERTAINING_AMERICA_EP3', intros: ['WCTR/entertaining_america_episode_3_intro.ogg'], mid: 'WCTR/entertaining_america_episode_3_mid.ogg', outros: ['WCTR/entertaining_america_episode_3_outro.ogg'] }
    ],
    entertaining_america_teaser: [
      { name: 'ENTERTAINING_AMERICA_TEASER', intros: ['WCTR/entertaining_america_teaser_intro.ogg'], mid: 'WCTR/entertaining_america_teaser_mid.ogg', outros: ['WCTR/entertaining_america_teaser_outro.ogg'] }
    ],
    gardening_with_maurice: [
      { name: 'GARDENING_WITH_MAURICE_EP1', intros: ['WCTR/gardening_with_maurice_episode_1_intro.ogg'], mid: 'WCTR/gardening_with_maurice_episode_1_mid.ogg', outros: ['WCTR/gardening_with_maurice_episode_1_outro.ogg'] },
      { name: 'GARDENING_WITH_MAURICE_EP2', intros: ['WCTR/gardening_with_maurice_episode_2_intro.ogg'], mid: 'WCTR/gardening_with_maurice_episode_2_mid.ogg', outros: ['WCTR/gardening_with_maurice_episode_2_outro.ogg'] },
      { name: 'GARDENING_WITH_MAURICE_TEASER1', intros: ['WCTR/gardening_with_maurice_teaser_1_intro.ogg'], mid: 'WCTR/gardening_with_maurice_teaser_1_mid.ogg', outros: ['WCTR/gardening_with_maurice_teaser_1_outro.ogg'] },
      { name: 'GARDENING_WITH_MAURICE_TEASER2', intros: ['WCTR/gardening_with_maurice_teaser_2_intro.ogg'], mid: 'WCTR/gardening_with_maurice_teaser_2_mid.ogg', outros: ['WCTR/gardening_with_maurice_teaser_2_outro.ogg'] }
    ],
    i_say_you_say: [
      { name: 'I_SAY_YOU_SAY_EP1', intros: ['WCTR/i_say_you_say_episode_1_intro.ogg'], mid: 'WCTR/i_say_you_say_episode_1_mid.ogg', outros: ['WCTR/i_say_you_say_episode_1_outro.ogg'] },
      { name: 'I_SAY_YOU_SAY_EP2', intros: ['WCTR/i_say_you_say_episode_2_intro.ogg'], mid: 'WCTR/i_say_you_say_episode_2_mid.ogg', outros: ['WCTR/i_say_you_say_episode_2_outro.ogg'] }
    ],
    lonely_hearts: [
      { name: 'LONELY_HEARTS_EP1', intros: ['WCTR/lonely_hearts_episode_1_intro.ogg'], mid: 'WCTR/lonely_hearts_episode_1_mid.ogg', outros: ['WCTR/lonely_hearts_episode_1_outro.ogg'] },
      { name: 'LONELY_HEARTS_EP2', intros: ['WCTR/lonely_hearts_episode_2_intro.ogg'], mid: 'WCTR/lonely_hearts_episode_2_mid.ogg', outros: ['WCTR/lonely_hearts_episode_2_outro.ogg'] },
      { name: 'LONELY_HEARTS_EP3', intros: ['WCTR/lonely_hearts_episode_3_intro.ogg'], mid: 'WCTR/lonely_hearts_episode_3_mid.ogg', outros: ['WCTR/lonely_hearts_episode_3_outro.ogg'] }
    ],
    the_tight_end_zone: [
      { name: 'THE_TIGHT_END_ZONE_EP1', intros: ['WCTR/the_tight_end_zone_episode_1_intro.ogg'], mid: 'WCTR/the_tight_end_zone_episode_1_mid.ogg', outros: ['WCTR/the_tight_end_zone_episode_1_outro.ogg'] },
      { name: 'THE_TIGHT_END_ZONE_EP2', intros: ['WCTR/the_tight_end_zone_episode_2_intro.ogg'], mid: 'WCTR/the_tight_end_zone_episode_2_mid.ogg', outros: ['WCTR/the_tight_end_zone_episode_2_outro.ogg'] }
    ],
    the_wild_traveler: [
      { name: 'THE_WILD_TRAVELER_EP1', intros: ['WCTR/the_wild_traveler_episode_1_intro.ogg'], mid: 'WCTR/the_wild_traveler_episode_1_mid.ogg', outros: ['WCTR/the_wild_traveler_episode_1_outro.ogg'] },
      { name: 'THE_WILD_TRAVELER_EP2', intros: ['WCTR/the_wild_traveler_episode_2_intro.ogg'], mid: 'WCTR/the_wild_traveler_episode_2_mid.ogg', outros: ['WCTR/the_wild_traveler_episode_2_outro.ogg'] }
    ]
  };

  const wctr_news = {
    1: { name: 'NEWS_EP01', intros: ['WCTR/news_episode_01_intro.ogg'], mid: 'WCTR/news_episode_01_mid.ogg', outros: ['WCTR/news_episode_01_outro.ogg'] },
    3: { name: 'NEWS_EP02', intros: ['WCTR/news_episode_02_intro.ogg'], mid: 'WCTR/news_episode_02_mid.ogg', outros: ['WCTR/news_episode_02_outro.ogg'] },
    5: { name: 'NEWS_EP03', intros: ['WCTR/news_episode_03_intro.ogg'], mid: 'WCTR/news_episode_03_mid.ogg', outros: ['WCTR/news_episode_03_outro.ogg'] },
    7: { name: 'NEWS_EP04', intros: ['WCTR/news_episode_04_intro.ogg'], mid: 'WCTR/news_episode_04_mid.ogg', outros: ['WCTR/news_episode_04_outro.ogg'] },
    11: { name: 'NEWS_EP05', intros: ['WCTR/news_episode_05_intro.ogg'], mid: 'WCTR/news_episode_05_mid.ogg', outros: ['WCTR/news_episode_05_outro.ogg'] },
    14: { name: 'NEWS_EP06', intros: ['WCTR/news_episode_06_intro.ogg'], mid: 'WCTR/news_episode_06_mid.ogg', outros: ['WCTR/news_episode_06_outro.ogg'] },
    17: { name: 'NEWS_EP07', intros: ['WCTR/news_episode_07_intro.ogg'], mid: 'WCTR/news_episode_07_mid.ogg', outros: ['WCTR/news_episode_07_outro.ogg'] },
    21: { name: 'NEWS_EP08', intros: ['WCTR/news_episode_08_intro.ogg'], mid: 'WCTR/news_episode_08_mid.ogg', outros: ['WCTR/news_episode_08_outro.ogg'] },
    24: { name: 'NEWS_EP09', intros: ['WCTR/news_episode_09_intro.ogg'], mid: 'WCTR/news_episode_09_mid.ogg', outros: ['WCTR/news_episode_09_outro.ogg'] },
    28: { name: 'NEWS_EP10', intros: ['WCTR/news_episode_10_intro.ogg'], mid: 'WCTR/news_episode_10_mid.ogg', outros: ['WCTR/news_episode_10_outro.ogg'] },
    30: { name: 'NEWS_EP11', intros: ['WCTR/news_episode_11_intro.ogg'], mid: 'WCTR/news_episode_11_mid.ogg', outros: ['WCTR/news_episode_11_outro.ogg'] }
  };

  // WCTR não reage ao clima nem possui marcações de horário
  const wctr_time = {};
  const wctr_weather = {};
  const wctr_story = {};

  const obj_wctr = {
    isTalkRadio: true,
    programs: wctr_programs,
    newsPools: wctr_news,
    grupoID: wctr_ids,
    grupoAdv: G.adv.sa,
    timePools: wctr_time,
    weatherPools: wctr_weather,
    storyPools: wctr_story
  };

  /* ================================================================================= */
  /* =========================== EXPORTAÇÃO GLOBAL =================================== */
  /* ================================================================================= */

  // Removemos qualquer versão antiga do pontes_desbloqueio e deixamos só esta:
  const pontes_desbloqueio = {
    dias_1_2: 'ADVERTS/bridge_announce_1_can_access_ls_only.ogg',
    dias_9_10: 'ADVERTS/bridge_announce_2_can_access_ls_and_sf.ogg',
    dias_14_15: 'ADVERTS/bridge_announce_3_can_access_ls_sf_and_lv.ogg'
  };
  
  window.STATION_DATA = {
    BRIDGE_ANNOUNCEMENTS: pontes_desbloqueio,
    PROGRAMACOES: {
      'sa': {
        'radio_kdst': obj_kdst,
        'radio_master_sounds': obj_master_sounds,
        'radio_bounce_fm': obj_bounce_fm,
        'radio_csr': obj_csr,
        'radio_kjah': obj_kjah,
        'radio_krose': obj_krose,
        'radio_playback_fm': obj_playback_fm,
        'radio_rls': obj_rls,
        'radio_x': obj_radio_x,
        'radio_sfur': obj_sfur,
        'radio_wctr': obj_wctr // Injetada com sucesso!
      }
    }
  };
})();
