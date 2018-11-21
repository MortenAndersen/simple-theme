<?php /*
		Template Name: Aside left and right
		*/
		?>
<?php get_header(); ?>
<div class="background background-main">
  <div class="l-wrap l-main--content simple-grid-con space-between">
    <div class="main simple-grid-item-main-small order-2">
      <?php get_template_part( 'template/page/page', 'loop' ); ?>
    </div>
    <aside class="aside-left simple-grid-item-aside-small order-1">
      <?php get_template_part( 'template/page/aside', 'left' ); ?>
    </aside>
    <aside class="aside-right simple-grid-item-aside-small order-3">
      <?php get_template_part( 'template/page/aside', 'right' ); ?>
    </aside>
  </div>
</div>
<?php get_footer(); ?>