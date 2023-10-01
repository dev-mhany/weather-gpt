document.getElementById('searchBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    
    fetchWeather(location);
});

function fetchWeather(city) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=964f1adddebb1539f1707cfb697575e5&lang=en`;
    
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("There was an error fetching the weather data:", error);
        });
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('weatherCondition').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;

    document.querySelector('.weather-info').style.display = 'block';
}
