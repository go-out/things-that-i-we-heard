let osakaHokusetsu = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.6531993744561, 34.85473701624116]
            },
            properties: {
                title: 'シャッターチャンス',
                date: '2024年2月18日 10:15',
                address: '大阪府高槻市道鵜町2丁目1番13'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.66328038972057, 34.861556685323094]
            },
            properties: {
                title: 'みんな炎すっきゃな',
                date: '2024年2月18日 11:00',
                address: '大阪府高槻市上牧町2丁目16番9'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.6211746442691, 34.849675937256265]
            },
            properties: {
                title: '聞いてたやろ？',
                date: '2024年2月18日 9:00',
                address: '大阪府高槻市高槻町15番8'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.561850973219, 34.75720548980648]
            },
            properties: {
                title: '一人知らんやつおる<br>新メンバー',
                date: '2024年3月18日 16:16',
                address: '大阪府摂津市一津屋2丁目11番25'
            }
        }
    ]
};

for (let hokusetsu of osakaHokusetsu.heard) {
    things.features.push(hokusetsu);
}
