<?php

add_shortcode('banner', 'simpleTheme_banner');
function simpleTheme_banner($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
    extract(shortcode_atts(array('grid' => 'g3' ), $atts));

 $loop = new WP_Query( array(
  'post_type' => 'banner',
  'orderby' => 'menu_order',
  'order' => 'ASC',
  'posts_per_page' => -1
  )
);


 if ( $loop->have_posts() ) {
 	echo '<div class="simpleTheme_banner">';

 while ( $loop->have_posts() ) : $loop->the_post();
 	echo '<div id="post-id-' .get_the_ID(). '">';

        the_post_thumbnail();
        echo '<div class="l-wrap l-banner banner-text-con">';
        echo '<div class="banner-content">';
        echo '<div class="banner-text">';
          the_content();
        echo '</div>';
        echo '</div>';

        $link = get_field('link');
if( $link ):
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';

    echo '<a href="' . esc_url( $link_url ) . '" target="' .esc_attr( $link_target ) . '">' . esc_html( $link_title ) . '</a>';
endif;

echo '</div>';

 	 echo '</div>';
 endwhile; wp_reset_query();

 echo '</div>';
 }







    $myvariable = ob_get_clean();
        return $myvariable;
}