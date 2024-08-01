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
