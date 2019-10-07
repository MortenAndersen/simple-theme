<?php
if ( has_nav_menu( 'footer-menu' ) ) :

	$main_nav = array(
		'theme_location' => 'footer-menu',
		'container' =>  false,
	);

	echo '<div class="widget footer-widget">';
		echo '<nav aria-labelledby="footermenu-label">';
			echo '<span class="screen-reader-text" id="footermenu-label">Footer menu</span>';
				wp_nav_menu( $main_nav );
		echo '</nav>';
	echo '</div>';

endif;
?>