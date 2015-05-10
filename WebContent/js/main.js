$(function() {
	
	$(".panel").css({"height":$(window).height()});
	var timer;

	$(window).resize(function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$(".panel").css({"height":$(window).height()});
		},40);
	});

	$.scrollify({
		section:".panel"
	});
	

	$(".scrollfunction").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});
	
	$(".scroll").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});
});