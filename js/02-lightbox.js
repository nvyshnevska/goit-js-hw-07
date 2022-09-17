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
      <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>
      </li>`;
    })
    .join("");
}

const modal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
