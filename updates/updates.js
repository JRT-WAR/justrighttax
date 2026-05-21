async function loadNews() {
    const feedContainer = document.getElementById('news-container'); // Ensure you have this ID in your HTML
    const rssUrl = 'https://www.irs.gov/newsroom/article/index.rss';
    
    // Using a more reliable CORS proxy
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        if (items.length === 0) throw new Error("No items found");

        feedContainer.innerHTML = ""; // Clear "Syncing..." text
        
        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const div = document.createElement("div");
            div.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
            feedContainer.appendChild(div);
        });
    } catch (error) {
        console.error("Fetch error:", error);
        feedContainer.innerHTML = "<p>Unable to load news updates at this time. Please check your connection or try again later.</p>";
    }
}

// Call the function on load
document.addEventListener("DOMContentLoaded", loadNews);