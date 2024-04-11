# This is a webform for submit the things that you heard
これは、あなたが聞いた言葉を投稿するウェブフォームです。

JavaScript
* [findme.js](js/findme.js)
* [youHeard.js](js/youHeard.v1.js)

PHP
* [submit.php](submit.php)

***

1. 位置情報 API[^1] が 端末の現在地 を取得し、地図上にドラッグ可能マーカーを追加
2. Mapbox Geocoding API[^2] が、ドラッグ可能マーカーの地理座標 を 位置情報(住所・場所名) に変換
3. あなたが聞いた言葉を ローカルストレージ[^3]・CSV に追加
4. ローカルストレージからあなたが聞いた言葉を取得し、地図上にピンとポップアップを表示

___

[^1]: [位置情報 API (Geolocation API)](https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API) を使用すると、ユーザーが望む場合に、自分の位置情報をウェブアプリケーションに提供することができます。
プライバシー上の理由から、ユーザーは位置情報を報告する許可を求められます。
[^2]: [Mapbox Geocoding API](https://docs.mapbox.com/jp/api/geocoding/) には、位置情報を地理座標に変換する フォワードジオコーディング と、地理座標を位置情報に変換する リバースジオコーディング があります。
[^3]: [ウェブストレージ API](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API) は、ユーザーのローカル環境(ブラウザ)にデータを保存する仕組みです。
ブラウザがプライベートモード・シークレットウインドウの場合や、閲覧履歴（キャッシュ）を消去した場合などは、ウェブストレージに保存されたデータは削除されます。


## 私（わたしたち）が聞いた言葉 を CSV から読み込み、things JSON に 追加
```
let things = {
    'type': 'FeatureCollection',
    'features': []
}

async function csvtojson() {
    const response = await fetch('CSVファイルのパス.csv')
    const text = await response.text()
    const data = text.trim().split('\n')
    .map(line => line.split(',').map(x => x.trim()))
    .map(csv => {
        let weHeard = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [csv[2], csv[1]]
            },
            'properties': {
                'title': csv[4].replace(/"/g, ''),
                'date': csv[0],
                'address': csv[3].replace(/"/g, '')
            }
        }
        things.features.push(weHeard)
    })
}
csvtojson()
```