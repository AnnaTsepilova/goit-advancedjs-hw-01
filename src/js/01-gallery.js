import { galleryItems } from './gallery-items';
// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

setGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});

function createItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
 `;
}

function setGallery(galleryItems) {
  galleryRef.innerHTML = galleryItems
    .map(galleryItem => {
      return createItem(galleryItem);
    })
    .join('');
}
// Change code below this line

console.log(galleryItems);
