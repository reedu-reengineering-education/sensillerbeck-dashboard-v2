mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Vuc2Vib3giLCJhIjoiY2lxajNoYnNsMDBlOWkybmh2ZnhxZmMwZyJ9.inXfNk5nJf92mgUeBIEmtA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [12.550343, 55.665957],
  zoom: 8,
  projection: "globe", // display the map as a 3D globe
});

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
  .setLngLat([12.554729, 55.70651])
  .addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
  .setLngLat([12.65147, 55.608166])
  .addTo(map);
