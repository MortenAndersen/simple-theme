<?php
// Option page
	switch (get_option('simpletheme-radio-menu')) {
		case '1':
			$menu_class = 'menu-default';
			break;
		case '2':
			$menu_class = 'menu-right';
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
<nav class="all-menu js-nav-toggle">
<?php wp_nav_menu( $main_nav ); ?>
<?php if ( is_active_sidebar( 'sidebar-infobar' ) || is_active_sidebar( 'sidebar-mobilemenu-widget' )  ) { ?>
<div class="mobile-info ipad-and-below">
<?php dynamic_sidebar( 'sidebar-infobar' ); ?>
<?php dynamic_sidebar( 'sidebar-mobilemenu-widget' ); ?>
</div>
<?php } ?>
</nav>
</div>
</div>
<?php endif; ?>