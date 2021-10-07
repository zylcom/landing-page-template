const banner = [...document.querySelectorAll("#banner-wrapper img")];

let index = 0;
const changeCarousel = () => {
  banner[index].classList.toggle("active");

  if (index >= banner.length - 1) {
    index = 0;
  } else {
    index++;
  }
  banner[index].classList.toggle("active");
};

setInterval(() => {
  changeCarousel();
}, 5000);

function scrollUp() {
  const scrollUp = document.querySelector(".scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show");
  else scrollUp.classList.remove("show");
}

window.addEventListener("scroll", scrollUp);
