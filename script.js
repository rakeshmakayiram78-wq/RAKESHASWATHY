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
const weddingDate = new Date("May 1, 2026 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Auto-scrolling gallery slider
const slider = document.getElementById('gallerySlider');
let scrollAmount = 0;
const scrollStep = 265; // width of image + gap
const scrollDelay = 2000; // 2 seconds per slide

function autoScrollSlider() {
  scrollAmount += scrollStep;
  
  // If we reach the end, go back to start
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }
  
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Start the auto-scroll
setInterval(autoScrollSlider, scrollDelay);
  
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "💍 It's Wedding Time!";
  }
}, 1000);
