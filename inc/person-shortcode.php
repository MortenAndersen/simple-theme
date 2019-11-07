<?php

add_shortcode('personer', 'simpleTheme_personer');
function simpleTheme_personer($atts) {
    global $post;
    ob_start();

 $loop = new WP_Query( array( 'post_type' => 'person') );
 if ( $loop->have_posts() ) {

 while ( $loop->have_posts() ) : $loop->the_post();
 	the_title('<h4>', '</h4>');
 	simpleTheme_acf_person();
 endwhile; wp_reset_query();

 }

    $myvariable = ob_get_clean();
        return $myvariable;
}