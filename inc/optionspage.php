<?php

function simple_settings() {
    add_settings_section("section", "ThemeOptions", null, "simple");

    // Menu
    add_settings_field("simpletheme-radio-menu", "Menu layout", "simple_radio_display", "simple", "section");
    register_setting("section", "simpletheme-radio-menu");

    // Copyright
    add_settings_field("simpletheme-copyright", "Copyright", "simple_copyright_display", "simple", "section");
    register_setting("section", "simpletheme-copyright");

     // Mail
    add_settings_field("simpletheme-mail", "Mail", "simple_mail_display", "simple", "section");
    register_setting("section", "simpletheme-mail");

    // Phone
    add_settings_field("simpletheme-phone", "Phone", "simple_phone_display", "simple", "section");
    register_setting("section", "simpletheme-phone");

    // HTML bottom
    add_settings_field("simpletheme-html-bottom", "HTML body bottom", "simple_html_bottom_display", "simple", "section");
    register_setting("section", "simpletheme-html-bottom");
}

// Menu
function simple_radio_display() {
    echo '<p>Left (default) ';
    echo '<input type="radio" name="simpletheme-radio-menu" value="1"' . checked(1, get_option('simpletheme-radio-menu'), true) . '>';
    echo 'Right ';
    echo '<input type="radio" name="simpletheme-radio-menu" value="2"' . checked(2, get_option('simpletheme-radio-menu'), true) . '>';
    echo 'Logo / menu ';
    echo '<input type="radio" name="simpletheme-radio-menu" value="3"' . checked(3, get_option('simpletheme-radio-menu'), true) . '>';
    echo '</p>';

}

// Copyright
function simple_copyright_display() {
    echo '<input type="text" name="simpletheme-copyright" value="' . esc_attr( get_option('simpletheme-copyright'), true) . '">';
}

// Mail
function simple_mail_display() {
    echo '<input type="text" name="simpletheme-mail" value="' . esc_attr( get_option('simpletheme-mail'), true) . '">';
}

// Phone
function simple_phone_display() {
    echo '<input type="text" name="simpletheme-phone" value="' . esc_attr( get_option('simpletheme-phone'), true) . '">';
}

// HTML bottom
function simple_html_bottom_display() {
    echo '<textarea name="simpletheme-html-bottom" style="height: 100px; width: 300px;">' . esc_attr( get_option('simpletheme-html-bottom'), true) . '</textarea>';
    echo '<p><em>Google Analytics etc.</em></p>';
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