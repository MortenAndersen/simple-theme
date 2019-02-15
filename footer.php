<?php get_template_part( 'template/sidebar/pre', 'footer' ); ?>
<?php get_template_part( 'sidebar' ); ?>
<?php simpleTheme_copyright(); ?>
<?php get_template_part( 'template/navigation/nav', 'icon' ); ?>
<?php wp_footer(); ?>

<script>
window.onscroll = function() {stickyNavFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-navbar")
  } else {
    navbar.classList.remove("sticky-navbar");
  }
}
</script>

<?php if ( is_active_sidebar( 'sidebar-top-animate-bounceinup' ) ) { ?>
<script>
	(function ($) {
		$(document).ready(function () {
			var random = Math.floor(Math.random() * $('.animate-bounceInUp').length);
			$('.animate-bounceInUp').hide().eq(random).show();
		});
	}(jQuery));
</script>
<?php } ?>
<?php simpleTheme_acf_background_image(); ?>
<?php simpleTheme_html_body_footer(); ?>
</body>
</html>