window.addEventListener('DOMContentLoaded', function () {
  fetch(
    "https://script.google.com/macros/s/AKfycbyrmlcB0UWyMng5f1m8kPM8ZDxTjNeGmluPaU0ty-e7_anlpaJuqhZ8SjakSE47XII7/exec"
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      const idea = data[Math.floor(Math.random() * data.length)];
      document.getElementById("ideaOfTheDay").innerText = idea;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
})

function loadNewIdea () {
  fetch(
    "https://script.google.com/macros/s/AKfycbyrmlcB0UWyMng5f1m8kPM8ZDxTjNeGmluPaU0ty-e7_anlpaJuqhZ8SjakSE47XII7/exec"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const idea = data[Math.floor(Math.random() * data.length)];
      document.getElementById("ideaOfTheDay").innerText = idea;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}