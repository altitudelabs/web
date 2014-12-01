/* ==================== */
/* JS SCRIPT ========== */
/* ==================== */

// ---------------------
// variables -----------
// ---------------------
var bandInfo = {
  autoID: 0,
  prefix: "band_"
}
var updateTIme = 1500;

// ---------------------
// functions -----------
// ---------------------
// helper: add commas to thousands digits
function thousandComma(number) {
  var number = String(number);
  var tmp = output = "", cnt = 1;
  for (var n = number.length-1; n >= 0; n--, cnt++) {
    tmp += number[n];
    if (n != 0 && cnt == 3) {
      tmp += ",";
      cnt = 1;
    }
  }
  for (var n in tmp) {
    output += tmp[tmp.length-n-1];
  }
  return output;
}

// auto fillup the leaderboard
function fillboard(data) {
  $('.band_item').not('.template').remove();
  $('.band_item.template').removeClass('hidden');
  $('.band_item.template .band_name').css('opacity', '0');
  $('.band_item.template .band_view').css('opacity', '0');
  for (var d in data) {
    band_ID = bandInfo.prefix+bandInfo.autoID;
    $('.band_item.template').clone().appendTo('#leaderboard');
    $('.band_item.template:eq(1)').attr('id', band_ID);
    $('.band_item.template:eq(1)').removeClass('template');
    $('#'+band_ID+" .band_name").text(data[d].name);
    $('#'+band_ID+" .band_view").text(thousandComma(data[d].count));
    bandInfo.autoID++;
  }
  $('.band_item.template').addClass('hidden');

  var tmpE = null, currentItem = 0;
  var show_int = setInterval(function() {
    tmpE = $('.band_item').not('.template');
    tmpE.find('.band_name').eq(currentItem).css('opacity', '1');
    tmpE.find('.band_view').eq(currentItem).css('opacity', '1');
    currentItem++;
    (currentItem == tmpE.length) && clearInterval(show_int);
  }, updateTIme/(data.length+1));
}

// ---------------------
// main operation ------
// ---------------------

$(document).ready(function() {
  // CALL Poller from window
  var pollerObj = new window.massrel.Poller({
    frequency: 15
  },
  function(data) {
    var band_ID = null;
    bandInfo.autoID = 0;

    var tmpE = null, currentItem = 0;
    tmpE = $('.band_item').not('.template');
    if (!tmpE.length) {
      fillboard(data);
    } else {
      var hide_int = setInterval(function() {
        tmpE.find('.band_name').eq(currentItem).css('opacity', '0');
        tmpE.find('.band_view').eq(currentItem).css('opacity', '0');
        currentItem++;
        if (currentItem == tmpE.length) {
          fillboard(data);
          clearInterval(hide_int);
        }
      }, updateTIme/(data.length));
    }

  });
  pollerObj.start();
});
