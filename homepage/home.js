// Modal Control Setup
const modal = document.getElementById('exploreModal');
const openBtn = document.getElementById('openExploreModal');
const closeBtn = document.getElementById('closeExploreModal');
if(openBtn && closeBtn) {
    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
}

// Fixed Home Ticker Stream Engine with Localhost CORS bypass capabilities
async function fetchGovernmentDeclarations() {
    const trackContainer = document.getElementById('tickerTrack');
    if (!trackContainer) return;
    
    const irsRssUrl = 'https://www.irs.gov/newsroom/article/index.rss';
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(irsRssUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const wrapperData = await response.json();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(wrapperData.contents, "text/xml");
        const items = xmlDoc.getElementsByTagName("item");

        if (items.length > 0) {
            trackContainer.innerHTML = ''; // Clear loading text
            
            const maxItems = Math.min(items.length, 5);
            for (let i = 0; i < maxItems; i++) {
                const title = items[i].getElementsByTagName("title")[0]?.textContent || "";
                const pubDate = items[i].getElementsByTagName("pubDate")[0]?.textContent || "";
                
                const dateObj = new Date(pubDate);
                const formattedDate = isNaN(dateObj) ? "Now" : dateObj.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                
                const announcementDiv = document.createElement('div');
                announcementDiv.className = 'ticker-news-item';
                announcementDiv.innerHTML = `<span>[${formattedDate}]</span> ${title}`;
                
                trackContainer.appendChild(announcementDiv);
            }
            
            initializeTickerAnimation(maxItems);
        } else {
            throw new Error();
        }
    } catch (error) {
        trackContainer.innerHTML = `
            <div class="ticker-news-item">
                <span>[Live Updates]</span> Click here to view latest federal compliance changes and tax alerts.
            </div>`;
    }
}

function initializeTickerAnimation(itemCount) {
    let currentIndex = 0;
    const track = document.getElementById('tickerTrack');
    if (!track || itemCount <= 1) return;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % itemCount;
        track.style.transform = `translateY(-${currentIndex * 24}px)`;
    }, 4500);
}

window.addEventListener('DOMContentLoaded', fetchGovernmentDeclarations);