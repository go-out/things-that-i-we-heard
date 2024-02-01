'use strict'

let indexThis;

if (location.hash = "#1st") {
    indexThis = {
        title: "things that i (we) heard in southwest osaka",
        area: "大阪市住之江区全域と大正区・西成区の一部",
        things: [
            "../otobuilding/things.all.js"
        ],
        bounds: [
            [135.39146702295744, 34.59380194128228], // 南西座標
            [135.5079278126247, 34.6540329633829] // 北東座標
        ],
        center: [135.47306292634534, 34.62458544610712],
        zoom: 12.5,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "nantou/README.md"
    }
} else if (location.hash = "#2nd") {
    indexThis = {
        title: "things that i (we) heard in southeast osaka",
        area: "大阪市南東部",
        things: [
            "nantou/things.v2.js"
        ],
        bounds: [
            [135.4800000, 34.5876], // 南西座標
            [135.59876, 34.645] // 北東座標
        ],
        center: [135.5384520595759, 34.620920838437655],
        zoom: 12.5,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "nantou/README.md"
    }
} else if (location.hash = "#3th") {
    indexThis = {
        title: "things that i (we) heard in osaka bay area",
        area: "大阪市港区・西区・此花区・浪速区・大正区・西成区",
        things: [
            "bayarea/things.js"
        ],
        bounds: [
            [135.3730315262652, 34.64093264180789], // 南西座標
            [135.5003690854324, 34.675365502276776] // 北東座標
        ],
        center: [135.44506011560367, 34.661156093480756],
        zoom: 12.5,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "bayarea/README.md"
    }
} else if (location.hash = "#4th") {
    indexThis = {
        title: "things that i (we) heard in osaka center area",
        area: "大阪市中央",
        things: [
            "chuo/things.js"
        ],
        bounds: [
            [135.48843787902314, 34.659672342893856], // 南西座標
            [135.53627857909413, 34.69834467476561] // 北東座標
        ],
        center: [135.5230066175426, 34.67986867749417],
        zoom: 12.5,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "chuo/README.md"
    }
} else if (location.hash = "#5th") {
    indexThis = {
        title: "things that i (we) heard in osaka kita area",
        area: "大阪市北",
        things: [
            "kita/things.js"
        ],
        bounds: [
            [135.4066799794195, 34.670617726125215], // 南西座標
            [135.58439852201138, 34.75939737782922] // 北東座標
        ],
        center: [135.49582669666256, 34.70236986879824],
        zoom: 12.5,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "kita/README.md"
    }
} else if (location.hash = "#6th") {
    indexThis = {
        title: "things that i (we) heard in osaka higashi area",
        area: "大阪市東",
        things: [
            "higashi/things.js"
        ],
        bounds: [
            [135.49653974944692, 34.63678725920704], // 南西座標
            [135.59230541598112, 34.696820639620825] // 北東座標
        ],
        center: [135.52999876256695, 34.660350423722264],
        zoom: 12.5,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "higashi/README.md"
    }
} else {
    indexThis = {
        title: "things that i (we) heard in osaka",
        area: "大阪",
        things: [
            "../otobuilding/things.all.js",
            "nantou/things.v2.js"
        ],
        bounds: [
            [135.0590791040609, 34.256820829045935], // 南西座標
            [135.78320173410242, 35.061027592581866] // 北東座標
        ],
        center: [135.5020763952882, 34.69376772507822],
        zoom: 9.87654321,
        zoomIn: 14.5,
        card: "https://creative-community.space/map/heard/",
        text: "README.md"
    }
}