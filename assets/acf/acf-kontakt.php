<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5dc9877d02d4e',
	'title' => 'Kontakt',
	'fields' => array(
		array(
			'key' => 'field_5dc98dee3e7aa',
			'label' => 'Kontaktformular',
			'name' => 'kontaktformular',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5dc98e38c9ca4',
			'label' => 'Personer',
			'name' => 'personer',
			'type' => 'text',
			'instructions' => 'Shortcode til personer
[personer] eller [personer_link]',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5dca7ea2deb3d',
			'label' => 'Google Maps',
			'name' => 'google_maps',
			'type' => 'textarea',
			'instructions' => 'Kopier Iframe fra Google Maps ind her',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'maxlength' => '',
			'rows' => '',
			'new_lines' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_template',
				'operator' => '==',
				'value' => 'page-contact.php',
			),
		),
		array(
			array(
				'param' => 'post_template',
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