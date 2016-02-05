var poller = new massrel.Poller({ 'limit': 5, 'frequency': 15}, processData);
function processData (data) {
	console.log(data);
	$(".row div").fadeOut("slow", function () {
		for (var i = 0; data[i]; i++)
		{
			$("#band"+i).html(data[i]["name"]);
			$("#number"+i).html(data[i]["count"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		}
	});
	$(".row div").fadeIn("slow");
}
poller.start();