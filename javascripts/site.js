
$( document ).ready(function() {
    
//    // Get context with jQuery - using jQuery's .get() method.
//    //var ctx = $("#radar").get(0).getContext("2d");
//    var ctx_2 = $("#pie").get(0).getContext("2d");
//    
//    var options = [{
//		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"	
//	}];
//    
////    var radarData = {
////    labels: ["Programmeren", "Nadenken", "Onderzoeken", "Ontwerpen", "Fietsen", "Design Thinking", "Coderen", "Prutsen"],
////    datasets: [
////        {
////            label: "My First dataset",
////            fillColor: "rgba(220,220,220,0.2)",
////            strokeColor: "rgba(220,220,220,1)",
////            pointColor: "rgba(220,220,220,1)",
////            pointStrokeColor: "#fff",
////            pointHighlightFill: "#fff",
////            pointHighlightStroke: "rgba(220,220,220,1)",
////            data: [70, 40, 20, 40, 30, 70, 40, 10]
////        },
////        {
////            label: "My Second dataset",
////            fillColor: "rgba(151,187,205,0.2)",
////            strokeColor: "rgba(151,187,205,1)",
////            pointColor: "rgba(151,187,205,1)",
////            pointStrokeColor: "#fff",
////            pointHighlightFill: "#fff",
////            pointHighlightStroke: "rgba(151,187,205,1)",
////            data: [70, 30, 20, 40, 30, 70, 40, 10]
////        }
////    ]
////};
//    
//    var pieData = [
//        {
//            value: 60,
//            color:"#F7464A",
//            highlight: "#FF5A5E",
//            label: "Ruby On Rails (MVC)"
//        },
//        {
//            value: 80,
//            color: "#8892bf",
//            highlight: "#949fd1",
//            label: "PHP(OOP)"
//        },
//        {
//            value: 100,
//            color: "#FDB45C",
//            highlight: "#FFC870",
//            label: "CSS/LESS"
//        }
//        ,
//        {
//            value: 90,
//            color: "#2ab300",
//            highlight: "#2ab300",
//            label: "Front-end Javascript (jQuery, Zepto, Rafael)"
//        }
//		,
//        {
//            value: 30,
//            color: "#303030",
//            highlight: "#303030",
//            label: "Serves side Javascript NodeJS"
//        }
//    ]
//	
//	
//   // var myRadarChart    = new Chart(ctx).Radar(radarData, options);
//    var myDoughnutChart = new Chart(ctx_2).Doughnut(pieData, options);
//	
//	var legend = myDoughnutChart.generateLegend();
//	
	//$('#legend').html(legend);

	// read more click
	$( ".read_more" ).click(function() {
		$(this).hide();

		$(".bio").find(".readmore" ).addClass("readmore_active");
	});

	$( ".logo_bubble" ).click(function() {
		$(this).addClass('active');
		$(this).next().show();
	});

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


//  $( ".showcase_item" ).click(function() {
//      	
//	  	$('.showcase_item.active').removeClass('active');
//	  
//        var id = $(this).data("id");
//        var url = "javascripts/json/project-"+id+".json";
//	  
//
//	  	$(this).addClass('active');
//    
//      
//        $.ajax({
//            dataType: "json",
//            url: url,
//            success: function(data){
//                appendBox(data);
//            }
//        });
//      
////      $('.showcase_container').find('.info_box').addClass('active');
////      $(this).addClass('active');
//  });

});


$(document).scroll(function () {
	var y = $(this).scrollTop();
	var x = $(".skill-list").position();

	if (y > (x.top - 50)) { // -50 so things don't overlap
		$(".skill").addClass(
			"animation");
	}
	else {
		$(".skill").removeClass(
			"animation");
	
	}
});


// shuffle for header
function shuffle(o){ //v1.0
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};


function appendBox(data){
    $('.project_info').show();
    $('html, body').animate({
        scrollTop: $(".project_info").offset().top
    }, 2000);
    
	//alert(data['title']);
    $('.project_info h2').html(data['title']);
	$('.project_info p').html(data['text']);
	//$('.project_info img').src(data['screenshot']);
	

}
