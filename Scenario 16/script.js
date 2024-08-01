document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    const apiKey = 'ea96669e77ec5f1a1ca37df38864656f';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    if (data.cod === 200) {
        const { name, main, weather } = data;
        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
    }
}
