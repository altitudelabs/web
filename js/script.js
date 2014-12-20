(function($) {
   $(function() { // DOM is ready
		// Define constant & variable
		var FREQUENCY = 15,
			LIMIT = 5,
			HTMLMENTION = '<div class=\"mentions\">Mentions</div>',
			content = '',
			jqList = $('#leaderboard-list'),
			config = {
				frequency: FREQUENCY,
				limit: LIMIT
			};
		var anim = function(content){
			jqList.fadeOut(500, function() { 
				jqList.html("").append(content).fadeIn(500);
			});
		};
		var callback = function(res){
			content = '';
			res.forEach(function(e){
				content += '<li><div class=\"name\">'+e.name+'</div>'+'<div class=\"count\">'+e.count.toLocaleString()+'</div>'+HTMLMENTION+'</li>'
			});
			anim(content);
		};
		
		// Define customized poller
		var myPoller = new window.massrel.Poller(config,callback);
		myPoller.start();
   });
}(window.jQuery));
