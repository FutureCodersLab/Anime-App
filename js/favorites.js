export const getFavorites = () =>
    JSON.parse(localStorage.getItem("animeFavorites")) || [];

export const saveFavorites = (favorites) => {
    localStorage.setItem("animeFavorites", JSON.stringify(favorites));
};

export const toggleFavorite = (animeId, likeButton) => {
    const id = String(animeId);
    let favorites = getFavorites();
    const isFavorite = favorites.includes(id);

    if (isFavorite) {
        favorites = favorites.filter((favId) => favId !== id);
    } else {
        favorites.push(id);
    }
    saveFavorites(favorites);
    updateLikeButton(id, likeButton);
};

export const updateLikeButton = (animeId, likeButton) => {
    if (!likeButton) return;
    const id = String(animeId);
    const favorites = getFavorites();
    likeButton.innerHTML = favorites.includes(id)
        ? `<img src="./icons/red-heart.svg" class="heart-icon" />`
        : `<img src="./icons/heart.svg" class="heart-icon" />`;
};
