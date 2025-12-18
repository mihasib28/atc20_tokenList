const track = document.querySelector('.track');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

let index = 0;
const slideCount = slides.length;
const intervalTime = 3000; // 1 second

function goToSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

function autoSlide() {
  index = (index + 1) % slideCount;
  goToSlide(index);
}

/* Auto play */
let sliderInterval = setInterval(autoSlide, intervalTime);

/* Dot click */
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    goToSlide(index);
    resetInterval();
  });
});

/* Reset interval on interaction */
function resetInterval() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(autoSlide, intervalTime);
}
