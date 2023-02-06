import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const KEY_API = '33022988-27197d7be627ee112ee97c311';

const refs = {
  formEl: document.getElementById('search-form'),
  galleryEl: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
let query = '';

function onFormSubmit(e) {
  e.preventDefault();

  console.log(e.currentTarget.elements.searchQuery.value);
  query = e.currentTarget.elements.searchQuery.value;

  searchImg(query).then(data => console.log(data));
}

function searchImg(query) {
  const imgCard = axios
    .get(
      `${URL}?key=${KEY_API}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => console.log(response));
  return imgCard;
}

// (`${URL}key=${KEY_API}`)
