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
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
            title="${tags}"
          />
        </a>
        <ul class="gallery-info">
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Likes</h3>
        <p class="gallery-infoText">${likes}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Views</h3>
        <p class="gallery-infoText">${views}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Comments</h3>
        <p class="gallery-infoText">${comments}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Downloads</h3>
        <p class="gallery-infoText">${downloads}</p>
        </li>
        </ul></li>`;
      }
    )
    .join('')
    .trim();
  return galleryItem;
}
