<?php if ( is_active_sidebar( 'sidebar-top-container' ) || is_active_sidebar( 'sidebar-top-animate-bounceinup' ) || is_active_sidebar( 'sidebar-top-banner' )  ) { ?>
	<div class="width-top">
		<?php dynamic_sidebar( 'sidebar-top-banner' ); ?>
	<?php if ( is_active_sidebar( 'sidebar-top-container' ) || is_active_sidebar( 'sidebar-top-animate-bounceinup' ) ) { ?>
		<div class="l-wrap">
		<?php dynamic_sidebar( 'sidebar-top-container' ); ?>
		<?php get_template_part( 'template/sidebar/animate-bounceinup' ); ?>
		</div>
	<?php }?>
	</div>
<?php }?>