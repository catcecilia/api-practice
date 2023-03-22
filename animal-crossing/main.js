const button = document.querySelector("button");
const songTitle = document.querySelector("h2");
const audioPlayer = document.querySelector("audio");
const image = document.querySelector("img");

button.addEventListener("click",(e)=>{
    const randomNumber = Math.floor(Math.random()*96);
    fetch(`http://acnhapi.com/v1/songs/${randomNumber}`)
    .then(res => res.json())
    .then(obj => {
        console.log(obj);
        audioPlayer.autoplay=true;
        image.src=obj.image_uri;
        audioPlayer.src = obj.music_uri;
        songTitle.innerText=obj.name["name-USen"];
    }).catch(err => console.log(err));
});