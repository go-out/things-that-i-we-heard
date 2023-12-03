'use strict'

let things = {
    'type': 'FeatureCollection',
    'features': []
}

// localStorageから位置情報を取得
if (localStorage.getItem("heard")) {
    const heardJSON = JSON.parse(localStorage.getItem('heard'));
    for (let i = 0; i < heardJSON.length; i++) {
        const thisLongitude = heardJSON[i].longitude;
        const thisLatitude = heardJSON[i].latitude;
        const thisAddress = heardJSON[i].address;
        const thisComment = heardJSON[i].comment;
        const thisTimestamp = heardJSON[i].timestamp;
        const thisCenter = [thisLongitude, thisLatitude];

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
        things.features.push(iHeard);
    }
}

document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'interactive') {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.querySelector('#timestamp').value = now.toISOString().slice(0, -7);
    } else if (e.target.readyState === 'complete') {
        // localStorageから位置情報を取得
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

        const form = document.querySelector('#form form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const thisLng = document.querySelector('#lng').textContent;
            const thisLat = document.querySelector('#lat').textContent;
            const thisAddress = document.querySelector('#address').textContent;
            const thisComment = document.querySelector('#comment').value;
            const timestamp = document.querySelector('#timestamp').value;
            const thisTime = new Date(timestamp).toLocaleString();

            addData(thisTime, thisLat, thisLng, thisAddress, thisComment)

            const addHeard = {
                latitude: thisLat,
                longitude: thisLng,
                timestamp: thisTime,
                address: thisAddress,
                comment: thisComment
            };

            // PHPに位置情報を送信
            const weHeard = JSON.stringify(addHeard);
            let response = fetch('submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: weHeard
            })

                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                });

            setTimeout(() => {
                location.reload()
            }, 1000);
        }, false)
    }
}, false)