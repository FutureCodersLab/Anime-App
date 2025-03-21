import { fetchAnimeList, fetchAnimeDetails } from "./animeService.js";
import { toggleFavorite, getFavorites, updateLikeButton } from "./favorites.js";
import { getAnimeCardStructure } from "./structures.js";

const animeContainer = document.querySelector("#anime-container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const homeButton = document.querySelector("#home");
const favoritesButton = document.querySelector("#favorites");

const displayAnimeList = (animeList) => {
    animeContainer.innerHTML = "";
    animeList.forEach((anime) => {
        const div = document.createElement("div");
        div.innerHTML = getAnimeCardStructure(anime);
        animeContainer.appendChild(div);

        const details = div.querySelector(".overlay");
        details.addEventListener("click", () => {
            window.location.href = `details.html?id=${anime.mal_id}`;
        });

        const likeButton = div.querySelector(".like-button");
        updateLikeButton(anime.mal_id, likeButton);
        likeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(anime.mal_id, likeButton);
        });
    });
};

const loadTrendingAnime = async () => {
    const animeList = await fetchAnimeList("top/anime");
    displayAnimeList(animeList);
};

const searchAnime = async (query) => {
    if (!query) return;
    const animeList = await fetchAnimeList(
        `anime?q=${encodeURIComponent(query)}`
    );
    displayAnimeList(animeList);
    input.value = "";
};

const loadFavorites = async () => {
    const favs = getFavorites();
    if (!favs.length) {
        animeContainer.innerHTML = "<p>No favorites yet!</p>";
        return;
    }
    const animeList = await Promise.all(favs.map(fetchAnimeDetails));
    displayAnimeList(animeList.filter(Boolean));
};

document.addEventListener("DOMContentLoaded", () => {
    loadTrendingAnime();
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        searchAnime(input.value.trim());
    });
    homeButton.addEventListener("click", loadTrendingAnime);
    favoritesButton.addEventListener("click", loadFavorites);
});
