<?php get_header(); ?>

	<div id="content" class="background background-main">
	  <div class="l-wrap l-main--content simple-grid-con space-between">
	    <div class="main woo-main simple-grid-item-main order-2">
	      <?php woocommerce_content(); ?>
	    </div>
	    <aside class="aside-left simple-grid-item-aside order-1 no-phone">
	    	<?php get_template_part( 'template/sidebar/aside-left-woo-cat' ); ?>
	    </aside>
	  </div>
	</div>

<?php get_footer(); ?>