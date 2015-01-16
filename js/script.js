// creating an instance of Poller

bandPoller = new window.massrel.Poller({frequency: 15}, insertBands); // creating a test poller to print the data

bandPoller.start();

//function to insert band names into DOM

function insertBands(data) {
  var top5 = data.slice(0,5);
  $('#bands').empty();
  $.each(top5, function(i, item){
    item.count = item.count.toLocaleString(); //adding a thousands comma
    $('#bands').append(
      "<tr><th class=\"band-name\">" + item.name + "</th><td class=\"text-right\"><span>" + item.count + "</span>  Mentions</td></tr>");
  });
}


