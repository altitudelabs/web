$(document).ready(function()
{
	var poller = new window.massrel.Poller({frequency: 15}, leaderboard.getBand);
	poller.start();	
	
});

var leaderboard =  
{
	leaderboard_temp: null,
	leaderboard_id: "leaderboard",
	getBand: function(data)
	{
		if (this.leaderboard_temp == null)
		{
			//read from the template file
			$.get('leaderboard_temp.html', function(template)
			{
				leaderboard.leaderboard_temp = template;
				console.log('success');
				
				leaderboard.generateLeaderBoard(template, data);
			})
		}else
		{
			this.generateLeaderBoard(this.leaderboard_temp, data);
		}
		
	},
	
	generateLeaderBoard: function(template, data)
	{
		console.log(template);
		$('#leaderboard').children().fadeOut();
		$('#leaderboard').html('');
		var row;
		var band;
		for (var i =0; i<data.length; i++)
		{
			band = data[i];
			row = template;
			//console.log(band.name);
			//replace the parts in template with real data
			row = row.replace("{{band-name}}", band.name);
			row = row.replace("{{count}}", Number(band.count).toLocaleString('en'));
			//fade in effect			
			$(row).appendTo('#'+this.leaderboard_id).hide().fadeIn();
		}
	}
}