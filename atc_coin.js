let lastPrices = {}; 
let isFetching = false; 

async function loadCoins() {
  if (isFetching) return; 
  isFetching = true;

  try {
    const res = await fetch(
      "https://get-price28.onrender.com/api/coins?symbols=ATC"
    );

    if (res.status === 429) {
      console.warn("Rate limited! Waiting 10s before retry...");
      setTimeout(loadCoins, 10000); 
      return;
    }

    const data = await res.json();
    const container = document.getElementById("coins");
    container.innerHTML = "";

    data.forEach(coin => {
      const changeClass = coin.change24h >= 0 ? "positive" : "negative";
      const arrow = coin.change24h >= 0 ? "▲" : "▼";

      let blinkClass = "";
      if (lastPrices[coin.symbol] !== undefined) {
        if (coin.price > lastPrices[coin.symbol]) blinkClass = "blink-up";
        if (coin.price < lastPrices[coin.symbol]) blinkClass = "blink-down";
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

      lastPrices[coin.symbol] = coin.price;
    });

  } catch (err) {
    console.error("Error fetching coin data:", err);
  } finally {
    isFetching = false;
  }
}


loadCoins();
setInterval(loadCoins, 15000);
