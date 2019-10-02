<?php if ( is_active_sidebar( 'sidebar-infobar' ) || has_nav_menu( 'top-menu' ) ) { ?>
<div class="beyond-ipad background-4 background-info">
    <div class="l-wrap">
        <div class="m-info--bar">
        	<?php dynamic_sidebar( 'sidebar-infobar' ); ?>
        	<?php get_template_part( 'template/navigation/nav', 'topmenu' ); ?>
        </div>
    </div>
</div>
<?php } ?>