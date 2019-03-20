<?php
function simpletheme_widgets_init() {

	// Sidebar
	register_sidebar(
		array(
			'name'          => __( 'Infobar', 'simpletheme' ),
			'id'            => 'sidebar-infobar',
			'description'   => __( 'Add widgets here to appear in your InfoBar and in the mobile-menu-container.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget widget--small--txt infobar-widget widget-left">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title title-left">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Top container', 'simpletheme' ),
			'id'            => 'sidebar-top-container',
			'description'   => __( 'Add widgets here to appear in your Top Container.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget top-container-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Pre footer', 'simpletheme' ),
			'id'            => 'sidebar-pre-footer',
			'description'   => __( 'Add widgets here to appear in your Pre Footer.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget pre-footer-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Footer', 'simpletheme' ),
			'id'            => 'sidebar-footer',
			'description'   => __( 'Add widgets here to appear in your footer.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget widget--small--txt footer-widget simple-grid-item">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title title-high">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Important', 'simpletheme' ),
			'id'            => 'sidebar-important',
			'description'   => __( 'Add widgets here to appear in your Important area.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget important-widget widget--small--txt">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-important">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Aside left (page)', 'simpletheme' ),
			'id'            => 'sidebar-aside-left',
			'description'   => __( 'Add widgets here to appear in your left aside on pages.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget aside-widget aside-left-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-aside">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Aside right (page)', 'simpletheme' ),
			'id'            => 'sidebar-aside-right',
			'description'   => __( 'Add widgets here to appear in your right aside on pages.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget aside-widget aside-right-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-aside">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Aside left (single)', 'simpletheme' ),
			'id'            => 'sidebar-aside-left-single',
			'description'   => __( 'Add widgets here to appear in your left aside on posts.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget aside-widget aside-left-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-aside">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Aside right (single)', 'simpletheme' ),
			'id'            => 'sidebar-aside-right-single',
			'description'   => __( 'Add widgets here to appear in your right aside on posts.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget aside-widget aside-right-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-aside">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Frontpage grid (only frontpage)', 'simpletheme' ),
			'id'            => 'sidebar-frontpage-grid',
			'description'   => __( 'Add widgets here to appear in a grid on the frontpage.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget frontpage-grid-widget flex-item">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-frontpage-grid">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Mobilemenu widget', 'simpletheme' ),
			'id'            => 'sidebar-mobilemenu-widget',
			'description'   => __( 'Add widgets here to appear ONLY in your mobile-menu-container. (not the menu!)', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget widget--small--txt infobar-widget widget-left">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title title-left">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Top container bounceInUp', 'simpletheme' ),
			'id'            => 'sidebar-top-animate-bounceinup',
			'description'   => __( 'Add widgets here to appear in your Animate bounceInUp Top Container.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget top-container-widget animate animate-bounceInUp">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Top container banner', 'simpletheme' ),
			'id'            => 'sidebar-top-banner',
			'description'   => __( 'Add gallery here to appear in your banner.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget top-container-widget banner">',
			'after_widget'  => '</div>',
			'before_title'  => '<div class="widget-title screen-reader-text">',
			'after_title'   => '</div>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Top container banner - aside', 'simpletheme' ),
			'id'            => 'top-banner-aside',
			'description'   => __( 'Add text to gallery.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget top-container-widget banner-aside">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Aside left (woo cat)', 'simpletheme' ),
			'id'            => 'sidebar-aside-left-woo-cat',
			'description'   => __( 'Add widgets here to appear in your left aside on Woo Cat.', 'simpletheme' ),
			'before_widget' => '<div id="%1$s" class="widget aside-widget aside-left-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widget-title widget-title-aside">',
			'after_title'   => '</h5>',
		)
	);

}

add_action( 'widgets_init', 'simpletheme_widgets_init' );

