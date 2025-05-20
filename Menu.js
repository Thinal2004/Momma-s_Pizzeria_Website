const sideBar = document.getElementById("sidebar");
const navBar = document.getElementById("navigation");

function showSidebar(){
    // navBar.style.display = "none";
    sideBar.style.display = "flex";
}

function closeSidebar(){
    // navBar.style.display = "none";
    sideBar.style.display = "none";
}

// Menu - mini nav
const pizzaTab = document.getElementById("pizzaNav");
const burgerTab = document.getElementById("burgerNav");
const drinksTab = document.getElementById("drinksNav");
const dessertsTab = document.getElementById("dessertsNav");

pizzaTab.classList.add("selectedNav");

function removeClass(){
    pizzaTab.classList.remove("selectedNav");
    burgerTab.classList.remove("selectedNav");
    drinksTab.classList.remove("selectedNav");
    dessertsTab.classList.remove("selectedNav");
}

pizzaTab.addEventListener('click',function(){
    removeClass();
    pizzaTab.classList.add("selectedNav");
})

burgerTab.addEventListener('click',function(){
    removeClass();
    burgerTab.classList.add("selectedNav");
})

drinksTab.addEventListener('click',function(){
    removeClass();
    drinksTab.classList.add("selectedNav");
})

dessertsTab.addEventListener('click',function(){
    removeClass();
    dessertsTab.classList.add("selectedNav");
})
