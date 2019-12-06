<?php

// Grid


add_shortcode('personer', 'simpleTheme_personer');
function simpleTheme_personer($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
    extract(shortcode_atts(array('grid' => 'g3' ), $atts));

 $loop = new WP_Query( array(
  'post_type' => 'person',
  'orderby' => 'menu_order',
  'order' => 'ASC',
  'posts_per_page' => -1
  )
);


 if ( $loop->have_posts() ) {
 	echo '<div class="personer-shortcode flex-con ' . $grid . '">';
 while ( $loop->have_posts() ) : $loop->the_post();
 	echo '<div class="flex-item">';
 		if ( has_post_thumbnail() ) {
        echo '<div class="shortcode-person-img">';
        the_post_thumbnail( 'simpletheme-content-image' );
        echo '</div>';
      }
    the_title('<h4>', '</h4>');
 		simpleTheme_acf_person();
 	 echo '</div>';
 endwhile; wp_reset_query();
 echo '</div>';
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}

/* ____________________________________________________________________ */

add_shortcode('personer_link', 'simpleTheme_personerLink');
function simpleTheme_personerLink($atts) {
  global $post;
  ob_start();

  // define attributes and their defaults
    extract(shortcode_atts(array('grid' => 'g3' ), $atts));

 $loop = new WP_Query( array(
  'post_type' => 'person',
  'orderby' => 'menu_order',
  'order' => 'ASC',
  'posts_per_page' => -1
  )
);

 if ( $loop->have_posts() ) {
 	  echo '<div class="personer-shortcode flex-con ' . $grid . '">';
 while ( $loop->have_posts() ) : $loop->the_post();
 	echo '<div class="flex-item">';
 		if ( has_post_thumbnail() ) {
        echo '<div class="shortcode-person-img">';
        the_post_thumbnail( 'simpletheme-content-image' );
        echo '</div>';
      }
      the_title('<h4>', '</h4>');
 		simpleTheme_acf_person();
 		echo '<p class="read-more-person"><a class="read-more" href="' . get_the_permalink() . '">Læs mere om <span class="read-more-name">' . get_the_title() . '</span></a></p>';
 	 echo '</div>';
 endwhile; wp_reset_query();
 echo '</div>';
 }

    $myvariable = ob_get_clean();
        return $myvariable;
}