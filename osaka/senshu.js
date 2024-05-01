let osakaSenshu = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.60086281783697, 34.505662796294416]
            },
            properties: {
                title: '出なくていいんで電話かけますね',
                date: '2024年4月4日 10:35',
                address: '大阪府富田林市若松町西1丁目1877'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.60493321315693, 34.483560757883666]
            },
            properties: {
                title: '優雅な気分やわ',
                date: '2024年4月4日 12:58',
                address: '大阪府富田林市佐備391-1'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.60426189028175, 34.48051136688983]
            },
            properties: {
                title: '大阪雅楽松風会',
                date: '2024年4月4日 13:30',
                address: '大阪府富田林市佐備467'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.5964918270077, 34.50066387241836]
            },
            properties: {
                title: 'ささえてあげるよ そのかたを',
                date: '2024年4月4日 16:16',
                address: '大阪府富田林市寿町1丁目1番34'
            }
        }
    ]
};

for (let senshu of osakaSenshu.heard) {
    things.features.push(senshu);
}
