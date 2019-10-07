<?php

function simpletheme_add_woocommerce_support() {
	add_theme_support( 'woocommerce', array(
		'thumbnail_image_width' => 150,
		'single_image_width'    => 300,
      'product_grid'          => array(
        'default_rows'    => 3,
        'min_rows'        => 2,
        'max_rows'        => 8,
        'default_columns' => 4,
        'min_columns'     => 2,
        'max_columns'     => 5,
       ),
	) );
}
add_action( 'after_setup_theme', 'simpletheme_add_woocommerce_support' );

/**
 * Change number of related products output
 */
function woo_related_products_limit() {
  global $product;

	$args['posts_per_page'] = 5;
	return $args;
}
add_filter( 'woocommerce_output_related_products_args', 'simpletheme_related_products_args' );
  function simpletheme_related_products_args( $args ) {
	$args['posts_per_page'] = 5; // 4 related products
	$args['columns'] = 5; // arranged in 2 columns
	return $args;
}


// Remove each style one by one
add_filter( 'woocommerce_enqueue_styles', 'jkx_dequeue_styles' );
function jkx_dequeue_styles( $enqueue_styles ) {
	unset( $enqueue_styles['woocommerce-general'] );	// Remove the gloss
	//unset( $enqueue_styles['woocommerce-layout'] );		// Remove the layout
	//unset( $enqueue_styles['woocommerce-smallscreen'] );	// Remove the smallscreen optimisation
	return $enqueue_styles;
}

// Remove count in sub categories
add_filter( 'woocommerce_subcategory_count_html', 'simple_hide_category_count' );
function simple_hide_category_count() {
// No count
}

/**
 * Show cart contents / total Ajax
 */
add_filter( 'woocommerce_add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment' );

function woocommerce_header_add_to_cart_fragment( $fragments ) {
	global $woocommerce;

	ob_start();

	?>
	<a class="cart-customlocation" href="<?php echo esc_url(wc_get_cart_url()); ?>" title="<?php _e('View your shopping cart', 'simpletheme'); ?>"><?php echo sprintf(_n('%d produkt', '%d produkter', $woocommerce->cart->cart_contents_count, 'simpletheme'), $woocommerce->cart->cart_contents_count);?> - <?php echo $woocommerce->cart->get_cart_total(); ?></a>
	<?php
	$fragments['a.cart-customlocation'] = ob_get_clean();
	return $fragments;
}

// Fjerner overskrift i description (h2)
add_filter('woocommerce_product_description_heading', '__return_empty_string');
// Fjerner overskrift i yderligere info (h2)
add_filter('woocommerce_product_additional_information_heading', '__return_empty_string');



/**
 * Antal produkter på oversigt
 */
add_filter('loop_shop_columns', 'loop_columns');
if (!function_exists('loop_columns')) {
	function loop_columns() {
		return 4;
	}
}

function simpletheme_woocommerce_catalog_orderby( $orderby ) {
    unset($orderby["rating"]);      //Remove rating option.
    return $orderby;
}
add_filter( "woocommerce_catalog_orderby", "simpletheme_woocommerce_catalog_orderby", 20 );