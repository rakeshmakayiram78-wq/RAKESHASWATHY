// COUNTDOWN
var date = new Date("July 10, 2026 00:00:00").getTime();

setInterval(function () {
  var now = new Date().getTime();
  var gap = date - now;

  var d = Math.floor(gap / (1000 * 60 * 60 * 24));
  var h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    d + " Days " + h + " Hours " + m + " Minutes ❤️";

}, 1000);

// MUSIC
function playMusic() {
  document.getElementById("music").play();
}
