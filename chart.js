const devices = {
  afg1: {
    deviceId: "630df36655cdd4001b1372e1",
    temperature: "630df36655cdd4001b1372e8",
    humidity: "630df36655cdd4001b1372e7",
    pm10: "630df36655cdd4001b1372e4",
    pm25: "630df36655cdd4001b1372e3",
    illuminance: "630df36655cdd4001b1372e6",
    uv: "630df36655cdd4001b1372e5",
    pressure: "630df36655cdd4001b1372e2",
  },
  afg2: {
    deviceId: "630e0d7680edfb001cebfbe2",
    temperature: "630e0d7680edfb001cebfbe9",
    humidity: "630e0d7680edfb001cebfbe8",
    pm10: "630e0d7680edfb001cebfbe5",
    pm25: "630e0d7680edfb001cebfbe4",
    illuminance: "630e0d7680edfb001cebfbe7",
    uv: "630e0d7680edfb001cebfbe6",
    pressure: "630e0d7680edfb001cebfbe3",
  },
  afg3: {
    deviceId: "630e0eee80edfb001cecad91",
    temperature: "630e0eee80edfb001cecad98",
    humidity: "630e0eee80edfb001cecad97",
    pm10: "630e0eee80edfb001cecad94",
    pm25: "630e0eee80edfb001cecad93",
    illuminance: "630e0eee80edfb001cecad96",
    uv: "630e0eee80edfb001cecad95",
    pressure: "630e0eee80edfb001cecad92",
  },
  afg4: {
    deviceId: "630e0f2680edfb001ceccbd4",
    temperature: "630e0f2680edfb001ceccbdb",
    humidity: "630e0f2680edfb001ceccbda",
    pm10: "630e0f2680edfb001ceccbd7",
    pm25: "630e0f2680edfb001ceccbd6",
    illuminance: "630e0f2680edfb001ceccbd9",
    uv: "630e0f2680edfb001ceccbd8",
    pressure: "630e0f2680edfb001ceccbd5",
  },
  afg5: {
    deviceId: "66e165f9685dd00007c278ff",
    Personenanzahl: "66e165f9685dd00007c27900",
  },
  afg6: {
    deviceId: "66e16c23685dd00007cc6be1",
    CO2Werte: "66e16c23685dd00007cc6be5",
  },
};


window.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    fetch(
      "https://api.opensensemap.org/boxes/630df36655cdd4001b1372e1/data/630df36655cdd4001b1372e8?format=json"
    ),
    fetch(
      "https://api.opensensemap.org/boxes/630e0d7680edfb001cebfbe2/data/630e0d7680edfb001cebfbe9?format=json"
    ),
    fetch(
      "https://api.opensensemap.org/boxes/630e0eee80edfb001cecad91/data/630e0eee80edfb001cecad98?format=json"
    ),
    fetch(
      "https://api.opensensemap.org/boxes/630e0f2680edfb001ceccbd4/data/630e0f2680edfb001ceccbdb?format=json"
    ),
    fetch(
      "https://api.opensensemap.org/boxes/66e16c23685dd00007cc6be1/data/66e16c23685dd00007cc6be1?format=json"
    ),
    fetch(
      "https://api.opensensemap.org/boxes/66e165f9685dd00007c278ff/data/66e165f9685dd00007c278ff?format=json"
    )
  ])
    .then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then(function (data) {
      // {x: zeit, y: value}
      const measurements = data.map((entry, index) => {
        const sensor = entry.map((measurement) => ({
          x: measurement.createdAt,
          y: measurement.value,
        }));
        options.series.push({
          id: `AFG ${index+1}`,
          name: `AFG ${index+1}`,
          data: sensor,
        });
      });
      chart.updateOptions(options);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
});

function fetchMeasurements (deviceId, sensorId) {
  fetch(
    `https://api.opensensemap.org/boxes/${deviceId}/data/${sensorId}?format=json`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // {x: zeit, y: value}
      const measurements = data.map((entry) => ({
        x: entry.createdAt,
        y: entry.value,
      }));
      options.series = [
        {
          id: "AFG1",
          name: "AFG1",
          data: measurements,
        },
      ];
      chart.updateOptions(options);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

var options = {
  colors: ["#2b908f", "#008FFB", "#f9ce1d", "#f9a3a4"],
  series: [],
  chart: {
    toolbar: {
      show: true,
    },
    height: 300,
    type: "line",
    zoom: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Temperatur in Billerbeck",
    align: "middle",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    title: { text: "Uhrzeit" },
    type: "datetime",
  },
  yaxis: {
    title: { text: "Temperatur in °C" },
  },
  tooltip: {
    shared: true,
    x: {
      format: "dd.MM.yyyy HH:mm:ss",
    },
  },
};

function changePhenomena(phenomena) {
  switch (phenomena) {
    case "humidity":
      options.title.text = "Luftfeuchtigkeit";
      options.yaxis[0].title.text = "Luftfeuchtigkeit in %";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.humidity)
      break;
    case "pm10":
      options.title.text = "Feinstaub (PM10)";
      options.yaxis[0].title.text = "Feinstaub in μg/m³";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.pm10);
      break;
    case "pm25":
      options.title.text = "Feinstaub (PM 2.5)";
      options.yaxis[0].title.text = "Feinstaub in μg/m³";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.pm25);
      break;
    case "uv":
      options.title.text = "UV Intensität";
      options.yaxis[0].title.text = "UV Intensität in μW / cm²";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.uv);
      break;
    case "pressure":
      options.title.text = "Luftdruck";
      options.yaxis[0].title.text = "Luftdruck in hPa";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.pressure);
      break;
    case "temperature":
      options.title.text = "Temperatur";
      options.yaxis[0].title.text = "Temperatur in °C";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.temperature);
      break;
    case "illuminance":
      options.title.text = "Beleuchtungsstärke";
      options.yaxis[0].title.text = "Beleuchtungsstärke in lx";
      fetchMeasurements(devices.afg1.deviceId, devices.afg1.illuminance);
      break;
    case "visitors":
      options.title.text = "Besucher im Nachhaltigkeitszentrum";
      options.yaxis[0].title.text = "Personen";
      fetchMeasurements(devices.afg5.deviceId, devices.afg5.Personenanzahl);
      break;
    case "carbon dioxide":
      options.title.text = "CO2 im Nachhaltigkeitszentrum";
      options.yaxis[0].title.text = "CO2 in ppm";
      fetchMeasurements(devices.afg6.deviceId, devices.afg6.CO2Werte);
    break
    default:
      break;
  }

  chart.updateOptions(options);
}

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
