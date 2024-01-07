const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listGallery = document.querySelector(".gallery");
const galleryCards = [];

images.forEach(function (image) {
  galleryCards.push(
    `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `
  );
});

listGallery.insertAdjacentHTML("afterbegin", galleryCards.join(""));
listGallery.style.cssText =
  "list-style: none; display: flex; flex-direction: column; gap: 10px; padding-left: 0;";
const imgEl = document.querySelectorAll("img");
imgEl.forEach((img) => (img.style.maxWidth = "100%"));
