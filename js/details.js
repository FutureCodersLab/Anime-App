import { getAnimeDetails } from "./api.js";
import { toggleFavorite, updateLikeButton } from "./favorites.js";
import { getAnimeDetailsStructure } from "./structures.js";

const detailsContainer = document.getElementById("details-container");
const animeId = new URLSearchParams(window.location.search).get("id");

document.addEventListener("DOMContentLoaded", async () => {
    if (!animeId) {
        detailsContainer.innerHTML = `<p class="error-message">No anime ID provided.</p>`;
        return;
    }

    const anime = await getAnimeDetails(animeId);
    if (!anime) {
        detailsContainer.innerHTML = `<p class="error-message">Failed to load anime details.</p>`;
        return;
    }

    detailsContainer.innerHTML = getAnimeDetailsStructure(anime);

    const backButton = document.querySelector(".back");
    backButton.addEventListener("click", () => {
        window.history.back();
    });

    const likeButton = document.querySelector(".like");
    updateLikeButton(anime, likeButton);
    likeButton.addEventListener("click", () => {
        toggleFavorite(anime, likeButton);
    });
});
