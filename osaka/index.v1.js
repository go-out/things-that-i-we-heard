'use strict'

let indexThis;

if (!location.hash) {
    indexThis = {
        title: "things that i (we) heard in osaka",
        area: "大阪",
        things: [
            "../otobuilding/things.all.js",
            "nantou/things.v2.js",
            "chuo/things.js",
            "higashi/things.js",
            "sakai/things.js"
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
} else {
    if (location.hash === "#1st") {
        indexThis = {
            title: "things that i (we) heard in southwest osaka",
            area: "大阪市住之江区と大正区・西成区の一部",
            things: [
                "../otobuilding/things.all.js",
                "nansei/things.js"
            ],
            bounds: [
                [135.39146702295744, 34.59380194128228], // 南西座標
                [135.5079278126247, 34.6540329633829] // 北東座標
            ],
            center: [135.47306292634534, 34.62458544610712],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "nansei/README.md"
        }
    } else if (location.hash === "#2nd") {
        indexThis = {
            title: "things that i (we) heard in southeast osaka",
            area: "大阪市住吉区・東住吉区・阿倍野区・平野区と西成区・八尾市の一部",
            things: [
                "nantou/things.v2.js"
            ],
            bounds: [
                [135.48000, 34.5876], // 南西座標
                [135.625511, 34.650] // 北東座標
            ],
            center: [135.5488778130033, 34.62302874171973],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "nantou/README.md"
        }
    } else if (location.hash === "#3rd") {
        indexThis = {
            title: "things that i (we) heard in osaka bay area",
            area: "大阪市港区・此花区と・大正区・西区の一部",
            things: [
                "bayarea/things.js"
            ],
            bounds: [
                [135.3730315262652, 34.64093264180789], // 南西座標
                [135.4816906204446, 34.713781222782764] // 北東座標
            ],
            center: [135.43853775007025, 34.66772792145631],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "bayarea/README.md"
        }
    } else if (location.hash === "#4th") {
        indexThis = {
            title: "things that i (we) heard in osaka center area",
            area: "大阪市中央区・浪速区・天王寺区と西区の一部",
            things: [
                "chuo/things.js"
            ],
            bounds: [
                [135.475455, 34.645457], // 南西座標
                [135.536279, 34.698345] // 北東座標
            ],
            center: [135.50033494029185, 34.67196397647884],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "chuo/README.md"
        }
    } else if (location.hash === "#5th") {
        indexThis = {
            title: "things that i (we) heard in osaka kita area",
            area: "大阪市北区・福島区・都島区・旭区・淀川区・東淀川区・西淀川区",
            things: [
                "kita/things.js"
            ],
            bounds: [
                [135.4066799794195, 34.670617726125215], // 南西座標
                [135.5629861101545, 34.77421451454586] // 北東座標
            ],
            center: [135.4993531599966, 34.70351079682028],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "kita/README.md"
        }
    } else if (location.hash === "#6th") {
        indexThis = {
            title: "things that i (we) heard in osaka higashi area",
            area: "大阪市鶴見区・城東区・東成区・生野区と東大阪・守口市・大東市・門真市・八尾市の一部",
            things: [
                "higashi/things.js"
            ],
            bounds: [
                [135.51687809235827, 34.63269505296771], // 南西座標
                [135.64909374681636, 34.73249747918041] // 北東座標
            ],
            center: [135.57260618884538, 34.67878080305437],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "higashi/README.md"
        }
    } else if (location.hash === "#sakai") {
        indexThis = {
            title: "things that i (we) heard in sakai, osaka",
            area: "大阪府堺市",
            things: [
                "sakai/things.js"
            ],
            bounds: [
                [135.41198975111797, 34.41793027889753], // 南西座標
                [135.57458389988736, 34.61841500845924] // 北東座標
            ],
            center: [135.50012524849802, 34.5239972993108],
            zoom: 12.5,
            zoomIn: 14.5,
            card: "https://creative-community.space/map/heard/",
            text: "sakai/README.md"
        }
    }
}