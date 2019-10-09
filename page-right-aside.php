<?php /*
		Template Name: Aside right
		*/
		?>
<?php get_header(); ?>
<div id="content" class="background background-main">
  <div class="l-wrap l-main--content simple-grid-con space-between">
    <div class="main simple-grid-item-main">
      <?php get_template_part( 'template/page/page', 'loop' ); ?>
    </div>
    <aside class="aside-right simple-grid-item-aside order-1">
      <?php get_template_part( 'template/page/aside', 'right' ); ?>
      <?php simpleTheme_download(); ?>
    </aside>
  </div>
</div>
<?php get_footer(); ?>