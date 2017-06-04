var subject = ["football", "basketball", "ultimate frisbee", "volleyball", "tug o war"];
var searchQuery;

	$("#create-btn").on("click", function() {
		var userInput = $("#searchInput").val().trim();

		if (userInput == "") {
			alert("Type request in search box then press submit button to create new button")
		} else {
			$("#searchInput").val('');
			subject.push(userInput);
			drawButtons();

		  }
	});

	function drawButtons() {
		$("#btn-div").empty();

		for (var i = 0; i < subject.length; i++) {
			var button = $("<button>");
			button.addClass("btn btn-primary btn-view");
			button.attr("data-topic", subject[i]);
			button.text(subject[i]);
			$("#btn-div").append(button);
		}
	};

	$(document).on("click", ".btn-view", function() {
	var term = $(this).attr("data-topic");
	console.log(term);
	searchQuery = term.split(" ").join("+");
	populateGifs();
	console.log(searchQuery);

	});

	function populateGifs() {

		// var queryURL = "https://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC";
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url: queryURL, method: "GET"})
		.done(function(response){

			console.log(response);
			console.log(queryURL);

			$("#results").empty();

			var results = response.data;

			for (var i = 0; i < results.length; i++) {

		       	var imageUrl = results[i].images.fixed_height.url;
		        var fieldImage = $("<img>");
		       	fieldImage.attr("src", imageUrl);
		        fieldImage.attr("alt", );
		        $("#results").prepend(fieldImage);

	    	}

		});

	};

drawButtons();
