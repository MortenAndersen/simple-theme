<?php if ( is_active_sidebar( 'sidebar-top-container' ) || is_active_sidebar( 'sidebar-top-animate-bounceinup' ) || is_active_sidebar( 'sidebar-top-banner' ) || is_active_sidebar( 'sidebar-frontpage-grid' )  ) {



 		if (is_active_sidebar( 'top-banner-aside' )) {
 			echo '<div class="width-top">';
	 			echo '<div class="banner-img-aside">';
					echo '<div class="top-banner-left">';
						 dynamic_sidebar( 'sidebar-top-banner' );
					echo '</div>';
					echo '<div class="top-banner-aside">';
						 dynamic_sidebar( 'top-banner-aside' );
					echo '</div>';
				echo '</div>';
			echo '</div>';
		}
		else {
			echo '<div class="width-top">';
				dynamic_sidebar( 'sidebar-top-banner' );
			echo '</div>';
		}

		if ( is_active_sidebar( 'sidebar-top-container' ) || is_active_sidebar( 'sidebar-top-animate-bounceinup' ) || is_active_sidebar( 'sidebar-frontpage-grid' ) ) {
				echo '<div class="width-top">';
					dynamic_sidebar( 'sidebar-top-container' );
				echo '</div>';
				echo '<div class="width-top">';
					get_template_part( 'template/sidebar/animate-bounceinup' );
				echo '</div>';
				echo '<div class="width-top front-grid-con">';
					get_template_part( 'template/sidebar/frontpage-grid' );
				echo '</div>';
			}


}