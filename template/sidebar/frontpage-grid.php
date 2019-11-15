<?php if ( is_front_page() && is_active_sidebar( 'sidebar-frontpage-grid' ) ) { ?>
<div class="frontpage-grid l-main--content l-wrap flex-con g4">
<?php dynamic_sidebar( 'sidebar-frontpage-grid' ); ?>
</div>
<?php } ?>