[index.js](index.js)

# indexThis
```
indexThis = {
    title: "things that i (we) heard in __",
    area: "__ で",
    things: [
        "../___/things.js?v=0"
    ],
    no: false,
    bounds: false,
    center: [___],
    zoom: __,
    zoomIn: __,
    text: "__.md"
}
```

## things.js
```
heard []
{
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [__]
    },
    properties: {
        title: '聞いたこと',
        date: 'YYYY年MM月DD日 00:00',
        address: '住所',
        link: {
          html: '__.html',
          text: '__.md',
          youtube: '動画ID'
        }
    }
}
```

### indexThis.no
値が true のとき、things.featuresの数をカウントする
```
if (indexThis.no === true) {
    document.querySelector('#count').innerHTML = things.features.length + ' <i>の</i>';
    document.querySelector('#count').style.padding = "0 0 0 0.25rem";
} else {
    document.querySelector('#count').remove()
}
```

### indexThis.bounds
[マップのパンを指定エリアに制限](https://docs.mapbox.com/jp/mapbox-gl-js/example/restrict-bounds/)

maxBounds（指定エリアの南西・北東座標を指定）を設定し、マップが別の場所にパンさできないようにする

```
const bounds = [
    [南西座標],
    [北東座標]
];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/スタイルシートのURL',
    center: [地図中央の座標],
    zoom: 15.5,
    maxBounds: bounds
});
```