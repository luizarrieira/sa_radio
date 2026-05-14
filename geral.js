// geral.js — Base global de comerciais (GTA San Andreas)

(function() {
  // --- ADVERTISEMENTS (Comerciais do San Andreas) ---
  const raw_ads_sa = [
    'abiggo_brokerage_and_pawn',
    'american_bank_of_los_santos',
    'ammunation',
    'blottos_1_gold_plated_razorblades',
    'blottos_2_silver_straw',
    'blottos_3_tiny_spoon',
    'bouche_cologne',
    'carcer_city_vacations',
    'castradon_baldness_is_loneliness',
    'celebrate_with_cake_1_wife',
    'celebrate_with_cake_2_son',
    'cluckin_bell_1_were_psychotic_crazies',
    'cluckin_bell_2_all_you_protestors_can_go_to_hell',
    'commando_pest_eradication',
    'commemorative_miniatures',
    'creative_plastic_surgery',
    'crimson_executive_spouse_indemnity_services',
    'de_koch_diamonds',
    'dream_makers',
    'eris_shoes',
    'executive_intruder_extermination_service',
    'exsorbeo_handheld_gaming_system',
    'fokari_film',
    'grin_keeps_me_at_the_equator',
    'hampshire_nannies_ltd',
    'herr_grubers_spa',
    'intergalactic_wrestling_championship_on_weazel',
    'inversion_therapy',
    'janus_invent_the_new_you',
    'kilimanjaro_clothes_1_women_love_big_men',
    'kilimanjaro_clothes_2_youre_as_big_as_a_mountain',
    'law_on_weazel_1_gritty_new_show',
    'law_on_weazel_2_because_paperwork_is_dramatic',
    'law_on_weazel_3_the_real_life_fictional_drama',
    'logger_beer',
    'logger_light',
    'lustrious_1_there_she_was',
    'lustrious_2_how_you_get_your_hair_all_greasy',
    'mike_andrews_live_1_u_s_a',
    'mike_andrews_live_2_enjoy_it',
    'my_five_uncles_on_lsbc',
    'proposition_421_outlaw_smoking_everywhere',
    'proposition_602_no_mass_transit',
    'proposition_832_ban_immigration_green_cards',
    'psa_cars_for_teenagers_instead_of_bicycles',
    'rapidite_the_do_it_yourself_sexual_realignment_kit',
    'redwood_cigarettes',
    'renegade_cologne',
    'san_andreas_telephone_1_orphan',
    'san_andreas_telephone_2_ex_husband',
    'san_andreas_telephone_3_new_father',
    'san_andreas_telephone_4_son',
    'shine_by_helmetshine',
    'sooth_cough_medicine',
    'sprunk',
    'the_cavern_of_sorrow_fantasy_game',
    'the_crazy_cock_gentlemans_club',
    'the_epsilon_program_1_do_you_want_answers',
    'the_epsilon_program_2_science_is_a_lie',
    'the_epsilon_program_3_do_you_worry_that_nobody_likes_you',
    'the_glory_hole_themepark_1_i_know_its_safe',
    'the_glory_hole_themepark_2_something_theyll_never_forget',
    'the_midlife_crisis_center',
    'the_military',
    'the_starfish_resort_and_casino',
    'tropicarcinoma',
    'ultimate_disc_in_the_dark',
    'zebra_bar_1_what_about_nuts',
    'zebra_bar_2_wow_its_enormous'
  ];

  // Adiciona a pasta e a extensão automaticamente a cada item
  const adv_sa = raw_ads_sa.map(ad => `ADVERTS/${ad}.ogg`);

  // --- EXPORTAÇÃO GLOBAL ---
  window.GERAL_DATA = {
    adv: {
      sa: adv_sa
    }
  };

  console.log('✅ [GERAL] Comerciais carregados para o GTA San Andreas.');
})();