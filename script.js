function nextPage(pageNumber){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+pageNumber)
.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

function prevPage(){

const activePage =
document.querySelector(".page.active");

const currentNumber =
parseInt(
activePage.id.replace("page","")
);

if(currentNumber <= 1) return;

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+(currentNumber-1))
.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

const starsContainer =
document.getElementById("stars");

for(let i=0;i<150;i++){

const star =
document.createElement("div");

star.classList.add("star");

const size =
Math.random()*3;

star.style.width =
size+"px";

star.style.height =
size+"px";

star.style.left =
Math.random()*100+"%";

star.style.top =
Math.random()*100+"%";

star.style.position = "absolute";
star.style.background = "white";
star.style.borderRadius = "50%";
star.style.opacity = Math.random();

starsContainer.appendChild(star);

}

let moonClicks = 0;

document
.querySelector(".moon")
.addEventListener("click",()=>{

moonClicks++;

if(moonClicks === 5){

alert(
"🌙 Secret Message Unlocked\n\nPrincess Kitty Detected 😺👑\nMaximum Happiness Level Achieved 💗✨"
);

moonClicks = 0;

}

});
