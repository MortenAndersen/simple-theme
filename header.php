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
<?php get_template_part( 'template/sidebar/info-bar' ); ?>
<?php get_template_part( 'template/header/site-title' ); ?>
<?php get_template_part( 'template/navigation/nav', 'menu' ); ?>
<?php get_template_part( 'template/sidebar/top-container' ); ?>