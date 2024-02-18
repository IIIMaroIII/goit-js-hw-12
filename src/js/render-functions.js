import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconCaution from '../img/caution.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function showNotification({
  title = 'Hello',
  message = 'Type in your message, please',
  backgroundColor = 'white',
  icon = iconCaution,
}) {
  return iziToast.show({
    titleSize: '16px',
    title: `${title}`,
    message: `${message}`,
    messageSize: '16px',
    closeOnEscape: true,
    position: 'topRight',
    backgroundColor: `${backgroundColor}`,
    iconUrl: `${icon}`,
  });
}

export function createGalleryItemMarkup(arr) {
  const galleryItem = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}">
          <img
            class="gallery__image"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
            title="${tags}"
          />
        </a>
        <ul class="info">
        <li class="info__item">
        <h3 class="info__title">Likes</h3>
        <p class="info__text">${likes}</p>
        </li>
        <li class="info__item">
        <h3 class="info__title">Views</h3>
        <p class="info__text">${views}</p>
        </li>
        <li class="info__item">
        <h3 class="info__title">Comments</h3>
        <p class="info__text">${comments}</p>
        </li>
        <li class="info__item">
        <h3 class="info__title">Downloads</h3>
        <p class="info__text">${downloads}</p>
        </li>
        </ul></li>`;
      }
    )
    .join('')
    .trim();
  return galleryItem;
}

export async function createAndRenderGallery(obj) {
  let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  const markup = createGalleryItemMarkup(obj);
  const galleryRef = document.querySelector('.gallery');
  galleryRef.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
