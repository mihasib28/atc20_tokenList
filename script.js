// ===== CONFIG =====
const API_URL = "https://atc20-tokenlist-backend.onrender.com/api/tokens";
const TOKENS_PER_PAGE = 20;

let currentCategory = "default";
let currentSearch = "";


// ===== STATE =====
let tokens = [];
let currentList = [];
let currentPage = 1;

// ===== LOAD TOKENS =====
async function loadTokens() {
  try {
    const res = await fetch(API_URL);
    tokens = await res.json();
    applyFilters(); // keeps filter after refresh
  } catch (err) {
    console.error(err);
  }
}


// ===== RENDER TOKENS (MATCHES YOUR CSS STRUCTURE) =====
function renderTokens() {
  const container = document.getElementById("tokenList");
  container.innerHTML = "";

  const start = (currentPage - 1) * TOKENS_PER_PAGE;
  const end = start + TOKENS_PER_PAGE;
  const pageItems = currentList.slice(start, end);

  if (pageItems.length === 0) {
    container.innerHTML = "<p>No tokens found</p>";
    return;
  }

  pageItems.forEach((token) => {
    container.innerHTML += `
      <div class="token-card">
        <div class="logo-text">
          <img src="${token.logo}" class="token-logo no-interaction" draggable="false">
          <div class="token-name">${token.name}</div>
        </div>

        <div class="contract">${token.address}</div>

        <div class="button-row">
          <button class="btn" onclick="copyAddress('${token.address}')">
            Copy
          </button>
          <button class="btn" onclick="openExplorer('${token.address}')">
            Explorer
          </button>
        </div>
      </div>
    `;
  });
}


// ===== PAGINATION =====
// ================= PAGINATION =================
function renderPagination(list = currentList) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";

  const totalPages = Math.ceil(list.length / TOKENS_PER_PAGE);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("active");

    btn.onclick = () => {
      if (currentPage === i) return;

      currentPage = i;
      renderTokens(list);
      renderPagination(list);

      // keep scroll on token section
      const tokenSection = document.getElementById("tokenSection");
      if (tokenSection) {
        tokenSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };

    pagination.appendChild(btn);
  }
}


// ===== FILTER =====
// ===== LOAD TOKENS =====
async function loadTokens() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    tokens = data.tokens; // save tokens
    window.tokenCounts = data.counts; // save counts globally

    applyFilters(); // keeps filter after refresh
    updateCategoryCounts(); // update dropdown counts
  } catch (err) {
    console.error(err);
  }
}

// ===== UPDATE DROPDOWN COUNTS =====
function updateCategoryCounts() {
  if (!window.tokenCounts) return;

  const counts = window.tokenCounts;
  const select = document.getElementById("sortSelect");

  // Only update option text
  Array.from(select.options).forEach(option => {
    switch(option.value) {
      case "default":
        option.text = `All [A-Z]`;
        break;
      case "stable":
        option.text = `Stablecoin [${counts.stable}]`;
        break;
      case "utility":
        option.text = `Utility coin [${counts.utility}]`;
        break;
      case "meme":
        option.text = `Memecoin [${counts.meme}]`;
        break;
      case "commemorative":
        option.text = `Commemorative coin [${counts.commemorative}]`;
        break;
    }
  });
}

// ===== FILTER =====
function filterTokens() {
  currentSearch = document.getElementById("searchInput").value.toLowerCase();
  currentCategory = document.getElementById("sortSelect").value;

  applyFilters();
}

// ===== APPLY FILTERS =====
function applyFilters() {
  currentList = tokens.filter((t) => {
    const matchCategory =
      currentCategory === "default" || t.category === currentCategory;

    const matchSearch =
      t.name.toLowerCase().includes(currentSearch) ||
      t.address.toLowerCase().includes(currentSearch);

    return matchCategory && matchSearch;
  });

  currentPage = 1;
  renderTokens();
  renderPagination();
  updateCategoryCounts(); // safe: only updates text
}




// ===== UTILITIES =====
function copyAddress(address) {
  navigator.clipboard.writeText(address);

  let alert = document.querySelector(".copy-alert");
  if (!alert) {
    alert = document.createElement("div");
    alert.className = "copy-alert";
    alert.textContent = "Address copied!";
    document.body.appendChild(alert);
  }

  alert.classList.add("show");
  setTimeout(() => alert.classList.remove("show"), 2000);
}

function openExplorer(address) {
  window.open(`https://atcscan.io/address/${address}`, "_blank");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  loadTokens();

  // SEARCH BAR (CSS SAFE)
  const searchArea = document.getElementById("searchArea");
  searchArea.innerHTML = `
    <div class="search-wrapper">
      <input
        type="text"
        id="searchInput"
        class="search-input"
        placeholder="Search token name or address"
      />
    </div>
  `;

  document.getElementById("searchInput").addEventListener("input", filterTokens);
  document.getElementById("sortSelect").addEventListener("change", filterTokens);
});


