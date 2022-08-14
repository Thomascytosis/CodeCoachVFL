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

window.addEventListener("scroll", rightReveal);
window.addEventListener("scroll", leftReveal);
window.addEventListener("scroll", topReveal);
window.addEventListener("scroll", bottomReveal);
window.addEventListener("scroll", fadeIn);
// To check the scroll position on page load
// reveal();