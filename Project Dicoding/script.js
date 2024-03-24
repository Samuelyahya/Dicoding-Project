document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "none";
  }
});

const navbar = document.querySelector(".navbar");
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

const hamburger = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});