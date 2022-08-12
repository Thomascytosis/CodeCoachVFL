const navLinks = document.querySelectorAll('.nav-item')
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        navbarButton = document.getElementById('navbarButton');
        navbarButton.click(); });
});
//show on hover
// const showMe = document.querySelectorAll(".showMe");
// const hiddenElement = document.querySelectorAll(".overlay--hover");
// for (var i = 0; i < hiddenElement.length; i++){
//     // console.log(hiddenElement[i]);
//     showMe[i].addEventListener('mouseenter', () => {
//         setShow = document.querySelectorAll('.overlay--hover');
//         console.log(setShow)
//         setShow.setAttribute('hidden', "");
//     })
//     showMe[i].addEventListener('mouseleave', () => {
//         setHide = document.querySelectorAll('.overlay--hover');
//         console.log(setHide);
//         setHide[0].setAttribute('hidden', "hidden");
// })
// }

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