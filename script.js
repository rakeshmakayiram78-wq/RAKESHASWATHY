// COUNTDOWN
const weddingDate = new Date("May 1, 2026 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "💍 It's Wedding Time!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s ❤️`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call

// SLIDESHOW
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  if (slides.length === 0) return;

  slides[current].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
});
