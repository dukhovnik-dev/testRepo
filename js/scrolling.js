
/*
	SMOTH SCROLLING
*/
$(document).ready(function() {
	$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		if( id != '' && id != '#' ){
			var offset = 60;
			var target = $(id).offset().top - offset;
			$('html, body').animate({scrollTop:target}, 500);
			event.preventDefault();
		}else{
			event.preventDefault();
			return false;
		}
	});
});
