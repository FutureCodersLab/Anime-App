export const API_BASE = "https://api.jikan.moe/v4";

export const getTrendingAnimes = async () => {
    try {
        const response = await fetch(`${API_BASE}/top/anime`);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching anime list:", error);
        return [];
    }
};

export const getSearchResult = async (query) => {
    try {
        const response = await fetch(`${API_BASE}/anime?q=${query}`);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching anime search result:", error);
        return [];
    }
};

export const getAnimeDetails = async (id) => {
    try {
        const response = await fetch(`${API_BASE}/anime/${id}/full`);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching anime details:", error);
        return null;
    }
};
