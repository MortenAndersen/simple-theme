<?php if ( have_posts() ) { ?>
	<h1><?php single_cat_title(); ?></h1>
	<?php echo category_description(); ?>
<div class="simple-archive flex-con g4">
	<?php while ( have_posts() ) { the_post(); ?>
		<div class="flex-item">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php echo '<a href="' . get_the_permalink() . '">'; ?>
			<?php the_title( '<h2>', '</h2>'); ?>
			<?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'small'); }  ?>
			<?php simpleTheme_date(); ?>
			<?php the_excerpt(); ?>
			<?php echo '</a>'; ?>
			</article>
		</div>
	<?php } ?>
</div>
<?php } ?>