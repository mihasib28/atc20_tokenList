const API = "https://atc20-tokenlist-backend.onrender.com/api";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const msg = document.getElementById("authMsg");

function showLogin() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
}

function showRegister() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
}

loginForm.onsubmit = async (e) => {
  e.preventDefault();

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
    }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    msg.innerText = data.message || "Login failed";
  }
};

registerForm.onsubmit = async (e) => {
  e.preventDefault();

  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: regUsername.value,
      password: regPassword.value,
      adminInviteCode: regInviteCode.value,
    }),
  });

  const data = await res.json();
  msg.innerText = data.message || "Registered successfully";
};
