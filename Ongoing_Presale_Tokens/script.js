const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* =========================
   TOKEN DATA (ALL TOKENS)
========================= */
const tokens = [
  {
    badge: "Presale",
    title: "Two Kings (2KINGS)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACLjmsZ8LGbJT46oKHAuqPDByAU4wsCjvPRbBZkbLNS7/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2050026588943921158"
  },
  {
    badge: "Presale",
    title: "State51",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACfmSADX1456pFMkNW8mrrnAGsNnA2sKaKeoKTUA11UR/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2054416638318108911"
  },
  {
    badge: "Presale",
    title: "PRAYER",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACfjfqFYQwpPh6TJuvGDA69VAo4ywYL3RSW5v6riV4T9/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2052644995501555731"
  },
  {
    badge: "Presale",
    title: "UFO",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACLoFAW7ZhJzruBboRD7xrY6DoxMUUC9tpqefz7vrrsu/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2053034806091636984"
  },
  {
    badge: "Presale",
    title: "ARTEMIS",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACWodvNQzyoxaWzdVkf1ZHFcQVbQMJu4uGr6kDYiiqRr/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2039919925226336608"
  },
  {
    badge: "Presale",
    title: "Atlantis Silver (AG)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACdTSwfv63eD86ATeUEDx1P79FSfQHC8jUfXoizKzTkh/logo.jpg",
    url: "https://x.com/Atlantis_Ex/status/2017081823319462277?s=20"
  },
  {
    badge: "Presale",
    title: "WINNING",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACu6vZ9DGqTPnzd4A97fTM3zASbs4UJx4zZ4Dk5F8guC/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2015989242149970271"
  },
  {
    badge: "Presale",
    title: "Trumpnomics (TN)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACG14qjSXyXSYgAwdfmcd79CruBnN3ozui6d18njR4v2/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2009874294772248628"
  },
  {
    badge: "Presale",
    title: "Monroe Doctrine (MONROE)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACdBCbVTqqSiLrAdBK2VjTD5TUGyHtJ5wtQkcuSwbH9N/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2008833205001224256?s=20"
  },
  {
    badge: "Presale",
    title: "Atlantis Oil (OIL)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/oilToken.jpg",
    url: "https://x.com/Atlantis_Ex/status/2004480399934922769"
  },
  {
    badge: "Presale",
    title: "Atlantis Gold (AU)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_1.png",
    url: "https://x.com/Atlantis_Ex/status/2000994136359624863"
  },
  {
    badge: "Presale",
    title: "AtlantisSpace (AS)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_3.png",
    url: "https://x.com/Atlantis_Ex/status/1998306622427259331"
  },
  {
    badge: "Presale",
    title: "Paper Tiger (PAPERTIGER)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACJ6omMbJTnfXdtZGSqqM5TvdPKHHcj78NmBS1cgFWmJ/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2033362703792898391",
  },
  {
    badge: "Presale",
    title: "Trump Doctrine (TRUMPISM)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/AC8L5wKQbUfJUr75bTnPUNYES5LWSkFtArs4Jk9gzxew/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2031187863010971950",
  },
  {
    badge: "Presale",
    title: "KING",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_29.png",
    url: "https://x.com/Atlantis_Ex/status/1988140978750812452",
  },
  {
    badge: "Presale",
    title: "QUEEN",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_30.png",
    url: "https://x.com/Atlantis_Ex/status/1986600013917524154",
  },
  {
    badge: "Presale",
    title: "EMPEROR",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_31.png",
    url: "https://x.com/Atlantis_Ex/status/1985237401678098923",
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
        <img class="avatar" src="${token.img}" onerror="this.onerror=null;this.src='../Asset/unnamed.png';"
            class="token-logo no-interaction" 
            draggable="false" alt="">
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
