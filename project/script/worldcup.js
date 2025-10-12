const menuBtn = document.getElementById('menu');
const countdown = document.getElementById('countdown');
const daysSpan = document.getElementById('daysRemaining');

function calculateDays() {
  const today = new Date();
  const worldCupDate = new Date('2026-06-11');
  const diffTime = worldCupDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

menuBtn.addEventListener('click', () => {
  const days = calculateDays();
  daysSpan.textContent = days;
  countdown.classList.toggle('hidden');
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const slides = document.querySelectorAll('.slide');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

backBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

forwardBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.querySelector(".lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `${new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(lastModifiedDate)}`;