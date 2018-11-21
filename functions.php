<?php
/**
 * Register widget area.
 */

// Flytter scripts til footer
function simpletheme_footer_enqueue_scripts() {
    remove_action('wp_head', 'wp_print_scripts');
    remove_action('wp_head', 'wp_print_head_scripts', 9);
    remove_action('wp_head', 'wp_enqueue_scripts', 1);
}
add_action('wp_enqueue_scripts', 'simpletheme_footer_enqueue_scripts');

	function simpletheme_scripts() {
    wp_register_script('theme-script', get_template_directory_uri() . '/assets/js/theme.js', array('jquery'));
    wp_enqueue_script('theme-script');
	}

add_action('wp_enqueue_scripts', 'simpletheme_scripts');

function simpletheme_add_google_fonts() {
	wp_enqueue_style( 'simpletheme-google-fonts', 'https://fonts.googleapis.com/css?family=Questrial', false );
	}
add_action( 'wp_enqueue_scripts', 'simpletheme_add_google_fonts' );

require get_parent_theme_file_path('template/functions/theme-customize.php');

if (!function_exists('simpletheme_setup')):

function simpletheme_setup() {

	// Remove stuff
	remove_action( 'wp_head', 'feed_links_extra', 3 );
	remove_action( 'wp_head', 'feed_links');
	remove_action( 'wp_head', 'wp_shortlink_wp_head');
	remove_action('wp_head', 'rsd_link');
	remove_action( 'wp_head', 'rest_output_link_wp_head');
	remove_action( 'wp_head', 'wp_oembed_add_discovery_links');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'wp_generator');

	// HTML5
	add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );
	// Title Tag
	add_theme_support( 'title-tag' );
	// Feed links
	add_theme_support( 'automatic-feed-links' );
	// Images
	add_theme_support( 'post-thumbnails' );

	add_image_size( 'simpletheme-content-image', 2000, 1200, true );



	// Menu
	register_nav_menus(array(
		'main-menu' => __('Main Menu', 'simpletheme'),
	));

}
endif;

add_action( 'after_setup_theme', 'simpletheme_setup' );

// Theme Widget
require get_parent_theme_file_path( '/inc/widget.php' );

// Theme Options
require get_parent_theme_file_path( '/inc/optionspage.php' );

// ACF
require get_parent_theme_file_path( '/assets/acf/acf-fields.php' );

/**
 * Additional features to allow styling of the templates.
 */
require get_parent_theme_file_path( '/inc/template-functions.php' );

// require get_parent_theme_file_path( '/inc/custom-header.php' );

//require get_parent_theme_file_path( '/inc/page-metabox.php' );

// body_class
add_filter( 'body_class', function( $classes ) {
    if ( 'blank' === get_header_textcolor() && !has_custom_logo() ) {
         $classes[] = 'no-header-info';
        }

    return $classes;
} );
