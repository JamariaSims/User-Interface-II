const menuBtn = document.querySelector(".menu-button");
const menuList = document.querySelector("#menuList");
const disableMenu = document.querySelector(".listMenu");
const homeButton = document.querySelector("#home");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
if(!menuOpen){
    menuBtn.classList.add("open");
    menuOpen = true;
    menuBtn.appendChild(menuList);
    disableMenu.appendChild(homeButton);
}else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    disableMenu.appendChild(menuList);
}
})


