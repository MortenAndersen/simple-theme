<?php
add_shortcode('box', 'simpleTheme_box');
function simpleTheme_box($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
  extract(shortcode_atts(array('postid' => '1', 'grid' => 'g4' ), $atts));
	$id_array = explode(',', $postid);

 $loop = new WP_Query( array(
 	'post_type' => 'page',
 	'orderby' => 'post__in',
 	'post__in' => $id_array,
  'posts_per_page' => -1,
 ) );


 if ( $loop->have_posts() ) {
 	echo '<div class="box-shortcode flex-con ' . $grid . '">';
 while ( $loop->have_posts() ) : $loop->the_post();
 	echo '<div class="flex-item">';
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
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}