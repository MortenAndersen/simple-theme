<?php get_header(); ?>
<div id="content" class="background background-main">
  <div class="l-wrap l-main--content <?php simpleTheme_wrap_class(); ?>">
    <div class="main <?php simpleTheme_main_class(); ?>">
      <?php get_template_part( 'template/page/page', 'loop' ); ?>
    </div>
  <?php if ( is_active_sidebar( 'sidebar-aside-left-single' ) ) { ?>
    <aside class="aside-left simple-grid-item-aside<?php simpleTheme_aside_class(); ?> order-1">
      <?php get_template_part( 'template/page/aside', 'left' ); ?>
    </aside>
  <?php } ?>
  <?php if ( is_active_sidebar( 'sidebar-aside-right-single' ) ) { ?>
    <aside class="aside-right simple-grid-item-aside<?php simpleTheme_aside_class(); ?> order-3">
      <?php get_template_part( 'template/page/aside', 'right' ); ?>
    </aside>
  <?php } ?>
  </div>
</div>
<?php get_footer(); ?>