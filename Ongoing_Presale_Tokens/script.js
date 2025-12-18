const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* =========================
   TOKEN DATA (ALL TOKENS)
========================= */
const tokens = [
  {
    badge: "Presale",
    title: "Atlantis Gold (AU)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_1.png",
    url: "https://x.com/Atlantis_Ex/status/2000994136359624863"
  },
  {
    badge: "Presale",
    title: "BIGGER",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_2.png",
    url: "https://x.com/Atlantis_Ex/status/1998520482971488429"
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
    title: "Tiger Girl (TIGER)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_4.png",
    url: "https://x.com/Atlantis_Ex/status/1997953471157305691"
  },
  {
    badge: "Presale",
    title: "Drunk Raccoon (DRUNK)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_5.png",
    url: "https://x.com/Atlantis_Ex/status/1997256368579924213"
  },
  {
    badge: "Presale",
    title: "Roadrunner (RUN)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_6.png",
    url: "https://x.com/Atlantis_Ex/status/1996394662186385684"
  },
  {
    badge: "Presale",
    title: "UNI",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_7.png",
    url: "https://x.com/Atlantis_Ex/status/1994312163465273422"
  },
  {
    badge: "Presale",
    title: "BONK",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_8.png",
    url: "https://x.com/Atlantis_Ex/status/1994305054161944591"
  },
  {
    badge: "Presale",
    title: "DINO",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_9.png",
    url: "https://x.com/Atlantis_Ex/status/1994296279321424310"
  },
  {
    badge: "Presale",
    title: "BRETT",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_10.png",
    url: "https://x.com/Atlantis_Ex/status/1993913407842480356"
  },
  {
    badge: "Presale",
    title: "WIF",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_11.png",
    url: "https://x.com/Atlantis_Ex/status/1993813717482385508"
  },
  {
    badge: "Presale",
    title: "TRX",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_12.png",
    url: "https://x.com/Atlantis_Ex/status/1993735698021548507"
  },
  {
    badge: "Presale",
    title: "BNB",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_13.png",
    url: "https://x.com/Atlantis_Ex/status/1993590857581109606"
  },
  {
    badge: "Presale",
    title: "ETH",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_14.png",
    url: "https://x.com/Atlantis_Ex/status/1993237761378115708"
  },
  {
    badge: "Presale",
    title: "BOME",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_15.png",
    url: "https://x.com/Atlantis_Ex/status/1993232705254035546"
  },
  {
    badge: "Presale",
    title: "DOGE",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_16.jpg",
    url: "https://x.com/Atlantis_Ex/status/1992752210334437669"
  },
  {
    badge: "Presale",
    title: "MOG",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_17.png",
    url: "https://x.com/Atlantis_Ex/status/1993026704013770865"
  },
  {
    badge: "Presale",
    title: "BABYDOGE",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_18.png",
    url: "https://x.com/Atlantis_Ex/status/1993048807060521394"
  },
  {
    badge: "Presale",
    title: "MATIC",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_19.png",
    url: "https://x.com/Atlantis_Ex/status/1992748061752520742"
  },
  {
    badge: "Presale",
    title: "SOL",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_20.png",
    url: "https://x.com/Atlantis_Ex/status/1992752478631440475"
  },
  {
    badge: "Presale",
    title: "Pepe (PEPE)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_21.png",
    url: "https://x.com/Atlantis_Ex/status/1982948875452477450"
  },
  {
    badge: "Presale",
    title: "Bunny King (BUNY)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_22.jpg",
    url: "https://x.com/Atlantis_Ex/status/1980135913775661183"
  },
  {
    badge: "Presale",
    title: "AzukiCoin (AZUKI)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_23.jpg",
    url: "https://x.com/Atlantis_Ex/status/1979019731429658988"
  },
  {
    badge: "Presale",
    title: "Labubu the Atlantis Fairy (LABUBU)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_24.png",
    url: "https://x.com/Atlantis_Ex/status/1979769512724427140"
  },
  {
    badge: "Presale",
    title: " LiuqiuCoin (LIUQIU)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_26.png",
    url: "https://x.com/Atlantis_Ex/status/1989566687889252814",

  },
  {
    badge: "Presale",
    title: "Potsdam Declaration (POTSDAM)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_27.jpg",
    url: "https://x.com/Atlantis_Ex/status/1990328255388500363",
  },
  {
    badge: "Presale",
    title: "GJ11",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_28.jpg",
    url: "https://x.com/Atlantis_Ex/status/1989209489178857828",
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

/* =========================
   SLIDER LOGIC (UNCHANGED)
========================= */
let cardWidth =
  document.querySelector(".quest-card").offsetWidth + 16;

let autoSlideInterval;
const slideDelay = 3000;

window.addEventListener("resize", () => {
  cardWidth =
    document.querySelector(".quest-card").offsetWidth + 16;
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
    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 5
    ) {
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



