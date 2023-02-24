const scrollerText = document.getElementById("scroller-text");
const scrollButton = document.getElementById("scroll-button");
let scrollPos = 0;
const scrollSpeed = 1;
const colors = ["#483285","#CECCD6"];
let isScrolling = false;


function startScrolling() {
 isScrolling = true;


 document.getElementById('scroller-text').innerHTML = "El og Teknik, Enø Camping, Erhversforeningen Karrebæksminde, Enø Spisehus, Fiskehuset Enø, Kanal Kroen, Marine Technic, Marten Røgeri, Næstved Skilte, Næstvedmægleren, Pandekagehuset, Sandved Smede- og Maskinforretning,";
}
scrollButton.addEventListener("click", startScrolling);




setInterval(() => {
 if (isScrolling) {
   scrollPos += scrollSpeed;
   scrollerText.style.transform = `translateX(${scrollPos}px)`;


   const colorIndex = Math.floor((scrollPos / scrollerText.offsetWidth) * colors.length);
   const color = colors[colorIndex];
   scrollerText.style.color = color;


   if (scrollPos >= scrollerText.offsetWidth) {
     scrollPos = -scrollerText.offsetWidth;
   }
 }
}, 10);