// creating an instance of Poller with the callback insertBands

bandPoller = new window.massrel.Poller({frequency: 15}, insertBands);

bandPoller.start(); //initializing

//function to insert band names into DOM

function insertBands(data) {
  var top5 = data.slice(0,5);
  $('#bands').empty();
  $.each(top5, function(i, item){
    item.count = item.count.toLocaleString(); //adding a thousands comma
    $('#bands').append(
      "<tr><td class=\"band-name\">" + item.name + "</td><td class=\"text-right\"><span>" + item.count + "</span>  Mentions</td></tr>");
  });
}


