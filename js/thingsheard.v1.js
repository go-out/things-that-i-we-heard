'use strict'

let things = {
    'type': 'FeatureCollection',
    'features': []
}

switch (document.readyState) {
    case "loading":
        // この文書はまだ読み込み中
        const head = document.querySelector('head')
        if (indexThis) {
            for (const thingsJS of indexThis.things) {
                const script = document.createElement("script")
                script.src = thingsJS;
                head.appendChild(script);
            }
        }
        break;
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        if (indexThis) {
            const h1 = document.querySelector('h1')
            const summary = document.querySelector('#www summary')
            h1.textContent = indexThis.title;
            summary.innerHTML = `${indexThis.area}聞いた<b id="count"></b>こと`;
        }

        if (indexThis.html && !indexThis.text) {
            fetchHTML(indexThis.html, '#readme')
        }

        if (indexThis.text && !indexThis.html) {
            fetchMD(indexThis.text, '#readme')
        }
    } else if (event.target.readyState === 'complete') {
        document.body.classList.toggle('enter')

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
                        </p>`)
                )
                .addTo(map)

            el.addEventListener('click', () => {
                flyToMarker(marker)
            })
        }

        if (!indexThis.no) {
            document.querySelector('#count').innerHTML = things.features.length + ' <i>の</i>';
        }
    }
})

function dialogOpen() {
    document.querySelector("dialog").showModal();
}

function dialogClose() {
    document.querySelector("dialog").close();
}

function chengeHidden() {
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
}

async function fetchHTML(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerHTML => {
            document.querySelector(query).innerHTML = innerHTML;
        });
}

async function fetchMD(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        });
}
