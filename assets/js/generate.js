// Add one more paragraph
$(document).ready(function(){
  $("#add-content").click(function(){
  	console.log('test');
  	$("#more-paragraph").append('<div class="form-group"><label for="chinese-text"><b>Chinese Text</b></label><textarea class="form-control" rows="3"></textarea required></div><div class="form-group"><label for="chinese-text"><b>English Text</b></label><textarea class="form-control" rows="3"></textarea required></div>'
  	);

  });
});

// plan-new.html
function create(){
	var url = "file:///Users/prokochou/Documents/great-job/content-template.html";
	window.location.assign(url);
}

