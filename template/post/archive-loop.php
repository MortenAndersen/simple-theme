<?php if ( have_posts() ) { ?>

	<?php if ( is_category() ){ ?>
		<h1><?php single_cat_title(); ?></h1>
		<?php echo category_description(); ?>
	<?php } ?>

<div class="simple-archive flex-con g4">
	<?php while ( have_posts() ) { the_post(); ?>
		<div class="flex-item">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php
				echo '<a href="' . get_the_permalink() . '" class="image-zoom">';
					the_title( '<h4 class="post-loop-title">', '</h4>');
					if ( has_post_thumbnail() ) {
						echo '<div class="box-img">';
						the_post_thumbnail( 'small');
						echo '</div>';
					}
			 	echo '</a>';
			 	simpleTheme_date();
			 	the_excerpt();
			 	echo '<div class="more-link-con"><a href="' . get_permalink() . '" class="more-link">' . __( 'Læs mere', 'simpletheme') . '</a></div>';
			?>
			</article>
		</div>
	<?php } ?>
</div>
<?php } ?>