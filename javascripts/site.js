
$( document ).ready(function() {

	// read more click
	$( ".read_more" ).click(function() {
		$(this).hide();
	
		$(".bio").find(".readmore" ).addClass("readmore_active");
	});

	$( ".logo_bubble" ).click(function() {
		$(this).addClass('active');
		$(this).next().show();
	});
	
});