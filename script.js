// ===== CONFIG =====
const API_URL = "https://atc20-tokenlist-backend.onrender.com/api/tokens";
const TOKENS_PER_PAGE = 20;

let currentCategory = "default";
let currentSearch = "";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}



// ===== STATE =====
let tokens = [];
let currentList = [];
let currentPage = 1;
let hashScrolled = false;



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
  updateCategoryCounts();

  // only once
  if (!hashScrolled) {
    setTimeout(handleHashScroll, 100);
  }
}



// ================= NAVBAR =================
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });
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

  if (location.hash === "#presale") {
  currentCategory = "default"; // keep filters unchanged
}


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


function handleHashScroll(retry = 0) {
  if (hashScrolled) return;

  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  if (document.body.scrollHeight < window.innerHeight + 200 && retry < 10) {
    setTimeout(() => handleHashScroll(retry + 1), 150);
    return;
  }

  hashScrolled = true; // 🔒 lock it

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  history.replaceState(null, "", window.location.pathname);
}


// ================= CHAT =================
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbot = document.querySelector(".chatbot");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatHint = document.getElementById("chatHint");

openChat?.addEventListener("click", () => {
  chatbot.style.display = "flex";
  stopChatHints();
});

closeChat?.addEventListener("click", () => {
  chatbot.style.display = "none";
  startChatHints();
});

// ================= CHAT HINTS =================
const hintMessages = [
  "Ask me about Atlantis",
  "Atlantis Assistant here",
  "Need help with ATC-20?",
  "Check TPS, fees & stats",
  "Ask about DEX or Launchpad",
];

let hintIndex = 0;
let hintInterval = null;

function startChatHints() {
  if (hintInterval) return;
  hintInterval = setInterval(() => {
    if (chatbot.style.display === "flex") return;

    chatHint.textContent = hintMessages[hintIndex];
    chatHint.classList.add("show");

    setTimeout(() => chatHint.classList.remove("show"), 2000);
    hintIndex = (hintIndex + 1) % hintMessages.length;
  }, 3000);
}

function stopChatHints() {
  clearInterval(hintInterval);
  hintInterval = null;
  chatHint.classList.remove("show");
}

startChatHints();

