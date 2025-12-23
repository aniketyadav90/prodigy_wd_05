// 1. Corrected: Just the key, not the whole URL
const apiKey = '56da1d54a53f8c3e9cbc972f5446958e'; 

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const geoBtn = document.getElementById('geoBtn');
const weatherResult = document.getElementById('weatherResult');

async function fetchWeather(query) {
    // 2. Corrected: Use the 'query' variable passed into the function
    const url = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            // This will now tell you exactly what went wrong (e.g., "city not found")
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('wind').innerText = data.wind.speed;
    weatherResult.classList.remove('hidden');
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    // Passes "q=London" or whatever the user typed
    if (city) fetchWeather(`q=${city}`);
});

geoBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            // Passes "lat=12.3&lon=45.6"
            fetchWeather(`lat=${latitude}&lon=${longitude}`);
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});