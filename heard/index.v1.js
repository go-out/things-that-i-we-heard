'use strict'

let indexThis;

if (!location.hash) {
    indexThis = {
        title: "things that i (we) heard in osaka",
        area: "大阪",
        things: [
            "../otobuilding/things.all.js",
            "nantou/things.v3.js",
            "chuo/things.v2.js",
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
        card: "https://creative-community.space/map/",
        html: "area.html"
    }
}