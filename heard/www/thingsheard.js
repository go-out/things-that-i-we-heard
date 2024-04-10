'use strict'

let things = {
    'type': 'FeatureCollection',
    'features': []
}

async function fetchHTML(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerHTML => {
            document.querySelector(query).innerHTML = innerHTML;
        });
}

async function fetchText(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerText => {
            document.querySelector(query).innerText = innerText;
        });
}

switch (document.readyState) {
    case "loading":
        // この文書はまだ読み込み中
        const head = document.querySelector('head')

        if (indexThis) {
            document.title = indexThis.title;
            const ogTitle = document.createElement("meta")
            const twTitle = document.createElement("meta")
            ogTitle.setAttribute("property", "og:title")
            twTitle.setAttribute("name", "twitter:title")
            ogTitle.setAttribute("content", document.title)
            twTitle.setAttribute("content", document.title)
            head.appendChild(ogTitle)
            head.appendChild(twTitle)

            const description = document.head.querySelector("[name=description][content]");
            description.content = `私（わたしたち）が ${indexThis.area}で聞いた言葉`;
            const ogDescription = document.createElement("meta")
            const twDescription = document.createElement("meta")
            ogDescription.setAttribute("property", "og:description")
            twDescription.setAttribute("name", "twitter:description")
            ogDescription.setAttribute("content", description.content)
            twDescription.setAttribute("content", description.content)
            head.appendChild(ogDescription)
            head.appendChild(twDescription)

            const ogURL = document.createElement("meta")
            const twURL = document.createElement("meta")
            ogURL.setAttribute("property", "og:url")
            twURL.setAttribute("name", "twitter:url")
            ogURL.setAttribute("content", location.href)
            twURL.setAttribute("content", location.href)
            head.appendChild(ogURL)
            head.appendChild(twURL)

            const ogIMG = document.createElement("meta")
            const twIMG = document.createElement("meta")
            ogIMG.setAttribute("property", "og:image")
            twIMG.setAttribute("name", "twitter:image")
            ogIMG.setAttribute("content", indexThis.card)
            twIMG.setAttribute("content", indexThis.card)
            head.appendChild(ogIMG)
            head.appendChild(twIMG)

            for (const jsEach of indexThis.things) {
                const script = document.createElement("script")
                script.src = jsEach;
                head.appendChild(script)
            }
        }
        break;
}


document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        // この文書は読み込みが終了した。 DOM 要素にアクセスできるようになった。
        // しかし、画像、スタイルシート、フレームなどの副リソースはまだ読み込み中。

        const title = document.querySelector('#title')
        title.addEventListener('click', function () {
            document.body.classList.toggle('enter');
        }, false)

        const mainBtn = document.querySelector('#changeHidden')
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

        if (indexThis.html) {
            fetchHTML(indexThis.html, '#credit');
        }

        if (indexThis.text) {
            fetchText(indexThis.text, '#credit');
        }
    } else if (event.target.readyState === 'complete') {
        // ページが完全に読み込み完了

        if (indexThis) {
            const h1 = document.querySelector('#title h1')
            h1.textContent = indexThis.title;

            const h2 = document.querySelector('#about h2')
            h2.innerHTML = `私（わたしたち）が ${indexThis.area}で聞いた ${things.features.length} の 言葉`;
        }

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
    }
});
