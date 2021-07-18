const openMap = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("overflow-hidden");
  body.classList.add("map-active");

  document.getElementById("floating-nav--list").style.display = "none";
  document.getElementById("floating-nav--map").style.display = "flex";
};

const closeMap = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("overflow-hidden");
  body.classList.remove("map-active");

  document.getElementById("floating-nav--list").style.display = "flex";
  document.getElementById("floating-nav--map").style.display = "none";
};

const openFilter = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("overflow-hidden");
  body.classList.add("filter-active");
};

const closeFilter = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("overflow-hidden");
  body.classList.remove("filter-active");
};

const toggleMapCarousel = () => {
  const element = document.getElementById("map-dialog__content__info");
  const floatingNav = document.getElementById("floating-nav--map");

  if (element.classList.contains("map-dialog__content__info--active")) {
    element.classList.remove("map-dialog__content__info--active");
    floatingNav.style.zIndex = 11;
  } else {
    element.classList.add("map-dialog__content__info--active");
    floatingNav.style.zIndex = 10;
  }
};

const replayHotelCards = () => {
  const elements = document.getElementsByClassName("hotel-card");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i].parentElement;
    const elementClone = element.cloneNode(true);
    const parent = element.parentElement;

    if (parent.children.length < 6) {
      parent.appendChild(elementClone);
    }
  }
};

const checkWindowSize = () => {};

document.addEventListener("DOMContentLoaded", () => {
  replayHotelCards();
  checkWindowSize();
});

window.addEventListener("resize", () => {
  checkWindowSize();
});
