import { SearchApi } from '../scripts/SearchApi';
import showNotification from '../scripts/showNotification_iziToast';
import iconError from '../img/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryItemMarkup } from '../scripts/createGalleryMarkup';

// List of links
const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.form--btn'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

// Create prototype
const searchApi = new SearchApi();

// CSSloader style
refs.loader.style.display = 'none';

// Event 'submit'
refs.form.addEventListener('submit', onGetImages);

// Fetching images

async function onGetImages(e) {
  e.preventDefault();
  refs.loader.style.display = 'block';
  const inputValue = e.target.elements.formInput.value.trim().toLowerCase();
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
  const { hits, ...rest } = await searchApi.getImages(inputValue);
  try {
    refs.loader.style.display = 'none';
    searchApi.isResponseEmpty(hits);
    createAndRenderGallery(hits);
    e.target.reset();
  } catch (err) {
    refs.loader.style.display = 'none';
    showNotification('Error', err, 'red', iconError);
  }
}

// Creating and rendering markup of received images

async function createAndRenderGallery(obj) {
  let gallery = await new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  const markup = await createGalleryItemMarkup(obj);
  refs.gallery.innerHTML = markup;
  gallery.refresh();
}
