// document.addEventListener("DOMContentLoaded", function () {
//   let options = {
//     strings: [
//       "Full Stack Developer",
//       "Management Accountant",
//       "Financial Auditor",
//       "Tax Consultant",
//     ],
//     typeSpeed: 50,
//     backSpeed: 25,
//     loop: true,
//   };

//   let typed = new Typed("#typed-output", options);
// });

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let id = sec.getAttribute("id");
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");

        let lnk = document.querySelector(".navbar a[href*=" + id + "  ]");
        lnk.classList.add("active");
      });
    }
  });
};
