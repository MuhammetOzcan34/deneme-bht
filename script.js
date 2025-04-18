// TCMB Döviz Kurları
function fetchExchangeRates() {
    const widget = document.getElementById("exchange-rates");
    widget.innerHTML = `
        <h3>Döviz Kurları</h3>
        <p>USD: 23.50</p>
        <p>EUR: 25.30</p>
    `;
}

// İstanbul Hava Durumu
function fetchWeather() {
    const widget = document.getElementById("weather");
    widget.innerHTML = `
        <h3>İstanbul Hava Durumu</h3>
        <p>Açık</p>
        <p>Sıcaklık: 22°C</p>
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
function fetchNews() {
    const newsTicker = document.getElementById("news-ticker");
    newsTicker.innerHTML = `
        Türkiye ve dünyadan haberler: Örnek Haber 1 | Örnek Haber 2 | Örnek Haber 3
    `;
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", () => {
    fetchExchangeRates();
    fetchWeather();
    fetchNews();
    updateClock();
    setInterval(updateClock, 1000); // Her saniye saat güncelle
});
