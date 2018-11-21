<?php if ( is_active_sidebar( 'sidebar-footer' ) ) { ?>
<div class="background background-footer">
    <div class="l-wrap">
        <footer class="page-footer l-footer--content simple-grid-con">
        	<?php dynamic_sidebar( 'sidebar-footer' ); ?>
    </div>
</div>
<?php } ?>