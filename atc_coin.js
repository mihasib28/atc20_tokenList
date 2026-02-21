let lastPrices = {};
let isFetching = false;

async function loadCoins() {
  if (isFetching) return;
  isFetching = true;

  try {
    const res = await fetch(
      "https://hibit-price-api-zs7i.onrender.com/api/atc-price"
    );

    if (res.status === 429) {
      console.warn("Rate limited! Waiting 10s before retry...");
      setTimeout(loadCoins, 10000);
      return;
    }

    const json = await res.json();

    const coin = {
      symbol: json.symbol || "ATC/USDT",
      price: Number(json.price)
    };

    const container = document.getElementById("coins");
    container.innerHTML = "";

    let blinkClass = "";
    if (lastPrices[coin.symbol] !== undefined) {
      if (coin.price > lastPrices[coin.symbol]) blinkClass = "blink-up";
      if (coin.price < lastPrices[coin.symbol]) blinkClass = "blink-down";
    }

    container.innerHTML = `
      <div class="coin-card">
        <h5 class="symbol">${coin.symbol}</h5>
        <p class="price ${blinkClass}">
          $${coin.price.toFixed(2)}
        </p>
      </div>
    `;

    lastPrices[coin.symbol] = coin.price;

  } catch (err) {
    console.error("Error fetching coin data:", err);
  } finally {
    isFetching = false;
  }
}

loadCoins();
setInterval(loadCoins, 15000);
