// TCMB Döviz Kurları
async function fetchExchangeRates() {
    const response = await fetch("https://api.exchangerate.host/latest?base=TRY");
    const data = await response.json();
    const rates = data.rates;
    const widget = document.getElementById("exchange-rates");
    widget.innerHTML = `
        <h3>Döviz Kurları</h3>
        <p>USD: ${rates.USD.toFixed(2)}</p>
        <p>EUR: ${rates.EUR.toFixed(2)}</p>
    `;
}

// İstanbul Hava Durumu
async function fetchWeather() {
    const apiKey = "YOUR_API_KEY"; // OpenWeatherMap API anahtarınızı buraya ekleyin
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Istanbul&units=metric&lang=tr&appid=${apiKey}`);
    const data = await response.json();
    const widget = document.getElementById("weather");
    widget.innerHTML = `
        <h3>İstanbul Hava Durumu</h3>
        <p>${data.weather[0].description}</p>
        <p>Sıcaklık: ${data.main.temp}°C</p>
    `;
}

// Saat
function updateClock() {
    const widget = document.getElementById("clock");
    const now = new Date();
    widget.innerHTML = `
        <h3>Saat</h3>
        <p>${now.toLocaleTimeString("tr-TR")}</p>
    `;
}

// RSS Haber Akışı
async function fetchNews() {
    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.hurriyet.com.tr/rss/anasayfa");
    const data = await response.json();
    const newsTicker = document.getElementById("news-ticker");
    newsTicker.innerHTML = data.items.map(item => item.title).join(" | ");
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", () => {
    fetchExchangeRates();
    fetchWeather();
    fetchNews();
    updateClock();
    setInterval(updateClock, 1000); // Her saniye saat güncelle
});
