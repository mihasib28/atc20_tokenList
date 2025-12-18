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
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "UNI",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_7.png",
  //   url: "https://x.com/Atlantis_Ex/status/1994312163465273422"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "BONK",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_8.png",
  //   url: "https://x.com/Atlantis_Ex/status/1994305054161944591"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "DINO",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_9.png",
  //   url: "https://x.com/Atlantis_Ex/status/1994296279321424310"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "BRETT",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_10.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993913407842480356"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "WIF",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_11.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993813717482385508"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "TRX",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_12.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993735698021548507"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "BNB",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_13.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993590857581109606"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "ETH",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_14.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993237761378115708"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "BOME",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_15.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993232705254035546"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "DOGE",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_16.png",
  //   url: "https://x.com/Atlantis_Ex/status/1992752210334437669"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "MOG",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_17.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993026704013770865"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "BABYDOGE",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_18.png",
  //   url: "https://x.com/Atlantis_Ex/status/1993048807060521394"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "MATIC",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_19.png",
  //   url: "https://x.com/Atlantis_Ex/status/1992748061752520742"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "SOL",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_20.png",
  //   url: "https://x.com/Atlantis_Ex/status/1992752478631440475"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "Pepe (PEPE)",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_21.png",
  //   url: "https://x.com/Atlantis_Ex/status/1982948875452477450"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "Bunny King (BUNY)",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_22.png",
  //   url: "https://x.com/Atlantis_Ex/status/1980135913775661183"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "AzukiCoin (AZUKI)",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_23.png",
  //   url: "https://x.com/Atlantis_Ex/status/1979019731429658988"
  // },
  // {
  //   badge: "Fixed Supply: 1 Trillion",
  //   title: "Labubu (LABUBU)",
  //   desc: "ATC-20 memecoin",
  //   img: "./img/upcomingtoken_24.png",
  //   url: "https://x.com/Atlantis_Ex/status/1979769512724427140"
  // },
  // {
  //   badge: "Airdrop",
  //   title: "Charlie Kirk (KIRK)",
  //   desc: "Claim Airdrop",
  //   img: "./img/upcomingtoken_25.png",
  //   url: "https://x.com/AKF_Foundation/status/1966704313847488962",
  //   claim: true
  // }
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
