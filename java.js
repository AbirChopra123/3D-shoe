const contain = document.querySelector(".container");
const card = document.querySelector(".card");
const title = document.querySelector(".title")
const info = document.querySelector(".info h3")
const sneaker = document.querySelector(".sneakers img")
const sizes = document.querySelector(".sizes")
const purchase = document.querySelector(".purchase")

contain.addEventListener("mousemove",(e)=>{
console.log(e.pageX, e.PageY)
var xPoint = (window.innerWidth/2 - e.pageX)/10
var yPoint = (window.innerHeight/2 - e.pageY)/10
console.log(xPoint,yPoint)
card.style.transform = `rotateY(${xPoint}deg) rotateX(${yPoint}deg)`
})

contain.addEventListener("mouseenter", (e)=>{
title.style.transform = `translateZ(200px)`;
card.style.transition = "none";
info.style.transform = `translateZ(150px)`;
sneaker.style.transform = `translateZ(150px)`;
sizes.style.transform = `translateZ(100px)`;
purchase.style.transform = `translateZ(100px)`;
})

contain.addEventListener("mouseleave", (e)=>{
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    card.style.transition = "1s ease";
    title.style.transform = `translateZ(0px)`;
    info.style.transform = `translateZ(0px)`;
    sneaker.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
})

