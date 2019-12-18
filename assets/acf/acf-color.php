<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5df9fc1b5ed74',
	'title' => 'Simple Theme Color',
	'fields' => array(
		array(
			'key' => 'field_5df9fc2b401a5',
			'label' => 'Baggrundsfarve',
			'name' => 'baggrundsfarve',
			'type' => 'color_picker',
			'instructions' => 'Benyttes KUN i oversigter!',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '#FFFFFF',
		),
		array(
			'key' => 'field_5df9fc5e401a6',
			'label' => 'Tekstfarve',
			'name' => 'tekstfarve',
			'type' => 'color_picker',
			'instructions' => 'Benyttes KUN i oversigter!',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '#222222',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'post',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'side',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => 'Farver benyttes KUN i oversigter!',
));

endif;