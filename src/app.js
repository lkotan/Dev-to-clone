import "./scss/main"


//Variables
const searchIcon=document.querySelector(".search-icon")
const searchInput=document.querySelector(".search-input")
const searchClose=document.querySelector(".search-close")

//Mobile
const btnMenu=document.querySelector(".btn-menu")
const hamburger=document.querySelector(".hamburger")
const hamburgerClose=document.querySelector(".hamburger-close");


//EventListener
searchIcon.addEventListener("click",()=>{
    searchInput.classList.add("show")
    searchIcon.classList.remove("show")
    searchClose.classList.add("show")
})

searchClose.addEventListener("click",()=>{
    searchInput.classList.remove("show")
    searchClose.classList.remove("show")
    searchIcon.classList.add("show")
})

//Mobile
btnMenu.addEventListener("click",()=>{
    hamburger.style.display="block"
})

hamburgerClose.addEventListener("click",()=>{
    hamburger.style.display="none"
})