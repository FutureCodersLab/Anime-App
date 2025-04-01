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
