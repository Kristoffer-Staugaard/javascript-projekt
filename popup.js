console.log("popup.js is running");
function yScrollHandler () {
  let win = document.getElementById("popup");
  if((window.pageYOffset + window.innerHeight) >=document.body.offsetHeight){
    win.style.transition = "right 0.7s ease-in-out 0s";
    win.style.right = "0px";
  } else {
    win.style.transition = "right 0.7s ease-in-out 0s";
    win.style.right = "-452px";
  }
}
window.onscroll = yScrollHandler;