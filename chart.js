// URL to fetch data
// https://api.opensensemap.org/boxes/:senseBoxId/data/:sensorId?from-date=fromDate&to-date=toDate&download=true&format=json

// TODO define senseboxes and ids

var options = {
  color: [],
  series: [
    {
      name: "AFG 1",
      data: [
        17, 16, 16, 16, 15, 15, 14, 14, 14, 16, 19, 21, 22, 23, 24, 24, 24, 24,
        24, 24, 21, 19, 18, 17, 16,
      ],
    },
    {
      name: "AFG 2",
      data: [
        15, 16, 16, 16, 15, 14, 15, 16, 17, 18, 20, 22, 22, 24, 25, 25, 25, 26,
        25, 25, 23, 21, 19, 17, 15,
      ],
    },
    {
      name: "AFG 3",
      data: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5,
      ],
    },
    {
      name: "AFG 4",
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
  console.log(options);
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
      options.title.text = "UV Stärke";
      options.yaxis[0].title.text = "UV Stärke in μW / cm²";
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
