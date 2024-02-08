import { SearchApi } from '../scripts/SearchApi';
import showNotification from '../scripts/showNotification_iziToast';
import iconError from '../img/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryItemMarkup } from '../scripts/createGalleryMarkup';

const searchApi = new SearchApi();

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.form--btn'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';
refs.form.addEventListener('submit', onGetImages);

function onGetImages(e) {
  e.preventDefault();
  refs.loader.style.display = 'block';
  const inputValue = e.target.elements.formInput.value;
  if (!inputValue) {
    refs.loader.style.display = 'none';
    refs.gallery.innerHTML = '';
    return showNotification(
      'Error',
      'Please do your searching request, fill out the input',
      'red',
      iconError
    );
  }
  searchApi
    .getImages(inputValue.trim().toLowerCase())
    .then(({ hits, ...rest }) => {
      refs.loader.style.display = 'none';
      isResponseEmpty(hits);
      createAndRenderGallery(hits);
      e.target.reset();
    })
    .catch(err => {
      refs.loader.style.display = 'none';
      showNotification('Error', err, 'red', iconError);
    });
}

function isResponseEmpty(hits) {
  if (hits.length !== 0) {
    return hits;
  } else {
    showNotification(
      'Error',
      'Sorry, there are no images matching your search query. Please try again!',
      'red',
      iconError
    );
  }
}

function createAndRenderGallery(obj) {
  let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  const markup = createGalleryItemMarkup(obj);
  refs.gallery.innerHTML = markup;
  gallery.refresh();
}
