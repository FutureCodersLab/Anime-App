export const getAnimeCardStructure = (anime) => `
    <div class="card">
      <img class="poster" src="${anime.images?.jpg?.image_url}"/>
      <p class="title">${anime.title}</p>
      <div class="overlay">
        <div class="details">
          <h4 class="details-title">${anime.title}</h4>
          <span class="anime-rating">Rating: ${anime.score}⭐</span>
          <span class="episodes">Episodes: ${anime.episodes}</span>
          <p class="description">${anime.synopsis}</p>
        </div>
        <button class="like-button" data-id="${anime.mal_id}">
          <label>Like</label>
          <img src="./icons/heart.svg" class="heart-icon" />
        </button>
      </div>
    </div>
`;

export const getAnimeDetailsStructure = (anime) => {
    const genreNames = anime.genres?.map((genre) => genre.name).join(", ");
    return `
      <div class="details-banner">
        <img src="${anime.images?.jpg?.large_image_url}" alt="${anime.title}"/>
        <button class="back-button">← Back</button>
      </div>
      <div class="content">
        <div class="title-like">
          <h2 class="title">${anime.title}</h2>
          <button class="like-button" data-id="${anime.mal_id}">
            <img src="./icons/heart.svg" class="heart-icon" />
          </button>
        </div>
        <div class="info">
          <span class="rating">Rating: ${anime.score}</span>
          <span class="genres">Genres: ${genreNames}</span>
        </div>
        <p class="description">${anime.synopsis}</p>
      </div>
  `;
};
