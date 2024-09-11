var renderTime = async function () {
    const apiURL = 'https://api.brightsky.dev/weather?lat=52&lon=7.6&date=2024-09-11';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.weather && data.weather.length > 0){
            clock.textContent = data.weather[0].temperature
        }else {
            clock.textContent = "No weather data available";
        }
    } catch (error){
        console.error('Error fetching weather data:', error);
    }
    )
    }