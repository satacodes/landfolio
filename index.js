/**** TypedJs functionality */
// let options = {
//   strings: [
//     "Full Stack Developer",
//     "Management Accountant",
//     "Financial Auditor",
//     "Tax Consultant",
//   ],
//   typeSpeed: 50,
//   backSpeed: 25,
//   loop: true,
// };

// let typed = new Typed("#typed-output", options);

/**** Menu tab selection highlighting functionality */
window.onscroll = () => {
  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll("header nav a");
  sections.forEach((sec) => {
    const id = sec.getAttribute("id");
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");

        const lnk = document.querySelector(".navbar a[href*=" + id + "  ]");
        lnk.classList.add("active");
      });
    }
  });

  /**** sticky navbar functionality */
  const stickyHead = document.querySelector("header");
  stickyHead.classList.toggle("sticky", window.scrollY > 100);
};
