<?php if ( have_posts() ) { ?>
<div class="flex-con g5">
	<?php while ( have_posts() ) { the_post(); ?>
		<ddiv class="flex-item">
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php echo '<a href="' . get_the_permalink() . '">'; ?>
		<?php the_title( '<h2>', '</h2>'); ?>
		<?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'thumbnail'); }  ?>
		<?php the_excerpt(); ?>
		<?php echo '</a>'; ?>
		</article>
	</ddiv>

	<?php } ?>

<?php } ?>