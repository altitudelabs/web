var Poller = window.massrel.Poller;

// Helper
var updateView = function(data) {
	var list = $("#list").empty();
	$.each(data, function(i, band) {
		var row = $('<div class="clearfix row"></div>').appendTo(list);
		$('<div class="name">' + band.name + '</div>').appendTo(row);
		$('<div class="count"><span class="number">' + band.count.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span> Mention' + (band.count > 1 ? 's' : '') + '</div>').appendTo(row);
		row.fadeIn();
	});
};

// Setup
var poller = new Poller({
	frequency: 15, // Every 15 seconds
	limit: 5 // Number of items to show
}, function() {
	updateView(poller.processData(poller.sortData(poller.getData())));
});

// Run
poller.start();
