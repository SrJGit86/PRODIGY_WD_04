const openMenu = document.querySelector(".left")
const menu_ele = document.getElementById("menu-bar");
const clear_menu = document.getElementById("clearmenu");
const body = document.getElementById("body");
const help = document.querySelector(".useful");

function menubar() {
    openMenu.style.display = "block";
    menu_ele.style.display = "none";
    clear_menu.style.display = "block"
    body.style.overflowY = "hidden";
    help.style.opacity = "0.3";
    help.style.display = "block"

}

function forRemove() {
    openMenu.style.display = "none";
    menu_ele.style.display = "block";
    clear_menu.style.display = "none";
    body.style.overflowY = "auto";
    help.style.display = "none"
}

function clearMenu() {
    openMenu.style.display = "none";
    menu_ele.style.display = "block";
    clear_menu.style.display = "none";
    body.style.overflowY = "auto";
    body.style.opacity = "1";
    help.style.display = "none"
}


let home = document.getElementById("home");

home.addEventListener("click", function() {
    window.scrollTo(0, 0)
});