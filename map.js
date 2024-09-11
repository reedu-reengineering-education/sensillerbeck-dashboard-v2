mapboxgl.accessToken =
  "pk.eyJ1IjoicGF1bGFzY2hhcmYiLCJhIjoiY2t0NDZ5d3hhMTFhcDJwcjBrOGZlaWl6ciJ9.A927qwGVY4MI7sm_bIt1Ig";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [7.291464358330945, 51.980786470159444],
  zoom: 12,
  projection: "globe", // display the map as a 3D globe
});

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

map.on("load", function () {
  map.resize();
});

function goToOnMap (game) {

  if (game === 'obst') {
    map.flyTo({
      center: [7.290480442988532, 51.9771282193672],
      zoom: 19,
      duration: 2000,
      essential: true,
    });
  } else if (game === 'kraeuter') {
    map.flyTo({
      center: [7.290539367548513, 51.972629696540494],
      zoom: 19,
      duration: 2000,
      essential: true,
    });
  }
}

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<div><h6>einLaden Billerbeck</h6><ul><li>Obst-Ralley</li></ul></div>"
);

const popupAFG1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h6>Wetterstation 1</h6>"
);

const popupAFG2 = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h6>Wetterstation 2</h6>"
);

const popupAFG3 = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h6>Wetterstation 3</h6>"
);

const popupAFG4 = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h6>Wetterstation 4</h6>"
);

const popupRundgang1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h6>Kräuter-Ralley</h6>"
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
  .setLngLat([7.290480442988532, 51.9771282193672])
  .setPopup(popup)
  .addTo(map);

// openSenseMap / AFG senseBox
const afg1 = new mapboxgl.Marker({ color: "#2b908f" })
  .setLngLat([7.289686, 51.978748])
  .setPopup(popupAFG1)
  .addTo(map);

const afg2 = new mapboxgl.Marker({ color: "#008FFB" })
  .setLngLat([7.285652, 51.973461])
  .setPopup(popupAFG2)
  .addTo(map);

const afg3 = new mapboxgl.Marker({ color: "#f9ce1d" })
  .setLngLat([7.293892, 51.976422])
  .setPopup(popupAFG3)
  .addTo(map);

const afg4 = new mapboxgl.Marker({ color: "#f9a3a4" })
  .setLngLat([7.287712, 51.972615])
  .setPopup(popupAFG4)
  .addTo(map);

const rundgang1 = new mapboxgl.Marker({ color: "#0000FF"})
  .setLngLat([7.290539367548513, 51.972629696540494])
  .setPopup(popupRundgang1)
  .addTo(map);

const bikes = new mapboxgl.Marker({ color: "red" })
  .setLngLat([7.297196969341912, 51.98141154947279])
  .addTo(map);
