<?php /*
		Template Name: Contact Page 2
		*/
		?>
<?php
get_header();

  $kontaktformular = get_field('kontaktformular');
  $personer = get_field('personer');

echo '<div id="content" class="background background-main">';
?>

  <div class="l-wrap l-main--content simple-grid-con space-between">
    <div class="simple-grid-item-main contact-con">
      <?php get_template_part( 'template/page/page', 'loop' ); ?>
    </div>
    <aside class="aside-right simple-grid-item-aside">
      <?php echo do_shortcode($kontaktformular);?>
      <?php get_template_part( 'template/page/aside', 'right' ); ?>
      <?php simpleTheme_download(); ?>
    </aside>
  </div>

</div>

<?php
if( get_field('personer') ) {
  echo '<div class="background background-personer">';
    echo '<div class="l-wrap l-personer">';
      echo do_shortcode($personer);
    echo '</div>';
  echo '</div>';
}

if( get_field('google_maps') ) {
  echo '<div class="googlemap-con">';
    the_field( 'google_maps' );
  echo '</div>';
}

 get_footer();