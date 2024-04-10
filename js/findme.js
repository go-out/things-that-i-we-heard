'use strict'

// 端末の現在位置を取得
function geoFindMe() {
  const coordinates = document.getElementById('coordinates')

  // 現在位置の取得に成功した場合
  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let center = [longitude, latitude];

    map.flyTo({
      center: center,
      essential: true,
      zoom: 17.5
    })

    let findme = new mapboxgl.Marker({
      color: "#111",
      draggable: true
    })
      .setLngLat(center)
      .addTo(map)

    findme.on('dragend', onDragEnd)

    // ドラッグ可能マーカーの緯度・経度を取得
    function onDragEnd() {
      const lngLat = findme.getLngLat()
      coordinates.innerHTML = `
      <i id="lng">${lngLat.lng}</i>,
      <i id="lat">${lngLat.lat}</i>
      `;

      // リバースジオコーディング
      let uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?language=ja&access_token=${mapboxgl.accessToken}`;
      fetchData(uri).then(function (response) {
        return response.text().then(function (jsonStr) {
          var data = JSON.parse(jsonStr)
          var context = data.features[0].place_name.replace(/\,/g, "")
          document.querySelector('#address').textContent = context;
        })
      }).catch(err => { console.log(err) })

      async function fetchData(_uri) {
        const res = await fetch(_uri)
        const data = res;
        return data;
      }
    }
    onDragEnd()
  }

  // 現在位置の取得に失敗した場合
  function error() {
    coordinates.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    coordinates.textContent = 'This browser does not support Geolocation API';
  } else {
    coordinates.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error)
  }
}