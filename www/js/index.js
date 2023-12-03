'use strict'

indexHead()

async function fetchHTML(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerHTML => {
            document.querySelector(query).innerHTML = innerHTML;
        });
}

function indexHead() {
    const head = document.querySelector('head');
    const googleapis = document.createElement("link");
    googleapis.setAttribute("rel", "preconnect");
    googleapis.setAttribute("href", "https://fonts.googleapis.com");
    head.appendChild(googleapis);

    const gstatic = document.createElement("link");
    gstatic.setAttribute("rel", "preconnect");
    gstatic.setAttribute("href", "https://fonts.gstatic.com");
    gstatic.setAttribute("crossorigin", "anonymous");
    head.appendChild(gstatic);

    const fonts = document.createElement("link");
    fonts.setAttribute("rel", "stylesheet");
    fonts.setAttribute("href", "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Zen+Maru+Gothic&display=swap");
    head.appendChild(fonts);
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const title = document.querySelector('#title');
        title.addEventListener('click', function () {
            document.body.classList.toggle('enter');
        }, false);

        let mainBtn = document.querySelector('#changeHidden');
        mainBtn.addEventListener('click', function () {
            document.body.classList.add('enter');
            const mainAll = document.querySelectorAll('main');
            mainAll.forEach(main => {
                if (main.hidden == false) {
                    main.hidden = true;
                    mainBtn.textContent = "?";
                } else {
                    main.hidden = false;
                    mainBtn.textContent = "×";
                }
            })
        }, false);
    } else if (event.target.readyState === 'complete') {
        for (const marker of things.features) {
            const el = document.createElement('div');
            el.className = 'thing';
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({
                        offset: 12.5
                    })
                        .setHTML(`
                        <h3>${marker.properties.title}</h3>
                        <p class="date">
                        ${marker.properties.date}</br>
                        ${marker.properties.address}
                        </p>
                        `
                        )
                )
                .addTo(map);
            el.addEventListener('click', () => {
                flyToStore(marker);
            });
        }

        function flyToStore(e) {
            map.flyTo({
                center: e.geometry.coordinates,
                zoom: 15
            });
        }
    }
});