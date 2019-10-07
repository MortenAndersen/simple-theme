<?php if ( is_active_sidebar( 'sidebar-footer' ) || has_nav_menu( 'footer-menu' ) ) { ?>
<div class="background background-footer">
    <div class="l-wrap">
        <footer class="page-footer l-footer--content simple-grid-con" role="contentinfo">
        	<?php dynamic_sidebar( 'sidebar-footer' ); ?>
        	<?php get_template_part( 'template/navigation/nav', 'footermenu' ); ?>
    </div>
</div>
<?php } ?>