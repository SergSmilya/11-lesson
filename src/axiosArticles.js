import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY_API = '33022988-27197d7be627ee112ee97c311';

export default class NewAxiosArticles {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  searchImg() {
    return axios
      .get(
        `${URL}?key=${KEY_API}&q=${this.searchQuery}&page=${this.page}&per_page=3&image_type=photo&orientation=horizontal&safesearch=true`
      )
      .then(response => {
        return response;
      })
      .then(data => {
        this.page += 1;
        return data.data.hits;
      });
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
