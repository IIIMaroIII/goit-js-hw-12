import Axios from 'axios';
import showNotification from '../scripts/showNotification_iziToast';
import iconError from '../img/error.svg';

export class SearchApi {
  #KEY = '42204653-dde2ea6d5277704e408fb2018';
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  async getImages(q) {
    const axios = Axios.create({
      baseURL: this.BASE_URL,
      params: {
        key: this.#KEY,
        q: q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
      },
    });
    const res = await axios.get('');
    return res.data;
  }

  isResponseEmpty(hits) {
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
}
