<?php if ( is_active_sidebar( 'sidebar-important' ) || class_exists( 'WooCommerce' ) ) { ?>
<div class="important-con">
<?php dynamic_sidebar( 'sidebar-important' ); ?>
<?php
	if ( class_exists( 'WooCommerce' ) ) {
  	simpleTheme_small_cart();
	}
?>
</div>
<?php } ?>