var isDebug = false;
var containerId = '#listContainer';
function consoleLog(message) {
    //This function is used to write to console, it is wrapped because in Internet Explorer, window.console does not exist until Developer Toolbar is opened
    //and we can also set isDebug to false to disable writing to conolse until overwritten in the console tool
    if ((window.console) && (isDebug)) {
        console.log(message);
    }
};

function renderData(jsonData) {
    //fadeOut the container, while the effect completed, append the items into the container as hidden items and then call to fadeIn the container to make it visible again
    $(containerId).fadeOut(400, function () { $.each(jsonData, renderItem); }).html('').fadeIn();
};

function renderItem(i, item) {
    consoleLog(item.name + item.count);
    //prepare the html string of the item and append it to the container
    var itemString ='<div class="listItem">' +
                    '<span class="bandName">' +  item.name + '</span>' +
                    '<span class="numberOfMentions"><b>' + item.count + '</b>Mentions</span>' +
                    '</div>';
    $(itemString).appendTo(containerId).fadeIn();
};

function setPollerStart() {
    var options = {
        frequency: 15, //frequency of the setInterval, will be multipled by 1000 to make it as seconds
        limit: 5 //number of items to get from the API
    };

    if (window.massrel) {
        var p = new window.massrel.Poller(options, renderData); //pass the funcion renderData as the callback parameter to the Poller
        p.start();
    }
};

$(document).ready(function () {
    setPollerStart();
});