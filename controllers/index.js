// menu icon
document.querySelector(".menuToggle").onclick = function () {
  document.querySelector(".sidenav").classList.toggle("open");
  document.querySelector(".wrapper").classList.toggle("sidenav-open");
  document.querySelector(".menuToggle").classList.toggle("open");

  let a = document.querySelector(".header__logo-img");
  if (a.style.opacity === "0") {
    a.style.opacity = "1";
  } else {
    a.style.opacity = "0";
  }
};
