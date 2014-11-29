var UPDATE_EVERY = 15;
var NUMBER_OF_TOP_BRAND_DISPLAY = 5;

var nameElement = new Array(NUMBER_OF_TOP_BRAND_DISPLAY);
var countElement = new Array(NUMBER_OF_TOP_BRAND_DISPLAY);

var options = {
	frequency: UPDATE_EVERY,
	limit: NUMBER_OF_TOP_BRAND_DISPLAY
};
var poller = new window.massrel.Poller(options, update);

function init() {
	for (var i = 0; i < NUMBER_OF_TOP_BRAND_DISPLAY; i++) {
		nameElement[i] = document.getElementById("name" + (i + 1));
		countElement[i] = document.getElementById("count" + (i + 1));
	}
	poller.start();
}

function update(data) {
	for (var i = 0; i < NUMBER_OF_TOP_BRAND_DISPLAY; i++) {
		nameElement[i].innerHTML = data[i]["name"];
		countElement[i].innerHTML = data[i]["count"];
	}
}