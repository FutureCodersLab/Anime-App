import { getAnimeDetails } from "./api.js";
import { toggleFavorite, updateLikeButton } from "./favorites.js";

const animeId = new URLSearchParams(window.location.search).get("id");

const detailsContainer = document.getElementById("details-container");
const img = document.querySelector(".image-container img");
const titleName = document.querySelector("h2");
const rating = document.querySelector(".info .rating");
const genreNames = document.querySelector(".info .genres");
const description = document.querySelector("p");
const backButton = document.querySelector(".back");
const likeButton = document.querySelector(".like");

document.addEventListener("DOMContentLoaded", async () => {
    if (!animeId) {
        detailsContainer.innerHTML = `<p class="error-message">No anime ID provided.</p>`;
        return;
    }

    const anime = await getAnimeDetails(animeId);
    console.log(anime);
    if (!anime) {
        detailsContainer.innerHTML = `<p class="error-message">Failed to load anime details.</p>`;
        return;
    }
    const { images, title, score, synopsis } = anime;
    const genres = anime.genres?.map(({ name }) => name).join(", ");

    img.src = `${images?.jpg?.large_image_url}`;
    titleName.textContent = title;
    rating.textContent = `Rating: ${score}`;
    genreNames.textContent = `Genres: ${genres}`;
    description.textContent = synopsis;

    updateLikeButton(anime, likeButton);
    likeButton.addEventListener("click", () => {
        toggleFavorite(anime, likeButton);
    });

    backButton.addEventListener("click", () => {
        window.history.back();
    });
});
