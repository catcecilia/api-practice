const select = document.querySelector("select");
const btn = document.querySelector("button");
const p = document.getElementById("horoscope-text");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let sign = select.value;
    fetch(`https://aztro.sameerkumar.website?sign=${sign}&day=today`, {method: 'POST'})
    .then(res => res.json())
    .then(object => {
        p.innerText = object.description;
    }).catch(err => console.log(err));
});