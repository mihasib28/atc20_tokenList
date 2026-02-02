const API = "https://atc20-tokenlist-backend.onrender.com/api";
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "index.html";
}

/* ===== ELEMENT REFERENCES ===== */
const name = document.getElementById("name");
const address = document.getElementById("address");
const logo = document.getElementById("logo");
const category = document.getElementById("category");
const tokenMsg = document.getElementById("tokenMsg");
const tokenList = document.getElementById("tokenList");

/* ===== LOAD TOKENS ===== */
async function loadTokens() {
  try {
    const res = await fetch(`${API}/tokens`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Failed to fetch tokens");

    const data = await res.json();

    // backend returns { tokens: [...], counts: {...} }
    const tokensArray = data.tokens;

    tokenList.innerHTML = "";

    if (!tokensArray || tokensArray.length === 0) {
      tokenList.innerHTML = "<p>No tokens added yet</p>";
      return;
    }

    tokensArray.forEach(t => {
      const div = document.createElement("div");
      div.className = "token-card";
      div.innerHTML = `
        <p><strong>${t.name}</strong></p>
        <p>${t.address}</p>
        <p>${t.category}</p>
        <button onclick="deleteToken('${t._id}')">Delete</button>
      `;
      tokenList.appendChild(div);
    });

  } catch (err) {
    tokenList.innerHTML = `<p style="color:red;">Error loading tokens</p>`;
    console.error(err);
  }
}

/* ===== ADD TOKEN ===== */
async function addToken() {
  tokenMsg.innerText = "";

  if (!name.value || !address.value || !category.value) {
    tokenMsg.innerText = "All fields required";
    return;
  }

  try {
    const res = await fetch(`${API}/tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name.value.trim(),
        address: address.value.trim(),
        logo: logo.value.trim(),
        category: category.value
      })
    });

    const data = await res.json();

    if (!res.ok) {
      tokenMsg.innerText = data.message || "Failed to add token";
      return;
    }

    tokenMsg.innerText = "Token added successfully ✅";

    // Clear inputs
    name.value = "";
    address.value = "";
    logo.value = "";
    category.value = "";

    loadTokens(); // Refresh token list
  } catch (err) {
    tokenMsg.innerText = "Error adding token";
    console.error(err);
  }
}

/* ===== DELETE TOKEN WITH CONFIRMATION MODAL ===== */
let tokenToDelete = null; // store id of token to delete

function deleteToken(id) {
  tokenToDelete = id;
  document.getElementById("deleteInput").value = ""; // reset input
  document.getElementById("deleteModal").style.display = "flex";
}

// Cancel button
document.getElementById("cancelDelete").addEventListener("click", () => {
  tokenToDelete = null;
  document.getElementById("deleteModal").style.display = "none";
});

// Confirm button
document.getElementById("confirmDelete").addEventListener("click", async () => {
  const input = document.getElementById("deleteInput").value.trim();

  if (input !== "confirm") {
    alert("You must type 'confirm' to delete the token");
    return;
  }

  if (!tokenToDelete) return;

  try {
    const res = await fetch(`${API}/tokens/${tokenToDelete}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Failed to delete token");

    alert("Token deleted successfully ✅");
    document.getElementById("deleteModal").style.display = "none";
    tokenToDelete = null;
    loadTokens();
  } catch (err) {
    alert("Error deleting token");
    console.error(err);
  }
});


/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  loadTokens();
});
