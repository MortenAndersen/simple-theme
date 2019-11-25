<?php
// Option page
	switch (get_option('simpletheme-radio-menu')) {
		case '1':
			$menu_class = 'menu-default';
			$menu_type = 'width-menu';
			break;
		case '2':
			$menu_class = 'menu-right';
			$menu_type = 'width-menu';
			break;
		case '3':
			$menu_class = 'menu-right logo-left';
			$menu_type = 'small-menu';
			break;
	}
?>


<?php if ( has_nav_menu( 'main-menu' ) ) : ?>
<?php
	$main_nav = array(
		'theme_location' => 'main-menu',
		'container' =>  false,
	);
?>
<div id="navbar" class="menu-con background-2 <?php echo $menu_class ?>">
<div class="l-wrap l-menu--content">
<nav aria-labelledby="hovedmenu-label" class="all-menu js-nav-toggle <?php echo $menu_type ?>">
	<span class="screen-reader-text" id="hovedmenu-label">Hovedmenu</span>
<?php wp_nav_menu( $main_nav ); ?>
<?php if ( is_active_sidebar( 'sidebar-infobar' ) || is_active_sidebar( 'sidebar-mobilemenu-widget' )  ) { ?>
<div class="mobile-shop-menu ipad-and-below">
<?php dynamic_sidebar( 'sidebar-mobilemenu-shop-widget' ); ?>
</div>
<div class="mobile-info ipad-and-below">
<?php dynamic_sidebar( 'sidebar-infobar' ); ?>
<?php dynamic_sidebar( 'sidebar-mobilemenu-widget' ); ?>
</div>


<?php } ?>
</nav>
</div>
</div>
<?php endif; ?>