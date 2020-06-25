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
 	echo '<div class="banner">';
  echo '<div class="gallery">';
 while ( $loop->have_posts() ) : $loop->the_post();
 	echo '<div id="post-id-' .get_the_ID(). '">';

        the_post_thumbnail();
        echo '<div class="l-wrap l-banner banner-text-con">';
        echo '<div class="banner-text">';
          the_content();
        echo '</div>';
        echo '</div>';


 	 echo '</div>';
 endwhile; wp_reset_query();
 echo '</div>';
 echo '</div>';
 }




// css style
echo '<style type="text/css" scoped>';
if ( $loop->have_posts() ) {

  $i = 1;


 while ( $loop->have_posts() ) : $loop->the_post();
  echo '.css_banner.slide' . $i;
    echo " {\n";
    echo ' background: url(';
          echo get_the_post_thumbnail_url();
    echo ");\n";
    echo 'animation:fade' . $i . ' 15s infinite;';
    echo "\n";
    echo '-webkit-animation:fade' . $i . ' 15s infinite;';
    echo "}\n";



 $i++;
 endwhile; wp_reset_query();

}


$i = 1;
// css keyframe

while ( $loop->have_posts() ) : $loop->the_post();
  echo '@keyframes fade' . $i;
    echo " {\n";




        // do something
       echo ' 0%   {opacity:1}';



    echo "}\n";



 $i++;
 endwhile; wp_reset_query();


 echo '</style>';


    $myvariable = ob_get_clean();
        return $myvariable;
}