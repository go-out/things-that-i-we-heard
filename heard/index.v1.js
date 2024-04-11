'use strict'

// URLのパラメータを取得
let indexThis,
    mapboxsStyle,
    userInteracting,
    paramArray = [],
    urlParam = location.search.substring(1);

if (!urlParam) {
    let lng = getRandomInt(-180, 180)
    let lat = getRandomInt(-90, 90)
    let zoom = getRandomInt(1, 2)

    indexThis = {
        title: "things that i (we) heard",
        area: "私（わたしたち）が ",
        things: [
            "otobuilding/things.all.js",
            "bnaaltermuseum/things.all.js",
            "../osaka/bayarea/things.js",
            "../osaka/chuo/things.v2.js",
            "../osaka/higashi/things.js",
            "../osaka/kita/things.js",
            "../osaka/nansei/things.js",
            "../osaka/nantou/things.v3.js",
            "../osaka/sakai/things.js",
            "../js/csvtojson.js"
        ],
        center: [lng, lat],
        bounds: false,
        zoom: zoom,
        zoomIn: 14.5,
        html: "www/index.html"
    }

    mapboxsStyle = "mapbox://styles/pehu/cl2ap5cwu00d914mtfw4h3sn8";
    userInteracting = 0;
    csvtojson('../submit.csv')
} else {
    // ?id=ID&area=エリア
    let param = urlParam.split('&');
    for (let i = 0; i < param.length; i++) {
        let paramItem = param[i].split('=');
        paramArray[paramItem[0]] = paramItem[1];
    }

    if (paramArray.id === 'osaka') {
        if (paramArray.area === '1st') {
            indexThis = {
                title: "things that i (we) heard in southwest osaka",
                area: "大阪市住之江区と大正区・西成区の一部で",
                things: [
                    "otobuilding/things.all.js",
                    "../osaka/nansei/things.js"
                ],
                bounds: [
                    [135.39146702295744, 34.59380194128228], // 南西座標
                    [135.5079278126247, 34.6540329633829] // 北東座標
                ],
                center: [135.47306292634534, 34.62458544610712],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/nansei/README.md"
            }
        } else if (paramArray.area === '2nd') {
            indexThis = {
                title: "things that i (we) heard in southeast osaka",
                area: "大阪市住吉区・東住吉区・阿倍野区・平野区と西成区・八尾市の一部で",
                things: [
                    "../osaka/nantou/things.v3.js"
                ],
                bounds: [
                    [135.48000, 34.5876], // 南西座標
                    [135.625511, 34.650] // 北東座標
                ],
                center: [135.5488778130033, 34.62302874171973],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/nantou/README.md"
            }
        } else if (paramArray.area === '3rd') {
            indexThis = {
                title: "things that i (we) heard in osaka bay area",
                area: "大阪市港区・此花区と大正区・西区の一部で",
                things: [
                    "../osaka/bayarea/things.js"
                ],
                bounds: [
                    [135.3730315262652, 34.64093264180789], // 南西座標
                    [135.4856383984765, 34.70968074072181] // 北東座標
                ],
                center: [135.43853775007025, 34.66772792145631],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/bayarea/README.md"
            }
        } else if (paramArray.area === '4th') {
            indexThis = {
                title: "things that i (we) heard in osaka center area",
                area: "大阪市中央区・浪速区・天王寺区と西区の一部で",
                things: [
                    "../osaka/chuo/things.v2.js"
                ],
                bounds: [
                    [135.475455, 34.645457], // 南西座標
                    [135.54296771952292, 34.69639232460691] // 北東座標
                ],
                center: [135.50033494029185, 34.67196397647884],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/chuo/README.md"
            }
        } else if (paramArray.area === '5th') {
            indexThis = {
                title: "things that i (we) heard in osaka kita area",
                area: "大阪市北区・福島区・都島区・旭区・淀川区・東淀川区・西淀川区で",
                things: [
                    "../osaka/kita/things.js"
                ],
                bounds: [
                    [135.4031370031613, 34.66921938627379], // 南西座標
                    [135.5629861101545, 34.77421451454586] // 北東座標
                ],
                center: [135.4993531599966, 34.70351079682028],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/kita/README.md"
            }
        } else if (paramArray.area === '6th') {
            indexThis = {
                title: "things that i (we) heard in osaka higashi area",
                area: "大阪市鶴見区・城東区・東成区・生野区と東大阪・守口市・大東市・門真市・八尾市の一部で",
                things: [
                    "../osaka/higashi/things.js"
                ],
                bounds: [
                    [135.51687809235827, 34.63269505296771], // 南西座標
                    [135.64909374681636, 34.73249747918041] // 北東座標
                ],
                center: [135.57260618884538, 34.67878080305437],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/higashi/README.md"
            }
        } else if (paramArray.area === 'sakai') {
            indexThis = {
                title: "things that i (we) heard in sakai, osaka",
                area: "大阪府堺市で",
                things: [
                    "../osaka/sakai/things.js"
                ],
                bounds: [
                    [135.38526278033711, 34.40613068725279], // 南西座標
                    [135.57458389988736, 34.61841500845924] // 北東座標
                ],
                center: [135.50012524849802, 34.5239972993108],
                zoom: 12.5,
                zoomIn: 14.5,
                text: "../osaka/sakai/README.md"
            }
        } else {
            indexThis = {
                title: "things that i (we) heard in osaka",
                area: "大阪府全域で",
                things: [
                    "otobuilding/things.all.js",
                    "../osaka/nantou/things.v3.js",
                    "../osaka/chuo/things.v2.js",
                    "../osaka/higashi/things.js",
                    "../osaka/sakai/things.js"
                ],
                center: [135.5020763952882, 34.69376772507822],
                bounds: [
                    [135.0590791040609, 34.256820829045935], // 南西座標
                    [135.78320173410242, 35.061027592581866] // 北東座標
                ],
                zoom: 9.87654321,
                zoomIn: 14.5,
                html: "../osaka/index.html"
            }
        }
    }

    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === 'interactive') {
            document.body.classList.add('map');
        }

        // things.features から マーカー・ポップアップを生成
        document.querySelector('#things').innerHTML = '';
        for (const marker of things.features) {
            const thing = document.createElement('section');
            thing.className = 'thing';
            thing.innerHTML = `
            <h3>${marker.properties.title}</h3>
            <p class="date">
                ${marker.properties.date}</br>
                ${marker.properties.address}
            </p>
            `;
            document.querySelector('#things').appendChild(thing)
        }
    })

    mapboxsStyle = "mapbox://styles/mapbox/light-v10";
    userInteracting = !0;
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}