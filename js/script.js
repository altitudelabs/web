// Innitialize vars
var container = document.getElementById("container1");

// Set content to the center of the window
window.onload = function(){
	resize();
}

window.onresize = resize;

function resize(){
	var width = window.innerWidth;
	container.style.width = width + "px";
	var top = (window.innerHeight - container.offsetHeight)/2;
	var left = (window.innerWidth - container.offsetWidth)/2;
	container.style.top = top + "px";
	container.style.left = left + "px";
}

// Refresh the leaderboard
$(document).ready( function() {
	
	var options = {
		frequency: 15,
		limit: 5
	};

	poller = new window.massrel.Poller(options, function callback(result) {
		$("#leaderboard tr").remove();
		
		result.forEach(function(band) {
			// Numerical processing
			var count_number = "";
			if (band.count >= 1000){
				var thousand = Math.floor(band.count/1000);
				var hundred = band.count % 1000;
				if (hundred < 10){
					hundred = "00"+hundred;
				}else if (hundred < 100){
					hundred = "0"+hundred;
				}
				count_number = thousand+","+hundred;
			}else{
				count_number = band.count.toString();
			}
			// Update table content
			$('#leaderboard').append("\
				<tr>\
					<td class='bandName'>" + band.name + "</td>\
					<td class='bandCount'><span class='countNumber'>" + count_number + "</span>	Mentions</td>\
				</tr>");
		});
		
		// Refresh animation at every 15s
		$('#leaderboard td').delay(14200).fadeOut("slow");
	});
	
	// Start poller
	poller.start();
});