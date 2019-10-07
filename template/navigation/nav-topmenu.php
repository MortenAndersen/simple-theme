<?php
if ( has_nav_menu( 'top-menu' ) ) :

	$main_nav = array(
		'theme_location' => 'top-menu',
		'container' =>  false,
	);


	echo '<nav aria-labelledby="topmenu-label" class="top-menu infobar-widget">';
	echo '<span class="screen-reader-text" id="topmenu-label">Top menu</span>';
		wp_nav_menu( $main_nav );
	echo '</nav>';

endif;
?>