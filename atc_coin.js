let lastPrice = null;

async function loadCoins() {
  const res = await fetch(
    "https://coinmarketcap-price.onrender.com/api/coins?symbols=ATC"
  );
  const data = await res.json();

  const container = document.getElementById("coins");
  container.innerHTML = "";

  data.forEach(coin => {
    const changeClass = coin.change24h >= 0 ? "positive" : "negative";
    const arrow = coin.change24h >= 0 ? "▲" : "▼";

    let blinkClass = "";
    if (lastPrice !== null) {
      if (coin.price > lastPrice) blinkClass = "blink-up";
      if (coin.price < lastPrice) blinkClass = "blink-down";
    }

    container.innerHTML += `
      <div class="coin-card">
        <p class="price ${blinkClass}">
          $${coin.price.toFixed(3)}
        </p>
        <p class="change ${changeClass}">
          <span class="label">24h</span>
          ${arrow} ${coin.change24h.toFixed(2)}%
        </p>
      </div>
    `;

    lastPrice = coin.price;
  });
}

loadCoins();
setInterval(loadCoins, 5000);
