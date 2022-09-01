mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Vuc2Vib3giLCJhIjoiY2lxajNoYnNsMDBlOWkybmh2ZnhxZmMwZyJ9.inXfNk5nJf92mgUeBIEmtA";
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

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h6>einLaden Billerbeck</h6>"
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
  .setPopup(popup)
  .addTo(map);

const afg2 = new mapboxgl.Marker({ color: "#008FFB" })
  .setLngLat([7.285652, 51.973461])
  .setPopup(popup)
  .addTo(map);

const afg3 = new mapboxgl.Marker({ color: "#f9ce1d" })
  .setLngLat([7.293892, 51.976422])
  .setPopup(popup)
  .addTo(map);

const afg4 = new mapboxgl.Marker({ color: "#f9a3a4" })
  .setLngLat([7.287712, 51.972615])
  .setPopup(popup)
  .addTo(map);
