<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5bd98f5c9d49e',
	'title' => 'Simple Theme Aside Left',
	'fields' => array(
		array(
			'key' => 'field_5bd98f7bfb838',
			'label' => 'Aside Left',
			'name' => 'aside_left',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-left-aside.php',
			),
		),
		array(
			array(
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-left-right-aside.php',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
));

acf_add_local_field_group(array(
	'key' => 'group_5bd99413dfc7b',
	'title' => 'Simple Theme Aside Right',
	'fields' => array(
		array(
			'key' => 'field_5bd99413e4712',
			'label' => 'Aside Right',
			'name' => 'aside_right',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'basic',
			'media_upload' => 1,
			'delay' => 0,
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-right-aside.php',
			),
		),
		array(
			array(
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-left-right-aside.php',
			),
		),
		array(
		array(
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-contact.php',
			),
		),
		array(
	array(
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-contact-two.php',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
));

endif;