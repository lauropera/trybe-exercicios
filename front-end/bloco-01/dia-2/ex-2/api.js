async function append(data) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const usdPrice = Number(data.priceUsd);
  const brlPrice = await convertToBRL(usdPrice);
  li.innerHTML = `${data.name} (${data.symbol}): R$${brlPrice.toFixed(2)}`;
  ul.appendChild(li);
}

async function convertToBRL(amount) {
  try {
    const endpoint = '/currencies/usd.min.json';
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/${endpoint}`
    const response = await fetch(url);
    const data = await response.json();
    return amount * data.usd.brl;
  } catch (error) {
    return error;
  }
}

async function cryptoCoins() {
  const url = 'https://api.coincap.io/v2/assets';
  try {
    const response = await fetch(url);
    const { data } = await response.json();
    data.filter(({ rank }) => rank <= 10).map((coin) => append(coin));
  } catch (error) {
    return error;
  }
}

window.onload = cryptoCoins;