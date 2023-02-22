const burgermenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".nav-menu");

burgermenu.addEventListener("click", () => {
    burgermenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => { 
    burgermenu.classList.remove("active");
    navMenu.classList.remove("active");
}))