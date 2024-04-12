'use strict'

let things = {
    'type': 'FeatureCollection',
    'features': []
}

var youtubeID;

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

function aboutThis() {
    if (indexThis.youtube) {
        youtubeID = indexThis.youtube;
        player.loadVideoById({ videoId: youtubeID })
    } else {
        document.querySelector('#player').hidden = true;
    }

    if (indexThis.html && !indexThis.text) {
        fetchHTML(indexThis.html, '#readme')
    }

    if (indexThis.text && !indexThis.html) {
        fetchMD(indexThis.text, '#readme')
    }

    dialogOpen()
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

        if (indexThis.youtube) {
            youtubeID = indexThis.youtube;
        } else {
            document.addEventListener("DOMContentLoaded", () => {
                document.querySelector('#player').hidden = true;
            });
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
                if (marker.properties.link) {
                    if (marker.properties.link.html) {
                        let thisThing = directory + marker.properties.link.html
                        fetchHTML(thisThing, '#readme')
                    }

                    if (marker.properties.link.youtube) {
                        document.querySelector('#player').hidden = false;
                        youtubeID = marker.properties.link.youtube;
                        player.loadVideoById({ videoId: youtubeID })
                    } else {
                        document.querySelector('#player').hidden = true;
                    }
                    dialogOpen()
                }
            })
        }

        if (!indexThis.no) {
            document.querySelector('#count').innerHTML = things.features.length + ' <i>の</i>';
            document.querySelector('#count').style.padding = "0 0 0 0.25rem";
        }
    }
})

function dialogOpen() {
    document.querySelector("dialog").showModal();
}

function dialogClose() {
    document.querySelector("dialog").close();
    document.querySelector("#readme").innerHTML = "";
    document.querySelector('#player').hidden = true;
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
