// Header

	$("header nav").height($("header a.logo").height());

// Hero
	
	$("#hero .wrapper").height($("#hero").height());

// Film

	var filmImageHeight = $("#films img").height();

	$("#films .meta").height(filmImageHeight);

// Case Study

	$("#case .image").height(
		$(this).siblings(".content").height()
	);

	$("#case section > *").matchHeight();

// jQuery Responsive

	$(document).ready(function() {
		checkSize();
    	$(window).resize(checkSize);
	});
	
	function checkSize(){
	    if($("header").css("background") == "white"){
	    	console.log("don't trigger me bro");
	    }
	}