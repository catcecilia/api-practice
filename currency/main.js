const btcButton = document.getElementById("submit-BTC");
const exchangeButton = document.getElementById("submit-exchange");
const btcValue = document.getElementById("btc-value");
const exchangeValue = document.getElementById("currency-exchange");

btcButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let origin = document.getElementById("currency0").value;
    origin = String(origin).toLowerCase();

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${origin}/btc.json`)
    .then(res => res.json())
    .then(obj => btcValue.innerText = `1 ${origin.toUpperCase()} is ${obj.btc} BTC as of ${obj.date}`)
    .catch(err => btcValue.innerText = `${origin.toUpperCase()} is not a currency`);
});

exchangeButton.addEventListener("click", (e) =>{
    e.preventDefault();
    let home = document.getElementById("currency1").value;
    home = String(home).toLowerCase();
    let destination = document.getElementById("currency2").value;
    destination = String(destination).toLowerCase();

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${home}/${destination}.json`)
    .then(res => res.json())
    .then(obj => exchangeValue.innerText = `1 ${home.toUpperCase()} is ${obj[destination]} ${destination.toUpperCase()} as of ${obj.date}`)
    .catch(err => exchangeValue.innerText = 'Currency (or currencies) not found');
});
