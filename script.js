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
// Full-width slideshow script
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

 document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

 document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  if (slides.length === 0) return; // safety check

  slides[current].classList.add('active'); // show first slide

  setInterval(() => {
    slides[current].classList.remove('active'); // hide current
    current = (current + 1) % slides.length;    // next slide index
    slides[current].classList.add('active');    // show next
  }, 3000); // 3 seconds
});
  
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "💍 It's Wedding Time!";
  }
}, 1000);
