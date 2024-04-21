const carouselImages = document.querySelectorAll(".carousel-image");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
});

showImage(currentIndex);
