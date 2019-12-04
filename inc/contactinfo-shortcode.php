<?php


add_shortcode('kontakt', 'simpleTheme_kontakt');
function simpleTheme_kontakt($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
    extract(shortcode_atts(array('grid' => 'g3' ), $atts));
echo '<div class="hjemmeside-kontakt">';
simpleTheme_mail();
simpleTheme_phone();
echo '</div>';

    $myvariable = ob_get_clean();
        return $myvariable;
}