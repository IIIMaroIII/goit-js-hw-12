import Axios from 'axios';
import { showNotification } from './render-functions';
import iconError from '../img/error.svg';

// Error notification object

const notificationEmptyResponse = {
  title: 'Error',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  backgroundColor: '#ef4040',
  icon: iconError,
};

// Class PixabayAPI

export class PixabayAPI {
  static #KEY = '42204653-dde2ea6d5277704e408fb2018';
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.q = null;
    this.page = 1;
    this.per_page = 15;
    this.totalResult = 0;
  }

  // Method getImages()

  async getImages() {
    const axios = Axios.create({
      baseURL: this.BASE_URL,
      params: {
        key: PixabayAPI.#KEY,
        q: this.q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.per_page,
        page: this.page,
      },
    });
    const res = await axios.get('');
    return res.data;
  }

  // Check the response from server (shoudn`t be empty)

  isResponseEmpty(hits) {
    const btnLoadMore = document.querySelector('.js-loadMore');
    if (hits.length !== 0) {
      btnLoadMore.classList.remove('hidden');
      return hits;
    } else {
      btnLoadMore.classList.add('hidden');
      return showNotification(notificationEmptyResponse);
    }
  }
}
