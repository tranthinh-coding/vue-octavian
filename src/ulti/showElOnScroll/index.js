"use strict";

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  let distance = 120;

  return rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance);
};

const loop = () => {
  let el_to_show = [...document.querySelectorAll(".show-on-scroll:not(.show-on-scroll.show)")];
  if (el_to_show.length) {
    el_to_show.forEach((el) => {
      if (isElInViewPort(el)) el.classList.add("show");
    });
  }
  scroll(loop);
};

export { loop };
