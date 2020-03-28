
$(document).ready(function(){
	// Add one more paragraph
	$("#add-content").click(function(){
	  	$("#more-paragraph").append('<div class="form-group"><label for="chinese-text"><b>Chinese Text</b></label><textarea class="form-control" rows="3"></textarea required></div><div class="form-group"><label for="chinese-text"><b>English Text</b></label><textarea class="form-control" rows="3"></textarea required></div>'
	  	);
  	
  	});

	// Add Practice or Discussion

	$("#add-part2").click(function(){
	  	$("#more-paragraph").append('<div class="form-group"><label for="chinese-text"><b>Practice or Discussion</b></label><textarea class="form-control" rows="3"></textarea required></div>'
	  	);
  	
  	});

	// get json file

	$(function() {
		var people = [];

   		$.getJSON('template.json', function(data) {

	       $.each(data.person, function(i, f) {
	          var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
	           "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
	           $(tblRow).appendTo("#userdata tbody");
	     });

   	});

});


});


function create(){
	var url = "file:///Users/prokochou/Documents/great-job/content-template.html";
	window.location.assign(url);
}

