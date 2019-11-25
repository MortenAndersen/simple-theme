<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5ddbcd3c8c3ac',
	'title' => 'SimpleTheme samarbejde',
	'fields' => array(
		array(
			'key' => 'field_5ddbcd4dc83c2',
			'label' => 'Link',
			'name' => 'link',
			'type' => 'url',
			'instructions' => 'Link til samarbejdspartner',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'samarbejde',
			),
		),
	),
	'menu_order' => -1,
	'position' => 'side',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
));

endif;