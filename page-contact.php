<?php /*
		Template Name: Contact
		*/
		?>
<?php
get_header();

  $kontaktformular = get_field('kontaktformular');
  $personer = get_field('personer');

echo '<div id="content" class="background background-main">';
  if( get_field('google_maps') ) {
    echo '<div class="googlemap-con">';
      the_field( 'google_maps' );
    echo '</div>';
  }
?>

  <div class="l-wrap l-main--content simple-grid-con space-between">
    <div class="main simple-grid-item-main contact-con">
      <?php get_template_part( 'template/page/page', 'loop' ); ?>
    </div>
    <aside class="aside-right simple-grid-item-aside order-1">
      <?php echo do_shortcode($kontaktformular);?>
      <?php get_template_part( 'template/page/aside', 'right' ); ?>
      <?php simpleTheme_download(); ?>
    </aside>
  </div>

</div>

<?php  if( get_field('personer') ) { ?>
<div class="background background-personer">
  <div class="l-wrap l-personer">
    <?php echo do_shortcode($personer);?>
  </div>
</div>
<?php } ?>

<?php get_footer(); ?>