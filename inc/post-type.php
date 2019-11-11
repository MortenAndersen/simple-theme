<?php

// Personer

	// Hvis ACF
if( function_exists('acf_add_local_field_group') ):

	add_action( 'init', 'simpleTheme_create_posttype_person' );

	function simpleTheme_create_posttype_person() {
	    register_post_type(
	    	'person',
	    	array(
	    		'labels' => array(
	    			'name' => __('Personer', 'simpletheme'),
	    			'singular_name' => __('Peron', 'simpletheme')
	    		),
	    		'public' => true,
	    		'menu_icon' => 'dashicons-businessman',
	    		'taxonomies' => array('category'),
	    		'supports' => array(
	    			'title',
	    			'editor',
	    			'excerpt',
	    			'thumbnail',
	    			'page-attributes'
	    		),
	    		'show_in_rest' => true,
	    		'rewrite' => array(
	    			'slug' => 'person'
	    		),
	    	)
	    );
	}

	function simpleTheme_posttype_function() {
	    simpleTheme_create_posttype_person();
	}

	register_activation_hook( __FILE__, 'simpleTheme_posttype_function' );

endif;