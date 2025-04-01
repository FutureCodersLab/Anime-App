export const getAnimeCardStructure = (anime) => {
    const { images, title, score, episodes, synopsis, mal_id } = anime;
    return `
    <div class="card">
      <img src="${images?.jpg?.image_url}"/>
      <h4>${title}</h4>
      <div class="overlay">
        <div class="details">
          <h4>${title}</h4>
          <span>Rating: ${score}⭐</span>
          <span>Episodes: ${episodes}</span>
          <p>${synopsis}</p>
        </div>
          <img class="like" src="./icons/heart-outline.svg" data-id="${mal_id}" />
      </div>
    </div>
`;
};

export const getAnimeDetailsStructure = (anime) => {
    const { images, title, score, synopsis } = anime;
    const genres = anime.genres?.map(({ name }) => name).join(", ");

    return `
      <div class="image-container">
        <img src="${images?.jpg?.large_image_url}"/>
        <button class="back">← Back</button>
      </div>
      <div class="content">
        <div class="header">
          <h2>${title}</h2>
          <img class="like" src="./icons/heart-outline.svg" />
        </div>
        <div class="info">
          <span>Rating: ${score}</span>
          <span>Genres: ${genres}</span>
        </div>
        <p>${synopsis}</p>
      </div>
  `;
};
