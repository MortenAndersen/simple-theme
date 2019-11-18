<?php if ( is_active_sidebar( 'sidebar-infobar' ) || has_nav_menu( 'top-menu' ) || get_option('simpletheme-mail') || get_option('simpletheme-phone') ) { ?>
<div class="beyond-ipad background-4 background-info">
    <div class="l-wrap">
        <div class="m-info--bar">
        	<?php dynamic_sidebar( 'sidebar-infobar' ); ?>
        	<?php simpleTheme_mail(); ?>
        	<?php simpleTheme_phone(); ?>
        	<?php get_template_part( 'template/navigation/nav', 'topmenu' ); ?>
        </div>
    </div>
</div>
<?php } ?>