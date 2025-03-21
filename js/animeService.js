export const API_BASE = "https://api.jikan.moe/v4";

export const fetchAnimeList = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE}/${endpoint}`);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching anime list:", error);
        return [];
    }
};

export const fetchAnimeDetails = async (id) => {
    try {
        const response = await fetch(`${API_BASE}/anime/${id}/full`);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching anime details:", error);
        return null;
    }
};
