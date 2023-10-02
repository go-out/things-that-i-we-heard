'use strict'

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
