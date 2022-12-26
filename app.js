const card = document.querySelector('.card');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');
const title = document.querySelector('.title');
const slide = document.getElementsByClassName("work-card-hero-img");



container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    logo.style.transform = "translateZ(150px)";
    title.style.transform = "translateZ(150px)";

});



container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.05s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    logo.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";

});

container.addEventListener("mousemove", (e) => {
    //console.log("hi i work");
    //console.log(e.pageX);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});