const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


// slide deck
let slidePositon = 1;
Slideshow(slidePositon);
function plusSlides(n) {
  Slideshow(slidePositon += n);
}
function currentSlides(n) {
  Slideshow(slidePositon = n);
}

function Slideshow(n) {
  let i;
  const projects = document.getElementsByClassName("project");
  const projectTitle = document.getElementsByClassName("project-title");
  console.log(projects.length);
  if(n > projects.length) {
    slidePositon = 1;
  }
  if(n < 1) {
    slidePositon = projects.length;
  }
  for(i = 0;i< projects.length; i++) {
    projects[i].style.display = "none";
    projectTitle[i].style.display = "none";
  }
  projects[slidePositon-1].style.display = "block";
  projectTitle[slidePositon-1].style.display = "block";
}

