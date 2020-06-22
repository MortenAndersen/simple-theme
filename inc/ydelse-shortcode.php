<?php
add_shortcode('ydelser', 'simpleTheme_ydelser');
function simpleTheme_ydelser($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
  extract(shortcode_atts(array( 'grid' => 'g4' ), $atts));
	//$id_array = explode(',', $postid);

 $loop = new WP_Query( array(
 	'post_type' => 'ydelse',
 	'orderby' => 'menu_order',
  'order' => 'asc',
 	//'post__in' => $id_array,
  'posts_per_page' => -1,
 ) );


 if ( $loop->have_posts() ) {
  echo '<div class="carousel">';
 	echo '<div class="box-shortcode  ' . $grid . ' slider-carousel">';
 while ( $loop->have_posts() ) : $loop->the_post();
 	echo '<div class="flex-itemf">';
 	echo '<a href="' . get_the_permalink() . '" class="image-zoom">';
 		if ( has_post_thumbnail() ) {
        echo '<div class="box-img">';
        the_post_thumbnail( 'simpletheme-content-image' );
        echo '</div>';
      }
    the_title('<h4>', '</h4>');
    the_excerpt();
    echo '</a>';
 	 echo '</div>';
 endwhile; wp_reset_query();
 echo '</div>';
 echo '</div>';
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}