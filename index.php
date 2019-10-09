<?php get_header(); ?>
<div id="content" class="background background-main">
    <div class="l-wrap l-main--content">
        <div class="main">
        	<h1><?php post_type_archive_title(); ?></h1>
        	<?php get_template_part( 'template/post/archive', 'loop' ); ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>