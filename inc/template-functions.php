<?php

// Site header

function simpleTheme_site_header() {
    // Logo
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );

    if ( has_custom_logo() ) {
        echo '<div class="site-logo"><a href="' . esc_url( home_url( '/' ) ) . '"><img src="'. esc_url( $logo[0] ) .'"></a></div>';
    }

    if ( 'blank' !== get_header_textcolor() ) {
        echo '<div class="site-header-text not-phone">';
        // Title
        if ( get_bloginfo( 'name' )  !== '' ) {
            echo '<div class="site-title">' . get_bloginfo( 'name' ) . '</div>';
        }
        // Description
        $description = get_bloginfo( 'description', 'display' );
        if ( $description || is_customize_preview() ) {
            echo '<div class="site-slogan">' . $description . '</div>';
        }
        echo '</div>';
    }
}

// Content image

function simpleTheme_the_post_thumbnail() {
    $caption = get_the_post_thumbnail_caption();
    if ( has_post_thumbnail() ) {
        echo '<div class="content-images">';
        the_post_thumbnail( 'simpletheme-content-image' );
        if(!empty($caption)) {
            echo '<div class="img-caption">' . $caption . '</div>';
        }
        echo '</div>';
    }
}

// Header image

function simpleTheme_header_style() {
    if( has_header_image() || !empty(get_header_textcolor())  ) {
        echo '<style>';
        if( has_header_image() ) {
            echo '.background-header {';
            echo 'background-image: url(' . get_header_image() . ');';
            echo '}';
            echo '.background-header, .site-header-text {';
            echo 'color:#' . get_header_textcolor() . ';';
            echo '}';
        }
        if  ( !has_header_image() && !empty(get_header_textcolor()) && !empty(get_background_color()) ) {
            echo '.background-header, .site-header-text {';
            echo 'color:#' . get_header_textcolor() . ';';
            echo 'background:#' . get_background_color() . ';';
            echo '}';
        }
        echo '</style>';
    }
}

// Search Results

function simpleTheme_search_results() {
    if ( have_posts() ) :
        echo '<ol class="search-results">';
            while ( have_posts() ) : the_post();
                echo '<li class="search-result-type--' . get_post_type() . '"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
            endwhile;
        echo '</ol>';
    endif;
}

// Aside Left

function simpleTheme_aside_left() {
    if ( is_page() ) :
        // ACF
        if( function_exists('acf_add_local_field_group') ):
            if( get_field('aside_left') ):
                echo '<div class="simple-theme-acf-aside-left">';
                the_field( 'aside_left' );
                echo '</div>';
            endif;
        endif;
        // end ACF
        dynamic_sidebar( 'sidebar-aside-left' );
    else :
        dynamic_sidebar( 'sidebar-aside-left-single' );
    endif;
}

// Aside Right

function simpleTheme_aside_right() {
    if ( is_page() ) :
        // ACF
        if( function_exists('acf_add_local_field_group') ):
            if( get_field('aside_right') ):
                echo '<div class="simple-theme-acf-aside-right">';
                the_field( 'aside_right' );
                echo '</div>';
            endif;
        endif;
        // end ACF
        dynamic_sidebar( 'sidebar-aside-right' );
    else :
        dynamic_sidebar( 'sidebar-aside-right-single' );
    endif;
}

// class

// Single class
function simpleTheme_wrap_class() {
    if ( is_active_sidebar( 'sidebar-aside-left-single' ) || is_active_sidebar( 'sidebar-aside-right-single' ) ) {
        echo "simple-grid-con space-between";
    }
}
function simpleTheme_main_class() {
    if ( is_active_sidebar( 'sidebar-aside-left-single' ) XOR is_active_sidebar( 'sidebar-aside-right-single' )  ) {
        echo "simple-grid-item-main";
    }
    if ( is_active_sidebar( 'sidebar-aside-left-single' ) ) {
        echo " order-2";
    }
    if ( is_active_sidebar( 'sidebar-aside-left-single' ) && is_active_sidebar( 'sidebar-aside-right-single' )  ) {
        echo " simple-grid-item-main-small";
    }
}
function simpleTheme_aside_class() {
    if ( is_active_sidebar( 'sidebar-aside-left-single' ) && is_active_sidebar( 'sidebar-aside-right-single' )  ) {
        echo "-small";
    }

}

// ACF Background image
if( function_exists('acf_add_local_field_group') ):
    function simpleTheme_acf_background_image(){
        if( get_field('background_image') ):
            echo '<style>';
            echo 'body.custom-background {background-image: url("' . get_field('background_image') . '");}';
            echo '</style>';
        endif;
    }
endif;

// BackButton

function simpleTheme_go_back() {
    if (is_single() ):
        echo '<div class="go-back-con">';
        echo '<button onclick="goBack()" class="go-back">' . esc_html__( 'Go back', 'simpletheme' ) . '</button>';
        echo '<script>function goBack() {window.history.back();}</script>';
        echo '</div>';
endif;
}

// Copyright

function simpleTheme_copyright() {
    if( get_option('simpletheme-copyright') ):
        echo '<div class="background background-copyright">';
        echo '<div class="l-wrap l-wrap-copyright">';
        echo '<div class="copyright-con">';
        echo '&copy; copyright - ' . get_option('simpletheme-copyright') . ' | by <a href="https://www.hjemmesider.dk" target="_blank" rel="nofollow">Hjemmesider.dk</a>';
        echo '</div>';
        echo '</div>';
        echo '</div>';
    endif;
}

// HTML body footer (Google analytics etc.)

function simpleTheme_html_body_footer() {
    if( get_option('simpletheme-html-bottom') ):
        echo get_option('simpletheme-html-bottom');
    endif;
}

// Cart

function simpleTheme_small_cart() {
echo '<a class="cart-customlocation" href="' . wc_get_cart_url() . '" title="' .  __( 'View your shopping cart' ) . '">' . sprintf ( _n( '%d produkt', '%d produkter', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ) . ' - ' . WC()->cart->get_cart_total() . '</a>';
}

// Comments

function simpleTheme_comments() {
    foreach (get_comments() as $comment):
        echo $comment->comment_author;
        echo $comment->comment_content;
    endforeach;

    comment_form();
}