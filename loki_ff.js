var body;
try { body = JSON.parse($response.body); }
catch(e) { $done({}); }

// SIÊU NHẸ TÂM
body.crosshair_shake    = 0.0;
body.crosshair_drift    = 0.0;
body.scope_shake        = 0.0;
body.scope_sway         = 0.0;
body.idle_sway          = 0.0;
body.breath_sway        = 0.0;
body.run_sway           = 0.0;
body.weapon_sway        = 0.0;
body.micro_jitter       = false;
body.jitter_strength    = 0.0;
body.aim_wobble         = 0.0;
body.recoil_x           = 0.0;
body.recoil_y           = 0.0;
body.recoil_z           = 0.0;
body.muzzle_climb       = 0.0;
body.horizontal_drift   = 0.0;
body.no_recoil          = true;
body.no_spread          = true;
body.spread_value       = 0.0;

// HEADSHOT ENGINE
body.headshot_force     = true;
body.headshot_rate      = 100;
body.bone_lock          = "HEAD_BONE_0x1A";
body.bone_priority      = "head";
body.bone_offset_x      = 0.0;
body.bone_offset_y      = 0.0;
body.bone_offset_z      = 4.2;
body.force_redirect     = true;
body.redirect_strength  = 1.0;
body.hitbox_expand      = true;
body.hitbox_radius      = 3.2;
body.instant_register   = true;
body.penetrate_helmet   = true;
body.force_head_only    = true;
body.no_bullet_drop     = true;

// AIM LOCK
body.aim_smooth         = 0.25;
body.aim_curve          = "linear";
body.sticky_aim         = true;
body.sticky_factor      = 100;
body.fov_radius         = 8;
body.auto_acquire       = true;
body.switch_delay_ms    = 15;
body.reacquire_ms       = 20;
body.predict_movement   = true;
body.prediction         = 0.96;
body.lock_crouching     = true;
body.lock_jumping       = true;
body.lock_proning       = true;
body.lock_smoke         = true;
body.priority           = "head_visible_first";

// DRAG HEADSHOT
body.drag_hs            = true;
body.drag_snap_radius   = 60;
body.drag_snap_speed    = 1.0;
body.drag_curve         = "linear";
body.hold_lock          = true;
body.drag_sens_boost    = 1.2;
body.multi_drag         = true;

// SENSITIVITY
body.sens_general       = 95;
body.sens_aim           = 100;
body.sens_red_dot       = 88;
body.sens_2x            = 74;
body.sens_4x            = 62;
body.sens_8x            = 44;
body.sens_awm           = 36;
body.gyroscope          = false;

// FILTER
body.ignore_teammate    = true;
body.ignore_dead        = true;
body.ignore_vehicle     = true;
body.visible_only       = true;
body.max_scan           = 8;

// ANTI BAN
body.anti_detect        = true;
body.hide_replay        = true;
body.spoof_touch        = true;
body.log_wipe           = true;
body.humanize           = false;

// PERFORMANCE
body.lightweight        = true;
body.cpu_cap            = 4;
body.fps_safe           = true;

$done({ body: JSON.stringify(body) });
