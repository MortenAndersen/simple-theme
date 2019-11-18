<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width">
<?php wp_head(); ?>
<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" />
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentynineteen' ); ?></a>




<?php
// Option page
	switch (get_option('simpletheme-radio-menu')) {
		case '1':
		case '2': ?>

<header role="banner">
<?php get_template_part( 'template/sidebar/info-bar' ); ?>
<?php get_template_part( 'template/header/site-title' ); ?>
</header>
<?php get_template_part( 'template/navigation/nav', 'mainmenu' ); ?>
<?php get_template_part( 'template/sidebar/top-container' ); ?>


		<?php	break;
		case '3': ?>
<?php get_template_part( 'template/sidebar/info-bar' ); ?>
<header role="banner">
	<div class="header-logo-menu">
<div class="l-wrap logo__menu">
<?php get_template_part( 'template/header/site-title' ); ?>
<?php get_template_part( 'template/navigation/nav', 'mainmenu' ); ?>
</div>
</div>
</header>
<?php get_template_part( 'template/sidebar/top-container' ); ?>
<?php			break;
	}
?>