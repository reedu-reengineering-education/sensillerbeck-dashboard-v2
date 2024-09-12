const ICON_MAPPING = {
    'clear-day': 'wi-day-sunny',
    'clear-night': 'wi-night-clear',
    'partly-cloudy-day': 'wi-day-cloudy',
    'partly-cloudy-night': 'wi-night-cloudy',
    'cloudy': 'wi-cloud',
    'fog': 'wi-fog',
    'wind': 'wi-strong-wind',
    'rain': 'wi-rain',
    'sleet': 'wi-sleet',
    'snow': 'wi-snow',
    'hail': 'wi-hail',
    'thunderstorm': 'wi-thunderstorm',
  }

       



var clock = document.querySelector("#Wetter");
var Icon = document.querySelector("#WetterIcon");
var Wettervergleich= document.querySelector("#Wettervergleich")
var renderTime = async function () {
    const apiURL = 'https://api.brightsky.dev/weather?lat=52&lon=7.6&date=2024-09-11';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.weather && data.weather.length > 0){
            var time = new Date();
            time.getHours();
            clock.textContent = data.weather[time.getHours()-1].temperature +"°"
            const icons = data.weather.map((record) => record.icon.replace('-night', '-day'));
            document.getElementById('weather-day-icon').className = `wi ${ ICON_MAPPING[mode(icons)] }`;
            Icon.textContent = data.weather[time.getHours()-1].Icon 
        }else {
            clock.textContent = "No weather data available";
        }
    } catch (error){
        console.error('Error fetching weather data:', error);

    }
}
   
    setInterval(renderTime, 1000);
    
    var TempVergleich = async function () {
        const apiURL = 'https://long-term-average.klimadashboard-ms.reedu.de/';
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
    
            if (data.value){
                var time = new Date();
                Wettervergleich.textContent = Math.round(data.value* 100) / 100 +"° wärmer im Vergleich zu den gleichen Monaten in den Jahren 1961 bis 1990"
            }else {
                Wettervergleich.textContent = "Nix mit Wetter";
            }
        } catch (error){
            console.error('Error fetching weather data:', error);
    
        }
    }
       
        setInterval(TempVergleich, 1000);
    
    
    
   