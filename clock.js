var clock = document.querySelector("#clock");

// Inject the time in the UI
var renderTime = function () {
  var time = new Date();
  clock.textContent = time.toLocaleString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
};

// Update the time every second
setInterval(renderTime, 1000);
