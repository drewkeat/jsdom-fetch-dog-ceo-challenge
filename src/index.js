const IMAGES = [];

document.addEventListener("DOMContentLoaded", function () {
  getImages();
  placeImages();
});

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then((response) => response.json())
  .then((json) => Object.assign(IMAGES, json.message));
}

function placeImages() {
  IMAGES.forEach((data) => console.log(data));
}