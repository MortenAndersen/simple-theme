<?php get_header(); ?>
<div id="content" class="background background-main">
    <div class="l-wrap l-main--content">
        <div class="main">

        	<?php get_template_part( 'template/page/page', 'loop' ); ?>
					<?php wp_reset_postdata(); // skal nok IKKE bruges!!! ?>

<?php // loop alle ydelser

$post_type = 'ydelse';
$taxonomies = get_object_taxonomies( array( 'post_type' => $post_type ) );

foreach( $taxonomies as $taxonomy ) :

   $terms = get_terms( $taxonomy );

    foreach( $terms as $term ) :

      $args = array(
        'post_type' => $post_type,
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'asc',
        'tax_query' => array(
          array(
            'taxonomy' => $taxonomy,
            'field' => 'slug',
            'terms' => $term->slug,
          )
        )
      );

      $posts = new WP_Query($args);

        if( $posts->have_posts() ):

        	echo '<div class="ydelse-beskrivelse">';
        		echo '<h3>' . $term->name . '</h3>';
        		echo '<p>' . $term->description . '</p>';
        	echo '</div>';

        	echo '<div class="simple-archive flex-con g4">';
        		while( $posts->have_posts() ) : $posts->the_post();

              echo '<div class="flex-item">';
								echo '<article id="post-' . get_the_ID() . '" class="' . $post_class = implode( ' ', get_post_class() ) . '"">';
									echo '<a href="' . get_the_permalink() . '" class="image-zoom">';
										the_title( '<h4 class="post-loop-title">', '</h4>');
											if ( has_post_thumbnail() ) {
												echo '<div class="box-img">';
												the_post_thumbnail( 'small');
												echo '</div>';
											}
				 					echo '</a>';
				 					the_excerpt();
				 					echo '<div class="more-link-con"><a href="' . get_permalink() . '" class="more-link">' . __( 'Læs mere', 'simpletheme') . '</a></div>';
								echo '</article>';
							echo '</div>';

        		endwhile;
      		echo '</div>';
      	endif;

		endforeach;

endforeach;

// end loop med ydelser
?>



        </div>
    </div>
</div>
<?php get_footer(); ?>