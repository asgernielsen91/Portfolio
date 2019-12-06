"use strict";
console.log("Er der forbindelse?");

(function() {
  let figure = document.getElementsByClassName('fx-image-wrapper')[0];
  let img = figure.getElementsByClassName('fx-image')[0];
  const config = {
    rootMargin: '0px 0px -300px 0px'
  };
  const observer = new IntersectionObserver(revealImage, config);
  observer.observe(figure);

  function revealImage(entry, observer) {
    if (entry[0].intersectionRatio > 0) {
      img.classList.add('fx-image--animate');
      observer.unobserve(figure);
    }
  }
}());