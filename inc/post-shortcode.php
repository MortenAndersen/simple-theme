<?php


add_shortcode('postloop', 'simpleTheme_postloop');
function simpleTheme_postloop($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
  extract(shortcode_atts(array('cat' => '1', 'grid' => 'g4' ), $atts));
  $post_id_array = explode(',', $cat);

 $loop = new WP_Query( array(
  'post_type' => 'post',
  'category__in' => $post_id_array,
  'posts_per_page' => -1,
 ) );


 if ( $loop->have_posts() ) {
   echo '<div class="box-shortcode post-shortcode flex-con ' . $grid . '">';
   while ( $loop->have_posts() ) : $loop->the_post();

   echo '<article class="flex-item">';
   the_title('<h2>', '</h2>');
  the_content();
  edit_post_link( __( 'Edit', 'simpletheme' ), '<p>', '</p>', null, 'edit-post' );
  echo '</article>';
 endwhile; wp_reset_query();
echo '</div>';
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}



add_shortcode('postloop_small', 'simpleTheme_postloop_small');
function simpleTheme_postloop_small($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
  extract(shortcode_atts(array('cat' => '1', 'grid' => 'g4' ), $atts));
  $post_id_array = explode(',', $cat);

 $loop = new WP_Query( array(
  'post_type' => 'post',
  'category__in' => $post_id_array,
  'posts_per_page' => -1,
 ) );


 if ( $loop->have_posts() ) {
  echo '<div class="box-shortcode post-shortcode flex-con ' . $grid . '">';
 while ( $loop->have_posts() ) : $loop->the_post();
  echo '<div class="flex-item">';
  echo '<a href="' . get_the_permalink() . '">';
    if ( has_post_thumbnail() ) {
        echo '<div class="box-img">';
        the_post_thumbnail( 'simpletheme-content-image' );
        echo '</div>';
      }
    the_title('<h4>', '</h4>');
    the_excerpt();
    echo '</a>';
    edit_post_link( __( 'Edit', 'simpletheme' ), '<p>', '</p>', null, 'edit-post' );

   echo '</div>';
 endwhile; wp_reset_query();
 echo '</div>';
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}