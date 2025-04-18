function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

async function fetchRSS() {
  const rssToJson = "https://api.rss2json.com/v1/api.json?rss_url=";
  const feedURL = "https://www.trthaber.com/manset_articles.rss";
  try {
    const res = await fetch(rssToJson + encodeURIComponent(feedURL));
    const data = await res.json();
    const headlines = data.items.map(item => item.title).join(" | ");
    document.getElementById("newsTicker").innerText = headlines;
  } catch (e) {
    console.error("RSS Verisi Yüklenemedi:", e);
    document.getElementById("newsTicker").innerText = "Haberler yüklenemedi.";
  }
}
fetchRSS();
