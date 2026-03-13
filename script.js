/* IMAGE VIEWER */

const cards = document.querySelectorAll(".work-card img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

cards.forEach(img => {
  img.onclick = () => {
    viewer.classList.add("active");
    viewerImg.src = img.src;
  };
});

viewer.onclick = () => {
  viewer.classList.remove("active");
};


/* SLIDER BUTTON */

const sliders = document.querySelectorAll(".slider-wrapper");

sliders.forEach(wrapper => {

  const slider = wrapper.querySelector(".work-slider");
  const prev = wrapper.querySelector(".prev");
  const next = wrapper.querySelector(".next");

  next.addEventListener("click", () => {
    slider.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  });

  prev.addEventListener("click", () => {
    slider.scrollBy({
      left: -400,
      behavior: "smooth"
    });
  });

});