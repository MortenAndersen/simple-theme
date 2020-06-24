<?php
if( function_exists('acf_add_local_field_group') ):
// Posttype Ydelser

add_action( 'init', 'simpleTheme_create_posttype_ydelser' );

	function simpleTheme_create_posttype_ydelser() {
		 register_post_type(
	    	'ydelse',
	    	array(
	    		'labels' => array(
	    			'name' => __('Ydelser', 'simpletheme'),
	    			'singular_name' => __('Ydelse', 'simpletheme')
	    		),
	    		'public' => true,
	    		'menu_icon' => 'dashicons-hammer',
	    		'supports' => array(
	    			'title',
	    			'editor',
	    			'excerpt',
	    			'thumbnail',
	    			'page-attributes'
	    		),
	    		'show_in_rest' => true,
	    		'rewrite' => array(
	    			'slug' => 'ydelse'
	    		),
	    	)
	    );
	}

	function simpleTheme_posttype_function_ydelser() {
	    simpleTheme_create_posttype_ydelser();
	}

	// Custom Taxonomy = 'ydelse-type'

	function custom_taxonomy_ydelse() {

    $labels = array(
        'name'                       => _x( 'Typer', 'Taxonomy General Name', 'simpletheme' ),
        'singular_name'              => _x( 'Type', 'Taxonomy Singular Name', 'simpletheme' ),
        'menu_name'                  => __( 'Type', 'simpletheme' ),
        'all_items'                  => __( 'All Items', 'simpletheme' ),
        'parent_item'                => __( 'Parent type', 'simpletheme' ),
        'parent_item_colon'          => __( 'Parent type:', 'simpletheme' ),
        'new_item_name'              => __( 'New Item Name', 'simpletheme' ),
        'add_new_item'               => __( 'Add New type', 'simpletheme' ),
        'edit_item'                  => __( 'Edit Item', 'simpletheme' ),
        'update_item'                => __( 'Update Item', 'simpletheme' ),
        'view_item'                  => __( 'View Item', 'simpletheme' ),
        'separate_items_with_commas' => __( 'Separate items with commas', 'simpletheme' ),
        'add_or_remove_items'        => __( 'Add or remove items', 'simpletheme' ),
        'choose_from_most_used'      => __( 'Choose from the most used', 'simpletheme' ),
        'popular_items'              => __( 'Popular Items', 'simpletheme' ),
        'search_items'               => __( 'Search Items', 'simpletheme' ),
        'not_found'                  => __( 'Not Found', 'simpletheme' ),
        'no_terms'                   => __( 'No items', 'simpletheme' ),
        'items_list'                 => __( 'Items list', 'simpletheme' ),
        'items_list_navigation'      => __( 'Items list navigation', 'simpletheme' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'show_in_rest'							=> true,

    );
    register_taxonomy( 'ydelse-type', array( 'ydelse' ), $args );
}

add_action( 'init', 'custom_taxonomy_ydelse', 2 );





// Ændre archive loop på 'ydelse-type' til orderby menu_order



function order_ydelse_type_categories( $query ) {
    $query->set( 'orderby', 'menu_order' );
    $query->set( 'order', 'ASC' );
    return $query;
}

add_action( 'pre_get_posts', 'remove_pre_ydelse_orderby', 10 );
function remove_pre_ydelse_orderby( $query ) {
    if ( is_tax( 'ydelse-type' ) && $query->is_main_query() ) {
        remove_all_filters( 'posts_orderby' );
        add_action( 'pre_get_posts', 'order_ydelse_type_categories', 11 );
    }
}

endif;


// Loop til page-ydleser.php - fordeling af de forskellige ydlerser
if ( ! function_exists ( 'ydelser_type' ) ) {
function ydelser_type() {

    $post_type = 'ydelse';
    $taxonomies = get_object_taxonomies( array( 'post_type' => $post_type ) );

    foreach( $taxonomies as $taxonomy ) :
        $terms = get_terms( $taxonomy );
        foreach( $terms as $term ) :

          $args = array(
            'post_type' => $post_type,
            'posts_per_page' => -1,
            'orderby' => 'menu_order',
            'order' => 'asc',
            'tax_query' => array(
              array(
                'taxonomy' => $taxonomy,
                'field' => 'slug',
                'terms' => $term->slug,
              )
            )
          );

          $posts = new WP_Query($args);

            if( $posts->have_posts() ):
                echo '<div class="ydelse-beskrivelse">';
                    echo '<h3>' . $term->name . '</h3>';
                    echo '<p>' . $term->description . '</p>';
                echo '</div>';
                echo '<div class="simple-archive flex-con g4">';
                    while( $posts->have_posts() ) : $posts->the_post();
                        echo '<div class="flex-item">';
                            echo '<article id="post-' . get_the_ID() . '" class="' . $post_class = implode( ' ', get_post_class() ) . '"">';
                                echo '<a href="' . get_the_permalink() . '" class="image-zoom">';
                                    if ( get_field('box_overskrift') ) {
                                        echo '<h4 class="post-loop-title">' . get_field('box_overskrift') . '</h4>';
                                    } else {
                                        the_title( '<h4 class="post-loop-title">', '</h4>');
                                    }
                                    if ( has_post_thumbnail() ) {
                                        echo '<div class="box-img">';
                                        the_post_thumbnail( 'small');
                                        echo '</div>';
                                    }
                                echo '</a>';
                                the_excerpt();
                                echo '<div class="more-link-con"><a href="' . get_permalink() . '" class="more-link">' . __( 'Læs mere', 'simpletheme') . '</a></div>';
                            echo '</article>';
                        echo '</div>';
                    endwhile;
                echo '</div>';
            endif;

        endforeach;
    endforeach;
    wp_reset_query();

}
}
// Loop hvis vi ikke benytter kategorier (type)

if ( ! function_exists ( 'ydelser_all' ) ) {
function ydelser_all() {

    $loop = new WP_Query( array(
        'post_type' => 'ydelse',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'asc',
    ) );
    if ( $loop->have_posts() ) {
        echo '<div class="simple-archive flex-con g4">';
        while ( $loop->have_posts() ) : $loop->the_post();
                echo '<div class="flex-item">';
                            echo '<article id="post-' . get_the_ID() . '" class="' . $post_class = implode( ' ', get_post_class() ) . '"">';
                                echo '<a href="' . get_the_permalink() . '" class="image-zoom">';
                                    if ( get_field('box_overskrift') ) {
                                        echo '<h4 class="post-loop-title">' . get_field('box_overskrift') . '</h4>';
                                    } else {
                                        the_title( '<h4 class="post-loop-title">', '</h4>');
                                    }
                                    if ( has_post_thumbnail() ) {
                                        echo '<div class="box-img">';
                                        the_post_thumbnail( 'small');
                                        echo '</div>';
                                    }
                                echo '</a>';
                                the_excerpt();
                                echo '<div class="more-link-con"><a href="' . get_permalink() . '" class="more-link">' . __( 'Læs mere', 'simpletheme') . '</a></div>';
                            echo '</article>';
                        echo '</div>';
        endwhile;
        echo '</div>';
        wp_reset_query();

 }

}
}