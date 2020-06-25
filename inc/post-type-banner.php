<?php
if( function_exists('acf_add_local_field_group') ):
// Posttype Ydelser

add_action( 'init', 'simpleTheme_create_posttype_banner' );

	function simpleTheme_create_posttype_banner() {
		 register_post_type(
	    	'banner',
	    	array(
	    		'labels' => array(
	    			'name' => __('Banner', 'simpletheme'),
	    			'singular_name' => __('Banner', 'simpletheme')
	    		),
	    		'public' => true,
	    		'publicly_queryable' => false,
	    		'menu_icon' => 'dashicons-hammer',
	    		'supports' => array(
	    			'title',
	    			'editor',
	    			'thumbnail',
	    			'page-attributes'
	    		),
	    		'show_in_rest' => true,
	    		'rewrite' => array(
	    			'slug' => 'banner'
	    		),
	    	)
	    );
	}

	function simpleTheme_posttype_function_banner() {
	    simpleTheme_create_posttype_banner();
	}
endif;