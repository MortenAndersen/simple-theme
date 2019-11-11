<?php /*
		Template Name: Contact
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
  <?php the_field('google_map'); ?>
  <?php the_field('kontakt_sidefod'); ?>
</div>
<?php get_footer(); ?>