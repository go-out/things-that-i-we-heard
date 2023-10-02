'use strict'

mapboxgl.accessToken = 'pk.eyJ1IjoicGVodSIsImEiOiJja3R4Y3diNmIybTg5Mm9waWgwYTdsc3FyIn0.lVvnPZ3aa6332EaWJIxPaQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pehu/cl2ap5cwu00d914mtfw4h3sn8',
    center: [0, 0],
    zoom: 2
});

// add markers to map
for (const marker of things.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'thing';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({
      offset: 12.5
    })
    .setHTML(
      `
      <h3>${marker.properties.title}</h3>
      <p class="date">
      ${marker.properties.date}</br>
      ${marker.properties.address}
      </p>
      `
    )
  )
  .addTo(map);

  el.addEventListener('click', (e) => {
    flyToStore(marker);
  });
}

function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}

// 回転する地球儀を作成
let userInteracting = 0;
function spinGlobe(){
  const zoom = map.getZoom();
  if(!userInteracting && zoom < 5) {
    let speed = 1;
    if(zoom > 3) {
      speed *= (5 - zoom) / 2
    }
    const lng = map.getCenter();
    lng.lng -= speed,
    map.easeTo({
      center: lng,
      easing: zoom => zoom
    })
  }
}

map.on("mousedown",()=>{userInteracting=!0}),
map.on("dragstart",()=>{userInteracting=!0}),
map.on("moveend",()=>{spinGlobe()}),
spinGlobe()