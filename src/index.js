import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewAxiosArticles from './axiosArticles';

const refs = {
  formEl: document.getElementById('search-form'),
  galleryEl: document.querySelector('.gallery'),
  loadMoreBTN: document.querySelector('.load-more'),
};

const newAxiosArticles = new NewAxiosArticles();

refs.formEl.addEventListener('submit', onFormSubmit);
refs.loadMoreBTN.addEventListener('click', onLoadMoreBtn);

function onFormSubmit(e) {
  e.preventDefault();

  newAxiosArticles.query = e.currentTarget.elements.searchQuery.value;

  newAxiosArticles.searchImg().then(hits => {
    if (hits.length === 0) {
      Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    // console.log(hits);
    markUpGallery(mapGallery(hits));
  });
}
function onLoadMoreBtn() {
  newAxiosArticles.searchImg().then(hits => console.log(hits));
}

function mapGallery(arr) {
  return arr.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `<div class="photo-card">
  <img data-src=${largeImageURL} src=${webformatURL} alt=${tags} loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`;
    }
  );
}

function markUpGallery(stringMarkUp) {
  refs.galleryEl.insertAdjacentHTML('beforeend', stringMarkUp);
}

function clearGallery() {
  refs.galleryEl.innerHTML = '';
}
