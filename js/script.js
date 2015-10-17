var UPDATE_TIME_INTERVAL = 15;
var NUMBER_OF_BANDS_SHOWN = 5;

$(document).ready( function() {
	var options = {
		frequency: UPDATE_TIME_INTERVAL,
		limit: NUMBER_OF_BANDS_SHOWN
	};

	poller = new window.massrel.Poller(options, function displayData(bands) {
		$(".band-list tr").remove();

		bands.forEach(function(band) {
			$('.band-list').append("<tr>\
				<td class='band-name'>" + band.name + "</td>\
				<td class='band-mentions'>\
				<span class='band-mention-num'>" + band.count.toString() + "</span>\
				Mentions</td></tr>");
		});

		$('.band-name').delay(14200).fadeOut(800);
		$('.band-mentions').delay(14200).fadeOut(800);

	});

	poller.start();
});



