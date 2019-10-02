<?php get_header(); ?>

<?php if(is_product_category() || is_shop() ) { ?>

	<div class="background background-main">
	  <div class="l-wrap l-main--content simple-grid-con space-between">
	    <div class="main woo-main simple-grid-item-main order-2">
	      <?php woocommerce_content(); ?>
	    </div>
	    <aside class="aside-left simple-grid-item-aside order-1">
	    	<?php get_template_part( 'template/sidebar/aside-left-woo-cat' ); ?>
	    </aside>
	  </div>
	</div>

<?php }  else { ?>

	<div class="background background-main">
	    <div class="l-wrap l-main--content">
	        <div class="main woo-main">
	        	<?php woocommerce_content(); ?>
	        </div>
	    </div>
	</div>

<?php } ?>

<?php get_footer(); ?>