<?php if ( is_active_sidebar( 'sidebar-top-container' ) || is_active_sidebar( 'sidebar-top-animate-bounceinup' )  ) { ?>
<div class="width-top">
<div class="l-wrap">
<?php dynamic_sidebar( 'sidebar-top-container' ); ?>
<?php get_template_part( 'template/sidebar/animate-bounceinup' ); ?>
</div>
</div>
<?php }?>