<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php the_title( '<h1>', '</h1>'); ?>
<?php simpleTheme_the_post_thumbnail(); ?>
<?php the_content(); ?>
<?php simpleTheme_go_back(); ?>
<?php if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;
?>
<?php endwhile; ?>

</article>
<?php endif; ?>