export const getFavorites = () =>
    JSON.parse(localStorage.getItem("anime-favorites")) || [];

export const saveFavorites = (favorites) => {
    localStorage.setItem("anime-favorites", JSON.stringify(favorites));
};

export const toggleFavorite = async (anime, likeButton) => {
    let favorites = getFavorites();

    const isFavorite = favorites.some(({ mal_id }) => mal_id === anime.mal_id);

    if (isFavorite) {
        favorites = favorites.filter(({ mal_id }) => mal_id !== anime.mal_id);
    } else {
        favorites.push(anime);
    }

    saveFavorites(favorites);
    updateLikeButton(anime, likeButton);
};

export const updateLikeButton = (anime, likeButton) => {
    if (!likeButton) return;
    const favorites = getFavorites();
    const heart = favorites.some(({ mal_id }) => mal_id === anime.mal_id)
        ? "heart-full"
        : "heart-outline";
    likeButton.src = `./icons/${heart}.svg`;
};
