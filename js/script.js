//Extract classes
var keytags = document.getElementsByClassName("key");
var detailtags = document.getElementsByClassName("detail");

//Funtion to add comma to mentions
function addcomma(num){
	var str = String(num);
	var result="";
	for(var i=0; i<str.length; i++){
		result+=str[str.length-1-i];
		if(i%2 == 0 && i>1){
			result+=",";
		}
	}
	//Reverse
	var resultrev="";
	for(var i=result.length-1; i>=0; i--){
		resultrev+=result[i];
	}
	return resultrev;
}

//Create poll variable with options
var poll = new window.massrel.Poller({frequency: 15, limit: 5}, function(result){
	//FadeOut animation
	$('.subcontainer').fadeOut('slow', function(){
		//Replace class contents
		for(var i=0; i<5; i++){
			keytags[i].innerHTML = result[i].name;
			detailtags[i].innerHTML = "<num>" + addcomma(result[i].count) + "</num>" + " Mentions";
		}
		//FadeIn animation
		$('.subcontainer').fadeIn('slow');
	});
}).start();
