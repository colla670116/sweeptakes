$(document).ready(function () {

  function e(e) {
    var t = (new Date).getFullYear();
    return void 0 === e ? t : t - e
  }

  function fdate(e) {
    var a = new Date; a.setDate(a.getDate() - e);
    var r = (a.getDay(), a.getMonth()), n = a.getDate(); n < 10 && (n = "0" + n);
    var o = item.months;
    return "" + o[r] + " " + n
  }

  $(".nameCo").text(item.nameCompany);
  $(".prizeT").text(item.prize);
  $(".dat-1").text(fdate(0) + ", " + e());
  $(".years").text(e(item.foundedCompany));
  $(".price").text(item.priceTrial);
  $(".yearF").text(e());
  $('.prizeType').text(item.prizeType);

  $(".delivery").text(item.delivery !== ' ' && item.delivery.length !== 0 ? item.delivery : item.nameCompany);

  function f(value1, value2) {
    for (var t = 0; t <= value1.length; t++) {
      $(`.${value2 + t}`).text(value1[t])
    }
  }

  f(item.prizeUser, 'prizeUser');
  f(item.dateTime, 'dateTime');

  item.priceTrial !== ' ' && item.priceTrial.length > 0 ? $(".newclr.yTrial").css("display", "block") : $(".newclr.noTrial").css("display", "block")
});