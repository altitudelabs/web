
function callback_action(inData){
    $( "#ranking" ).fadeOut( "fast" );
    for(var i = 0;i<=5;i++){
        var count = Number(inData[i]["count"]).toLocaleString('en');    //Add comma to numbers
        $("#brand"+i).text(inData[i]["name"]);
        $("#mention"+i).text(count);
    }
    $( "#ranking" ).fadeIn( "fast" );

}

$(document).ready(function() {

    var parameters = {
        frequency:15,			//Frequency to update the rank
        limit:10					//Limit to ? brands
    };

    var poller = new window.massrel.Poller(parameters, callback_action);

    poller.start();
});
