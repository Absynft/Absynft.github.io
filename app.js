
// Fading in everything JS below
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Cursor trailer JS
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
 "#0a0a0a", "#151f11", "#1b3115", "#204418", "#24581a", "#276d1c", "#28821c", "#28991c", "#26af1a", "#21c716", "#18df0f", "#00f700"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 23 + "px";
    circle.style.top = y - 23 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.25;
    y += (nextCircle.y - y) * 0.25;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();