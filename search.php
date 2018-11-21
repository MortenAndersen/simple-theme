<?php get_header(); ?>
<div class="background background-main">
    <div class="l-wrap l-main--content">
        <div class="main">

        <?php if ( have_posts() ) : ?>
					<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'simpletheme' ), '<span>"' . get_search_query() . '"</span>' ); ?></h1>
				<?php else : ?>
					<h1 class="page-title"><?php _e( 'Nothing Found', 'simpletheme' ); ?></h1>
				<?php endif; ?>

				<?php simpleTheme_search_results(); ?>

        </div>
    </div>
</div>
<?php get_footer(); ?>