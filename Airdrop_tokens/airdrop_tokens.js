const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* =========================
   TOKEN DATA (ALL TOKENS)
========================= */
const tokens = [
  
  {
    badge: "Airdrop",
    title: "Charlie Kirk (KIRK)",
    desc: "Free Airdrop",
    img: "./img/upcomingtoken_25.png",
    url: "https://x.com/AKF_Foundation/status/1966704313847488962",
    claim: true
  
  }
];

/* =========================
   CREATE CARDS
========================= */
tokens.forEach(token => {
  slider.insertAdjacentHTML(
    "beforeend",
    `
    <div class="quest-card">
      <span class="badge">${token.badge}</span>
      <h3>${token.title}</h3>
      <p>20% Airdrop</p>
      <div class="footer">
        <img class="avatar" src="${token.img}" alt="">
        <h4>${token.desc}</h4>
        <a class="presale-btn" href="${token.url}" target="_blank">
          <button>${token.claim ? "Claim Airdrop" : "Join presale"}</button>
        </a>
      </div>
    </div>
    `
  );
});

// Make dynamically created images non-draggable
const avatars = document.querySelectorAll(".quest-card img");
avatars.forEach(img => {
  img.draggable = false;
});

// =========================
// SLIDER LOGIC
// =========================
let cardWidth = document.querySelector(".quest-card").offsetWidth + 16;
let autoSlideInterval;
const slideDelay = 3000;

window.addEventListener("resize", () => {
  cardWidth = document.querySelector(".quest-card").offsetWidth + 16;
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, slideDelay);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);
slider.addEventListener("touchstart", stopAutoSlide);
slider.addEventListener("touchend", startAutoSlide);

startAutoSlide();

// =========================
// SEARCH FUNCTIONALITY
// =========================
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".quest-card");

  stopAutoSlide(); // stop auto slide while searching

  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = ""; // keep flex behavior
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // restart auto slide only if search is empty
  if (searchValue === "") {
    startAutoSlide();
  }
});