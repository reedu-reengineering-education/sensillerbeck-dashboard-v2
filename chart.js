// URL to fetch data
// https://api.opensensemap.org/boxes/:senseBoxId/data/:sensorId?from-date=fromDate&to-date=toDate&download=true&format=json

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
};

var options = {
  colors: ["#2b908f", "#008FFB", "#f9ce1d", "#f9a3a4"],
  series: [
    {
      name: "AFG1",
      data: [
        17, 16, 16, 16, 15, 15, 14, 14, 14, 16, 19, 21, 22, 23, 24, 24, 24, 24,
        24, 24, 21, 19, 18, 17, 16,
      ],
    },
    {
      name: "AFG2",
      data: [
        15, 16, 16, 16, 15, 14, 15, 16, 17, 18, 20, 22, 22, 24, 25, 25, 25, 26,
        25, 25, 23, 21, 19, 17, 15,
      ],
    },
    {
      name: "AFG3",
      data: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5,
      ],
    },
    {
      name: "AFG4",
      data: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
        2, 1, 0,
      ],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    height: 300,
    type: "line",
    zoom: {
      enabled: false,
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
    categories: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
  },
  yaxis: {
    title: { text: "Temperatur in °C" },
  },
};

function changePhenomena(phenomena) {
  switch (phenomena) {
    case "humidity":
      options.title.text = "Luftfeuchtigkeit";
      options.yaxis[0].title.text = "Luftfeuchtigkeit in %";
      break;
    case "pm10":
      options.title.text = "Feinstaub (PM10)";
      options.yaxis[0].title.text = "Feinstaub in μg/m³";
      break;
    case "pm25":
      options.title.text = "Feinstaub (PM 2.5)";
      options.yaxis[0].title.text = "Feinstaub in μg/m³";
      break;
    case "uv":
      options.title.text = "UV Intensität";
      options.yaxis[0].title.text = "UV Intensität in μW / cm²";
      break;
    case "pressure":
      options.title.text = "Luftdruck";
      options.yaxis[0].title.text = "Luftdruck in hPa";
      break;
    case "temperature":
      options.title.text = "Temperatur";
      options.yaxis[0].title.text = "Temperatur in °C";
      break;
    case "illuminance":
      options.title.text = "Beleuchtungsstärke";
      options.yaxis[0].title.text = "Beleuchtungsstärke in lx";
      break;
    default:
      break;
  }

  chart.updateOptions(options);
}

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
