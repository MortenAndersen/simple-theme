<?php
	if ( is_active_sidebar( 'sidebar-top-container' ) ) {
		echo '<div class="width-top top-normal">';
			dynamic_sidebar( 'sidebar-top-container' );
		echo '</div>';
	}

		if ( is_active_sidebar( 'sidebar-top-banner' ) ) {
		echo '<div class="width-top top-banner">';
			dynamic_sidebar( 'sidebar-top-banner' );
		echo '</div>';
	}

	if ( is_active_sidebar( 'sidebar-frontpage-grid' ) ) {
		echo '<div class="width-top front-grid-con">';
			get_template_part( 'template/sidebar/frontpage-grid' );
		echo '</div>';
	}