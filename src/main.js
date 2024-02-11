import { PixabayAPI } from './js/pixabay-api';
import {
  showNotification,
  createAndRenderGallery,
} from './js/render-functions';
import iconError from './img/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// List of links

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.form--btn'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.js-loadMore'),
};

// Notification Error object

const notificationError = {
  title: 'Error',
  message: 'We are sorry, but you have reached the end of search results.',
  backgroundColor: '#ef4040',
  icon: iconError,
};

// Create prototype
const pixabayApi = new PixabayAPI();

// "Load More" and "Loader" is hidden.
refs.loader.classList.add('hidden');
refs.btnLoadMore.classList.add('hidden');

// Event 'submit'
refs.form.addEventListener('submit', onGetImages);
refs.btnLoadMore.addEventListener('click', onLoadMore);

// Fetching images by Submit Event

async function onGetImages(e) {
  e.preventDefault();
  refs.loader.classList.remove('hidden');
  const inputValue = e.target.elements.formInput.value.trim().toLowerCase();
  pixabayApi.q = inputValue;
  pixabayApi.page = 1;

  refs.gallery.innerHTML = '';
  if (!pixabayApi.q) {
    refs.loader.classList.add('hidden');
    refs.btnLoadMore.classList.add('hidden');
    refs.gallery.innerHTML = '';
    notificationError.message =
      'Please do your searching request, fill out the input';
    return showNotification(notificationError);
  }
  try {
    const { hits, ...rest } = await pixabayApi.getImages();
    pixabayApi.totalResult = rest.total;
    refs.loader.classList.add('hidden');
    pixabayApi.isResponseEmpty(hits);
    createAndRenderGallery(hits);
    e.target.reset();
  } catch (err) {
    refs.loader.classList.add('hidden');
    notificationError.message = err;
    showNotification(notificationError);
  }
}

// Load more by click on button

async function onLoadMore(e) {
  try {
    pixabayApi.page += 1;
    const { hits, ...rest } = await pixabayApi.getImages();
    refs.loader.classList.add('hidden');
    createAndRenderGallery(hits);
    checkButtonStatus();
    smootherScrolling();
  } catch (err) {
    refs.loader.classList.add('hidden');
    showNotification('Error', err, 'red', iconError);
  }
}

// Checking the page number where you`re at.

function checkButtonStatus() {
  const maxPages = Math.ceil(pixabayApi.totalResult / pixabayApi.per_page);
  const isLastPage = maxPages === pixabayApi.page;
  if (isLastPage) {
    notificationError.message =
      'We are sorry, but you have reached the end of search results.';
    showNotification(notificationError);
    refs.btnLoadMore.classList.add('hidden');
  }
}

// Smooth scrolling when "Load more" button is pressed.

function smootherScrolling() {
  const galleryItemRef = document.querySelector('.gallery-item');
  const galleryItemDim = galleryItemRef.getBoundingClientRect();
  const scrollByNum =
    galleryItemDim.height * 2 + galleryItemDim.height / 2 + 24;
  window.scrollBy({
    top: scrollByNum,
    left: 0,
    behavior: 'smooth',
  });
}
