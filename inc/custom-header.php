<?php
function simpleTheme_custom_header_setup() {
add_theme_support(
		'custom-header', apply_filters(
			'simpleTheme_custom_header_args', array(
				'default-image'    => get_parent_theme_file_uri( '/assets/images/header.jpg' ),
				'width'            => 2000,
				'height'           => 1200,
				'flex-height'      => true,
				'video'            => true,
				'wp-head-callback' => 'simpleTheme_header_style',
			)
		)
	);

	register_default_headers(
		array(
			'default-image' => array(
				'url'           => '%s/assets/images/header.jpg',
				'thumbnail_url' => '%s/assets/images/header.jpg',
				'description'   => __( 'Default Header Image', 'simpletheme' ),
			),
		)
	);
}
add_action( 'after_setup_theme', 'simpleTheme_custom_header_setup' );