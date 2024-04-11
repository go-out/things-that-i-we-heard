let naraHeard = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.85322072044545, 34.53633440510556]
            },
            properties: {
                title: '自転車は無理',
                date: '2024年2月10日 15:00',
                address: '奈良県桜井市茅原373玄寳庵'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.83688469098098, 34.539608359337805]
            },
            properties: {
                title: '３時までなんかーい',
                date: '2024年2月10日 15:20',
                address: '奈良県桜井市箸中880'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.8471430177416, 34.52541338826036]
            },
            properties: {
                title: 'ひらがなのみむろは全国展開<br>漢字の三諸は奈良のみで展開',
                date: '2024年2月10日 16:30',
                address: '奈良県桜井市三輪510'
            }
        }
    ]
};

for (let nara of naraHeard.heard) {
    things.features.push(nara);
}
