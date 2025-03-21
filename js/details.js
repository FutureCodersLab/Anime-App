import { fetchAnimeDetails } from "./animeService.js";
import { toggleFavorite, updateLikeButton } from "./favorites.js";
import { getAnimeDetailsStructure } from "./structures.js";

const detailContainer = document.getElementById("details-container");
const animeId = new URLSearchParams(window.location.search).get("id");

const loadAnimeDetail = async () => {
    if (!animeId) {
        detailContainer.innerHTML = `<p class="error-message">No anime ID provided.</p>`;
        return;
    }

    const anime = await fetchAnimeDetails(animeId);
    console.log(anime);
    if (!anime) {
        detailContainer.innerHTML = `<p class="error-message">Failed to load anime details.</p>`;
        return;
    }

    detailContainer.innerHTML = getAnimeDetailsStructure(anime);

    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", () => {
        window.history.back();
    });

    const likeButton = document.querySelector(".like-button");
    updateLikeButton(animeId, likeButton);
    likeButton.addEventListener("click", () => {
        toggleFavorite(animeId, likeButton);
    });
};

loadAnimeDetail();
