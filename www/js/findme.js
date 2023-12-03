'use strict'

function flyToStore(center) {
  map.flyTo({
    center: center,
    zoom: 17.5
  });
}

let center;

function geoFindMe() {
  const coordinates = document.getElementById('coordinates');

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    center = [longitude, latitude]

    let findme = new mapboxgl.Marker({
      color: "#111",
      draggable: true
    })
      .setLngLat(center)
      .addTo(map);

    findme.on('dragend', onDragEnd);

    // マーカーの座標を表示
    function onDragEnd() {
      const lngLat = findme.getLngLat();
      coordinates.innerHTML = `
      <i id="lng">${lngLat.lng}</i>,
      <i id="lat">${lngLat.lat}</i>
      `;

      // Mapbox リバースジオコーディング
      let uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?language=ja&access_token=${mapboxgl.accessToken}`;
      fetchData(uri).then(function (response) {
        return response.text().then(function (jsonStr) {
          var data = JSON.parse(jsonStr);
          var context = data.features[0].place_name.replace(/\,/g, "");
          document.querySelector('#address').textContent = context;
        });
      }).catch(err => { console.log(err); });

      async function fetchData(_uri) {
        const res = await fetch(_uri);
        const data = res;
        return data;
      };
    }
    
    flyToStore(center);
    onDragEnd()
  }

  function error() {
    coordinates.textContent = 'Unable to retrieve your location';
    center = [0, 0]
  }

  if (!navigator.geolocation) {
    coordinates.textContent = 'Geolocation is not supported by your browser';
    center = [0, 0]
  } else {
    coordinates.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

geoFindMe()