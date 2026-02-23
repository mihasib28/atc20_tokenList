const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* =========================
   TOKEN DATA (ALL TOKENS)
========================= */
const tokens = [
  {
    badge: "Presale",
    title: "Atlantis Silver (AG)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACdTSwfv63eD86ATeUEDx1P79FSfQHC8jUfXoizKzTkh/logo.jpg",
    url: "https://x.com/Atlantis_Ex/status/2017081823319462277?s=20"
  },
  {
    badge: "Presale",
    title: "Atlantis GBP (GBPA)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACwLHQjXGLm3dtK3EpFX8j8tDYuKfx2bi4T8x2azePst/logo.jpg",
    url: "https://x.com/i/status/2016784422817968275"
  },
  {
    badge: "Presale",
    title: "PENGUIN",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACRZsm8HEQ2LxDMfsLy1nKCZLNHVe91C4t37hYdqzcFr/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2015654817343918144"
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
    title: "MEMES",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACzwcUCTm5FkC28emZTREbLZ6ZDMthxa7ihbFvBawG5H/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2014207782560596430"
  },
  {
    badge: "Presale",
    title: "Advanced Bitcoin (aBTC)",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/ACaUqfatXwxHBiH9eaLqrXihjykj2FaVZwM9WW4dDY8v/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2011691804395970775?s=20"
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
    title: "MOGA",
    desc: "Atlantis Chain(ATC-20)",
    img: "https://tokenlist.atcscan.io/metadata/AC7v97VXL6VydnzMa51bFtGyUxjGunU5yjdbmiaqAxk3/logo.png",
    url: "https://x.com/Atlantis_Ex/status/2008105040687554634?s=20"
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
    title: "LABUBU",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_24.png",
    url: "https://x.com/Atlantis_Ex/status/1979769512724427140"
  },
  {
    badge: "Presale",
    title: "LiuqiuCoin (LIUQIU)",
    desc: "Atlantis Chain(ATC-20)",
    img: "./img/upcomingtoken_26.png",
    url: "https://x.com/Atlantis_Ex/status/1989566687889252814",

  },
  {
    badge: "Presale",
    title: "POTSDAM",
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
