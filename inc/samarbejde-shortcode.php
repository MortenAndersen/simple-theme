<?php


add_shortcode('samarbejde', 'simpleTheme_samarbejde');
function simpleTheme_samarbejde($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
    extract(shortcode_atts(array('grid' => 'g3' ), $atts));

 $loop = new WP_Query( array(
 	'post_type' => 'samarbejde',
  'posts_per_page' => -1
 )
);


 if ( $loop->have_posts() ) {
 	echo '<div class="samarbejde-shortcode flex-con ' . $grid . '">';
 	while ( $loop->have_posts() ) : $loop->the_post();
 		echo '<div class="flex-item samarbejdspartner">';
 		if( get_field('link') ) {
 			echo '<a href="' . get_field('link') . '" target="_blank">';
 				if ( has_post_thumbnail() ) {
        	echo '<div class="shortcode-samarbejde-img">';
        	the_post_thumbnail( 'simpletheme-content-image' );
        	echo '</div>';
      	} else {
    	the_title('<h4 class="no-logo">', '</h4>');
  		}
		echo '</a>';

 } else {
  if ( has_post_thumbnail() ) {
          echo '<div class="shortcode-samarbejde-img">';
          the_post_thumbnail( 'simpletheme-content-image' );
          echo '</div>';
        } else {
      the_title('<h4 class="no-logo">', '</h4>');
      }

 }
    echo '</div>';
 endwhile; wp_reset_query();
 echo '</div>';
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}