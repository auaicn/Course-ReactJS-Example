import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins</h1>
      <hr />
      <h3>Loaded {coins.length} Entries...</h3>
      {loading ? <h3>Loading</h3> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {" "}
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinTracker;
