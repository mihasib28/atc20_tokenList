const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* =========================
   TOKEN DATA (ALL TOKENS)
========================= */
const tokens = [
  {
    badge: "CS: 50M",
    title: "Atlantis Gold (AU)",
    desc: "Pure Digital Gold on AtlantisChain",
    img: "./img/upcomingtoken_1.png",
    url: "https://x.com/Atlantis_Ex/status/2000994136359624863"
  },
  {
    badge: "CS: ?",
    title: "BIGGER",
    desc: "BIG to AtlantisChain’s BIGGER",
    img: "./img/upcomingtoken_2.png",
    url: "https://x.com/Atlantis_Ex/status/1998520482971488429"
  },
  {
    badge: "Fixed Supply: 1,000T",
    title: "AtlantisSpace (AS)",
    desc: "Satellite-based space node system",
    img: "./img/upcomingtoken_3.png",
    url: "https://x.com/Atlantis_Ex/status/1998306622427259331"
  },
  {
    badge: "Fixed Supply: 1 Trillion",
    title: "Tiger Girl (TIGER)",
    desc: "Brave girl with tiger joy",
    img: "./img/upcomingtoken_4.png",
    url: "https://x.com/Atlantis_Ex/status/1997953471157305691"
  },
  {
    badge: "Fixed Supply: 1 Trillion",
    title: "Drunk Raccoon (DRUNK)",
    desc: "Viral raccoon drunk arrest",
    img: "./img/upcomingtoken_5.png",
    url: "https://x.com/Atlantis_Ex/status/1997256368579924213"
  },
  {
    badge: "Fixed Supply: 1 Trillion",
    title: "Roadrunner (RUN)",
    desc: "The fastest flying bird on Earth",
    img: "./img/upcomingtoken_6.png",
    url: "https://x.com/Atlantis_Ex/status/1996394662186385684"
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
   // Select the last inserted card
  const newCard = slider.lastElementChild;

  // Make its image non-draggable
  const img = newCard.querySelector("img");
  img.draggable = false;

  // Make its link non-draggable
  const link = newCard.querySelector("a.presale-btn");
  link.draggable = false;
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