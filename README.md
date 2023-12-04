[マップのパンを指定エリアに制限](https://docs.mapbox.com/jp/mapbox-gl-js/example/restrict-bounds/)

指定エリアの南西・北東座標を指定
```
const bounds = [
    [南西座標],
    [北東座標]
];
```

maxBounds を設定して、マップが別の場所にパンさできないようにします。
```
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/スタイルシートのURL',
    center: [地図中央の座標],
    zoom: 15.5,
    maxBounds: bounds
});
```

[建物を3Dで表示](https://docs.mapbox.com/jp/mapbox-gl-js/example/3d-buildings/)
[3d.js](www/js/3d.js)