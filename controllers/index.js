// menu icon
document.querySelector(".menuToggle").onclick = function () {
  document.querySelector(".sidenav").classList.toggle("open");
  document.querySelector(".wrapper__content").classList.toggle("sidenav-open");
  document.querySelector(".menuToggle").classList.toggle("open");
  document.querySelector(".header").classList.toggle("sidenav-open");

  let element = document.querySelector(".header__logo-img");
  if (element.style.opacity === "0") {
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
  }
};

// let headerStyle = {
//   "background-color": "#fff",
//   "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
//   position: "fixed",
//   "z-index": "9999",
//   top: "0",
//   left: "0",
//   width : "100%",
//   padding : "5px"
// };

// console.log(headerStyle["box-shadow"]);

// let scrollFunction = () => {
//   let element = document.querySelector(".header");
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

//     document.querySelector('.header__logo-img').style["width"] = "40px";
//     document.querySelector('.header__logo-img').style["height"] = "40px";

//     for (let index in headerStyle) {
//       element.style[index] = headerStyle[index];
//     }
//   } else {
//     document.querySelector('.header__logo-img').style["width"] = "80px";
//     document.querySelector('.header__logo-img').style["height"] = "80px";

//     for (let index in headerStyle) {
//       element.style[index] = "initial";
//     }
//   }
// };
// var x = window.matchMedia("(min-width: 1200px)")
// console.log(x);
// window.onscroll = function () {
//   scrollFunction();
// };

let scrollFunction = () => {
  let element = document.querySelector(".header");

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    element.classList.add("header-scroll");
    // element.style.transform = "translateY(0%)";

  } else {
    // element.style.transform = "translateY(-100%)";
    element.classList.remove("header-scroll");
    // element.style.removeProperty("transform");
    // x = setTimeout(function () {
    //   {
    //     element.classList.remove("header-scroll");
    //     element.style.transform = "translateY(0%)";
    //   }
    // }, 5000);
  }
};

window.onscroll = function () {
  scrollFunction();
};
