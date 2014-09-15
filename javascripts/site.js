
$( document ).ready(function() {
    
	$( ".avatar" ).click(function() {
		var path = 'images/';
		var objects = [
			path + 'tjerk-jippe-kakker.jpg',
			path + 'tjerk-jippe-baby.jpg',
			path + 'tjerk-jippe.jpg',
			path + 'tjerk-jippe-batman.jpg',
			path + 'tjerk-jippe-bane.jpg',
			path + 'tjerk-jippe-pirate.jpg'
		];

		shuffle(objects);
		$(this).attr('src', objects[0]);
	});

});

$(document).scroll(function () {
	
	var y = $(this).scrollTop() + $(window).height();
	var x = $(".skill-list").offset().top;
        
	if (y > (x - 250)) { $(".skill").removeClass("start-at-zero"); }
		else { $(".skill").addClass("start-at-zero"); }
	
});


// shuffle for header
function shuffle(o){ //v1.0
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
