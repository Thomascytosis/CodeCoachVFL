const navLinks = document.querySelectorAll('.nav-item')
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        navbarButton = document.getElementById('navbarButton');
        navbarButton.click(); });
});


//show and hide on mouse enter and leave
const showMe = document.querySelectorAll(".showMe");
for (var i = 0; i < showMe.length; i++){
  showMe[i].addEventListener('mouseenter', (i) => {
      i.target.children[1].style.display = "block";
  })
  showMe[i].addEventListener('mouseleave', (i) => {
    i.target.children[1].style.display = "none";
})
}

//show hide types of projects with button click
const allProjects = document.getElementById('allProjectsButton');
const allScratch = document.getElementById('allScratchButton');
const allJavascript = document.getElementById('allJavascriptButton');
const allUnreal = document.getElementById('allUnrealButton');
allProjects.addEventListener('click', () => {
  var projects = document.querySelectorAll('.allProjects');
  for (var i = 0; i < projects.length; i++){
    projects[i].style.display = "block";
  }
})
allScratch.addEventListener('click', () => {
  var projects = document.querySelectorAll('.allProjects');
  var scratchs = document.querySelectorAll('.allScratch');
  for (var i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
  }
  for (var i = 0; i < scratchs.length; i++){
    scratchs[i].style.display = "block";
  }
})
allJavascript.addEventListener('click', () => {
  var projects = document.querySelectorAll('.allProjects');
  var javascripts = document.querySelectorAll('.allJavascript');
  for (var i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
  }
  for (var i = 0; i < javascripts.length; i++){
    javascripts[i].style.display = "block";
  }
})
allUnreal.addEventListener('click', () => {
  var projects = document.querySelectorAll('.allProjects');
  var unreals = document.querySelectorAll('.allUnreal');
  for (var i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
  }
  for (var i = 0; i < unreals.length; i++){
    unreals[i].style.display = "block";
  }
})

//from right reveal animation
function rightReveal() {
    var reveals = document.querySelectorAll(".right--reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
//from left reveal animation
function leftReveal() {
    var reveals = document.querySelectorAll(".left--reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

//top reveal animation
function topReveal() {
    var reveals = document.querySelectorAll(".top--reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  //bottom reveal animation
function bottomReveal() {
    var reveals = document.querySelectorAll(".bottom--reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

//fade in animation
function fadeIn() {
    var reveals = document.querySelectorAll(".fade--in");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

//scale in animation
function scale() {
  var reveals = document.querySelectorAll(".scale--reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rightReveal);
window.addEventListener("scroll", leftReveal);
window.addEventListener("scroll", topReveal);
window.addEventListener("scroll", bottomReveal);
window.addEventListener("scroll", fadeIn);
window.addEventListener("scroll", scale);
// To check the scroll position on page load
// reveal();