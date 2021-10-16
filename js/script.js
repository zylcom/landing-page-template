// const banner = [...document.querySelectorAll("#banner-wrapper img")];

// let index = 0;
// const changeCarousel = () => {
//   banner[index].classList.toggle("active");

//   if (index >= banner.length - 1) {
//     index = 0;
//   } else {
//     index++;
//   }
//   banner[index].classList.toggle("active");
// };

// setInterval(() => {
//   changeCarousel();
// }, 5000);

const navLink = document.getElementsByClassName("nav-link");

for (const link of navLink) {
  link.addEventListener("click", function () {
    for (const item of navLink) {
      item.classList.remove("active");
    }
    this.classList.add("active");
  });
}

function scrollUp() {
  const scrollUp = document.querySelector(".scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show");
  else scrollUp.classList.remove("show");
}

window.addEventListener("scroll", scrollUp);
