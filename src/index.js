document.addEventListener("DOMContentLoaded", function () {
  getImages();
  getBreeds();
  listenToMenu();
});

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => {
      const images = [...json.message];
      placeImages(images);
    });
}

function placeImages(images) {
  const holder = document.querySelector("#dog-image-container");
  holder.style.display = "flex";
  images.forEach((imageUrl) => {
    const pic = document.createElement("img");
    pic.src = imageUrl;
    holder.appendChild(pic);
  });
}

function getBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {
      for (const breed in json.message) {
        listBreed(breed);
      }
    });
}

function listBreed(breed) {
  const breedList = document.querySelector("#dog-breeds");
  const listItem = document.createElement("li");
  listItem.innerText = breed;
  breedList.appendChild(listItem);
  listItem.addEventListener("click", indicateSelection);
}

function indicateSelection(e) {
  if (e.target.style.color == "") {
    e.target.style.color = "red";
  } else {
    e.target.style.color = "";
  }
}

function listenToMenu() {
  const dropDown = document.querySelector('#breed-dropdown')
  dropDown.addEventListener('change', filterBreeds)
}

function filterBreeds(e) {
  const letter = e.target.value
  console.log(e.target.value)
  const breedList = document.querySelector("#dog-breeds")
  while (breedList.firstChild) {
    breedList.removeChild(breedList.firstChild)
  }
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(json => {
    for (const breed in json.message) {
      if (breed.startsWith(letter)) {
        listBreed(breed)
      }
    }
  })
}