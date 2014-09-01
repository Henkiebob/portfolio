
$( document ).ready(function() {
    
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#radar").get(0).getContext("2d");
    var ctx_2 = $("#pie").get(0).getContext("2d");
    
    var options = [];
    
    var radarData = {
    labels: ["Programmeren", "Nadenken", "Onderzoeken", "Ontwerpen", "Fietsen", "Design Thinking", "Coderen", "Prutsen"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [70, 40, 20, 40, 30, 70, 40, 10]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [70, 30, 20, 40, 30, 70, 40, 10]
        }
    ]
};
    
    var pieData = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Ruby On Rails"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "PHP"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "CSS/LESS"
        }
        ,
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "jQuery"
        }
    ]
    var myRadarChart    = new Chart(ctx).Radar(radarData, options);
    var myDoughnutChart = new Chart(ctx_2).Doughnut(pieData, options);

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


  $( ".showcase_item" ).click(function() {
      
        var id = $(this).data("id");
        var url = "javascripts/json/project-"+id+".json";
    
      
        $.ajax({
            dataType: "json",
            url: url,
            success: function(data){
                appendBox(data);
            }
        });
      
//      $('.showcase_container').find('.info_box').addClass('active');
//      $(this).addClass('active');
  });

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
    
    $('.project_info').append(data[1]);
}
