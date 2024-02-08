import axios from 'axios';

export class SearchApi {
  #KEY = '42204653-dde2ea6d5277704e408fb2018';
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  getImages(q) {
    const searchParams = new URLSearchParams({
      key: this.#KEY,
      q: q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 50,
    });
    const url = `${this.BASE_URL}?${searchParams}`;
    return fetch(url).then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });
  }
}
