<?php

function simple_settings() {
    add_settings_section("section", "ThemeOptions", null, "simple");

    // Menu
    add_settings_field("simpletheme-radio-menu", "Menu layout", "simple_radio_display", "simple", "section");
    register_setting("section", "simpletheme-radio-menu");

    // Copyright
    add_settings_field("simpletheme-copyright", "Copyright", "simple_copyright_display", "simple", "section");
    register_setting("section", "simpletheme-copyright");
}

// Menu
function simple_radio_display() {
   ?><p>Left (default)
        <input type="radio" name="simpletheme-radio-menu" value="1" <?php checked(1, get_option('simpletheme-radio-menu'), true); ?>>
        Right
        <input type="radio" name="simpletheme-radio-menu" value="2" <?php checked(2, get_option('simpletheme-radio-menu'), true); ?>></p>
   <?php
}

// Copyright
function simple_copyright_display() {
  echo 'Copyright';
  echo '<input type="text" name="simpletheme-copyright" value="' . esc_attr( get_option('simpletheme-copyright'), true) . '">';
}

// Admin Page
add_action("admin_init", "simple_settings");

function simple_page() {
  ?>
      <div class="wrap">
         <h1>SimpleTheme</h1>

         <form method="post" action="options.php">
            <?php
               settings_fields("section");

               do_settings_sections("simple");

               submit_button();
            ?>
         </form>
      </div>
   <?php
}

// Menu in WP
function menu_item() {
  add_submenu_page("options-general.php", "simple", "SimpleTheme", "manage_options", "simple", "simple_page");
}

add_action("admin_menu", "menu_item");