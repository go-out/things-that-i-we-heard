'use strict'

let things = {
    'type': 'FeatureCollection',
    'features': []
}

if (localStorage.getItem("heard")) {
    // localStorage から あなたが聞いた言葉 を 取得
    const heardJSON = JSON.parse(localStorage.getItem('heard'));
    for (let i = 0; i < heardJSON.length; i++) {
        const thisLongitude = heardJSON[i].longitude;
        const thisLatitude = heardJSON[i].latitude;
        const thisAddress = heardJSON[i].address;
        const thisComment = heardJSON[i].comment;
        const thisTimestamp = heardJSON[i].timestamp;
        const thisCenter = [thisLongitude, thisLatitude];

        // things JSON に あなたが聞いた言葉 を 追加
        let iHeard = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': thisCenter
            },
            'properties': {
                'title': thisComment,
                'date': thisTimestamp,
                'address': thisAddress
            }
        }
        things.features.push(iHeard)
    }
}

function removeThis(e) {
    const yourHeard = JSON.parse(localStorage.getItem('heard'));
    let result = window.confirm('この言葉をコレクションから削除します。\r\nRemove This from Your Collection.');
    if (result) {
        yourHeard.splice(e, 1);
        localStorage.setItem('heard', JSON.stringify(yourHeard));
        location.reload();
    }
}

document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'interactive') {
        // コントロールに現在時刻を設定
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.querySelector('#timestamp').value = now.toISOString().slice(0, -5);

        const article = document.querySelector('#things')
        // things.features から マーカー・ポップアップを生成
        if (localStorage.getItem("heard")) {
            let marker = things.features;
            for (let i = 0; i < marker.length; i++) {
                const thing = document.createElement('section');
                thing.className = 'thing';
                thing.innerHTML = `
                <input type="button" onclick="removeThis(${i})" value="×">
                <h3>${marker[i].properties.title}</h3>
                <p class="date">
                    ${marker[i].properties.date}</br>
                    ${marker[i].properties.address}
                </p>
                `;
                article.appendChild(thing)
            }
        } else {
            fetch("README.md")
                .then(response => response.text())
                .then(innerText => {
                    article.innerText = innerText;
                });
        }
    } else if (e.target.readyState === 'complete') {
        // localStorage に あなたが聞いた言葉 を 追加
        let array = JSON.parse(localStorage.getItem("heard")) || [];
        const addData = (timestamp, latitude, longitude, address, comment) => {
            array.unshift({
                timestamp,
                latitude,
                longitude,
                address,
                comment
            })
            localStorage.setItem("heard", JSON.stringify(array))
            return { timestamp, latitude, longitude, address, comment }
        }

        // あなたが聞いた言葉 を 投稿する
        const form = document.querySelector('#submit')
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const thisLng = document.querySelector('#lng').textContent;
            const thisLat = document.querySelector('#lat').textContent;
            const thisAddress = document.querySelector('#address').textContent;
            const thisComment = document.querySelector('#comment').value;
            const timestamp = document.querySelector('#timestamp').value;
            const thisTime = new Date(timestamp).toLocaleString();
            addData(thisTime, thisLat, thisLng, thisAddress, thisComment.replace(/\r?\n/g, '<br>'));

            const addHeard = {
                latitude: thisLat,
                longitude: thisLng,
                timestamp: thisTime,
                address: thisAddress,
                comment: thisComment.replace(/\r?\n/g, '<br>')
            }

            // あなたが聞いた言葉 を CSV に 追加
            const thisHeard = JSON.stringify(addHeard);
            let response = fetch('submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: thisHeard
            })

                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })

            setTimeout(() => {
                location.reload()
            }, 1000)
        }, false)
    }
}, false)

function dialogOpen() {
    document.querySelector("dialog").showModal();
}

function dialogClose() {
    document.querySelector("dialog").close();
}