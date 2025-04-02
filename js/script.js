import { getSearchResult, getTrendingAnimes } from "./api.js";
import { toggleFavorite, getFavorites, updateLikeButton } from "./favorites.js";
import { getAnimeCardStructure } from "./structures.js";

const animeContainer = document.querySelector("#anime-container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const homeButton = document.querySelector("#home");
const favoritesButton = document.querySelector("#favorites");

document.addEventListener("DOMContentLoaded", () => {
    loadTrendingAnimes();
    form.addEventListener("submit", submit);
    homeButton.addEventListener("click", loadTrendingAnimes);
    favoritesButton.addEventListener("click", loadFavorites);
});

const submit = (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    searchAnime(inputValue);
};

const loadTrendingAnimes = async () => {
    const animeList = await getTrendingAnimes();
    displayAnimeList(animeList);
};

const displayAnimeList = (animeList) => {
    animeContainer.innerHTML = "";
    animeList.forEach((anime) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = getAnimeCardStructure(anime);
        animeContainer.appendChild(div);

        const overlayDiv = div.querySelector(".overlay");
        overlayDiv.addEventListener("click", () => {
            window.location.href = `details.html?id=${anime.mal_id}`;
        });

        const likeButton = div.querySelector(".like");
        updateLikeButton(anime, likeButton);
        likeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(anime, likeButton);
        });
    });
};

const searchAnime = async (query) => {
    if (!query) return;
    const animeList = await getSearchResult(query);
    displayAnimeList(animeList);
    form.reset();
};

const loadFavorites = async () => {
    const favoritesList = getFavorites();

    if (!favoritesList.length) {
        animeContainer.innerHTML = "<p>No favorites yet!</p>";
        return;
    }

    displayAnimeList(favoritesList);
};
