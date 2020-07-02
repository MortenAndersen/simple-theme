<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php
	simpleTheme_the_post_thumbnail();
	the_title( '<h1>', '</h1>');

	if ( ! empty( get_the_term_list( $post->ID, 'reference-type') )) {
		echo '<div class="type-liste">';
		 echo get_the_term_list( $post->ID, 'reference-type', '', ', ', '' );
		echo '</div>';
	}

	the_content();
 endwhile;
echo '</article>';
endif;