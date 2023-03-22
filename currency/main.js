const btcButton = document.getElementById("submit-BTC");
const exchangeButton = document.getElementById("submit-exchange");
const btcValue = document.getElementById("btc-value");
const exchangeValue = document.getElementById("currency-exchange");

btcButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const origin = document.getElementById("currency0").value;
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${origin}/btc.json`)
    .then(res => res.json())
    .then(obj => btcValue.innerText = `1 ${origin} is ${obj.btc} BTC as of ${obj.date}`)
    .catch(err => btcValue.innerText = '${origin} is not a currency');
});

exchangeButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const home = document.getElementById("currency1").value;
    const destination = document.getElementById("currency2").value;
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${home}/${destination}.json`)
    .then(res => res.json())
    .then(obj => exchangeValue.innerText = `1 ${home} is ${obj[destination]} ${destination} as of ${obj.date}`)
    .catch(err => exchangeValue.innerText = 'Currency (or currencies) not found');
});
