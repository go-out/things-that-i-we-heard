'use strict'

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

for (const jsEach of indexThis.things) {
    let heardArr = jsEach.arr;
    for (const eachHeard of heardArr.heard) {
        things.features.push(eachHeard)
    }
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

            for (const jsEach of indexThis.things) {
                const script = document.createElement("script")
                script.src = jsEach.js;
                head.appendChild(script)
            }
        }

        break;
    case "interactive": {
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

        break;
    }
    case "complete":
        // ページが完全に読み込み完了。

        let allThings = things.features[length];

        for (const marker of things.features) {
            const pin = document.createElement('div');
            pin.className = 'thing';
            new mapboxgl.Marker(pin)
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
                .addTo(map)

            pin.addEventListener('click', () => {
                // JSON に link オブジェクトがある場合
                if (marker.properties.link) {
                    const mainBtn = document.querySelector('#changeHidden');
                    const mainAll = document.querySelectorAll('main');

                    mainAll.forEach(main => {
                        if (main.hidden == false) {
                            main.hidden = true;
                            mainBtn.textContent = "?";
                            mainBtn.classList.replace('pause', 'play');
                        } else {
                            main.hidden = false;
                            mainBtn.textContent = "×";
                            mainBtn.classList.replace('play', 'pause');
                        }
                    })

                    if (marker.properties.link.html) {
                        let html = directory + marker.properties.link.html;
                        fetchHTML(html, '#about article');
                    }
                }

                flyToMarker(marker)
            })
        }

        function flyToMarker(e) {
            map.flyTo({
                center: e.geometry.coordinates,
                essential: true,
                zoom: indexThis.zoomIn
            });
        }
        break;
}