/* ================= BOT ANSWERS ================= */
const answers = [
  {
    keywords: ["atlantis", "atlantischain"],
    reply:
      "AtlantisChain is a high-performance blockchain ecosystem built for ATC-20 tokens, DeFi, DEX, Launchpad solutions, stablecoins, and scalable Web3 applications.",
  },
  {
    keywords: ["tps", "transactions per second", "speed", "performance"],
    reply:
      "AtlantisChain delivers ultra-high performance with a peak capacity of 3.6M+ TPS, enabling fast and scalable on-chain activity.",
  },
  {
    keywords: ["block time", "confirmation time", "instant", "real time", "speed"],
    reply:
      "AtlantisChain features an ultra-fast block time of approximately 0.031 seconds, allowing near-instant transaction confirmations.",
  },
  {
    keywords: ["fees", "gas", "gas fee", "cost"],
    reply:
      "AtlantisChain offers near-zero gas fees, making transactions extremely cost-efficient for DeFi, trading, and memecoin usage.",
  },
  {
    keywords: ["atc-20", "atc20", "token", "token standard"],
    reply:
      "ATC-20 is the native token standard of AtlantisChain, an ultra-super-fast Layer-0 blockchain capable of 3,600,000 TPS with a 0.031-second block time. ATC-20 tokens are optimized for near-zero fees, high scalability, and real-time Web3, DeFi, and global commerce applications.",
  },
  {
    keywords: ["atc20 direct", "direct launch", "direct mint"],
    reply:
      "ATC-20 Direct enables instant token creation on AtlantisChain without complex smart contract deployment, simplifying project launches.",
  },
  {
    keywords: ["dex", "atlantis x", "swap", "trade"],
    reply:
      "Atlantis X is the official decentralized exchange of AtlantisChain, providing on-chain swapping and trading for ATC-20 tokens.",
  },
  {
    keywords: ["launchpad", "wtf", "memecoin", "meme"],
    reply:
      "Atlantis WTF Launchpad is a no-code platform that allows users to launch ATC-20 memecoins quickly and easily.",
  },
  {
    keywords: ["usda", "stable", "stablecoin"],
    reply:
      "USDA is the native stablecoin of AtlantisChain, designed for price stability, fast settlements, and low-cost transactions.",
  },
  {
    keywords: ["wallet", "wallet support", "address"],
    reply:
      "Atlantis Wallet is the official cold wallet of AtlantisChain, secured by the proprietary Atlantis QuantumLock™ system, eliminating traditional private keys and outdated security models. It supports ATC-20 tokens and provides a user-friendly interface for managing assets. visit: https://atlantiswallet.org/ ",
  },
  {
    keywords: ["security", "safe", "secure"],
    reply:
      "AtlantisChain prioritizes security, transparency, and verifiable on-chain data through its core infrastructure and tools.",
  },
  {
    keywords: ["bridge", "cross-chain", "cross chain"],
    reply:
      "AtlantisChain is expanding toward cross-chain integrations to enable seamless asset transfers across multiple blockchains.",
  },
  {
    keywords: ["utility", "utility token"],
    reply:
      "ATC-20 utility tokens power applications, services, governance, and incentives across the AtlantisChain ecosystem.",
  },
  {
    keywords: ["governance", "vote", "dao"],
    reply:
      "Governance on AtlantisChain allows token holders to participate in ecosystem decisions through ATC-20-based mechanisms.",
  },
  {
    keywords: ["airdrops", "airdrop", "rewards"],
    reply:
      "AtlantisChain periodically offers rewards and airdrops through ecosystem campaigns and community events.",
  },
  {
    keywords: ["staking", "stake", "earn"],
    reply:
      "Staking within the Atlantis ecosystem allows users to earn rewards while supporting network participation and growth.",
  },
  {
    keywords: ["liquidity", "lp", "liquidity pool"],
    reply:
      "Liquidity pools on Atlantis X improve trading efficiency and reward users who provide liquidity.",
  },
  {
    keywords: ["developers", "build", "developer"],
    reply:
      "AtlantisChain provides a developer-friendly environment for building dApps, tokens, and DeFi protocols using ATC-20.",
  },
  {
    keywords: ["nft", "nfts"],
    reply:
      "AtlantisChain supports NFT creation and trading, enabling digital asset ownership within the ecosystem.(Under development)",
  },
  {
    keywords: ["roadmap", "future", "plans"],
    reply:
      "The AtlantisChain roadmap focuses on scalability, ecosystem expansion, and advanced DeFi infrastructure. for details, visit the official website: atlantischain.org",
  },
  {
    keywords: ["community", "users"],
    reply:
      "AtlantisChain is supported by a growing global community of users, developers, and ecosystem contributors.",
  },
  {
    keywords: ["exchange", "cex", "listing"],
    reply:
      "$ATC is now listed on Hibit Exchange. Keep an eye on the official Twitter (X) and Telegram channels for the latest listing updates.",
  },
  {
    keywords: ["blocks", "total blocks", "network activity"],
    reply:
      "AtlantisChain has produced over 470 million blocks in just 179 days, demonstrating strong network activity and stability.",
  },
  {
    keywords: ["atcscan", "explorer", "scan"],
    reply:
      "ATCScan(atcscan.io) is the official blockchain explorer for AtlantisChain, used to monitor transactions, blocks, tokens, and wallets.",
  },
  {
    keywords: ["why atlantis", "why atlantischain"],
    reply:
      "AtlantisChain combines ultra-high TPS, near-zero gas fees, and ultra-fast block times, making it ideal for DeFi, DEX, and ATC-20 projects.",
  },
  {
    keywords: ["network", "mainnet", "stats", "chain stats"],
    reply:
      "AtlantisChain mainnet statistics include 3.6M+ TPS peak, 0.031-second block time, near-zero gas fees, and hundreds of millions of blocks produced.",
  },
  {
    keywords: ["support", "help"],
    reply:
      "For official support, updates, and announcements, always follow AtlantisChain’s verified communication channels.",
  },
];

function botReply(message) {
  const msg = message.toLowerCase();
  for (let item of answers) {
    if (item.keywords.some((k) => msg.includes(k))) return item.reply;
  }
  return "Sorry, I didn’t understand that. Please ask about AtlantisChain, ATC-20, DEX, wallet, explorer, Launchpad, or USDA.";
}

sendBtn?.addEventListener("click", sendMessage);
userInput?.addEventListener("keypress", (e) => { if (e.key === "Enter") sendMessage(); });

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  chatBody.innerHTML += `<div class="user-msg">${text}</div>`;
  userInput.value = "";

  setTimeout(() => {
    const reply = botReply(text);
    chatBody.innerHTML += `<div class="bot-msg">${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}


// ================= FOOTER =================
      document.querySelectorAll(".footer-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
          const links = btn.nextElementSibling;
          links.style.display = links.style.display === "block" ? "none" : "block";
        });
      });