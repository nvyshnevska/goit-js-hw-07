import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function makeGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>`;
    })
    .join("");
}

const modal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
