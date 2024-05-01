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
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.81899955991275, 34.68073981174183]
            },
            properties: {
                title: '「いい感じ」それだ！',
                date: '2024年4月13日 10:10',
                address: '奈良県奈良市三条本町1-1JR 奈良駅'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.85048253408462, 34.678673323717646]
            },
            properties: {
                title: '涙出そう',
                date: '2024年4月13日 12:00',
                address: '奈良県奈良市春日野町紀伊神社'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.8477460307971, 34.677208647875275]
            },
            properties: {
                title: 'そばはあと５つで品切れです',
                date: '2024年4月13日 12:30',
                address: '奈良県奈良市高畑町1412-1そば処 吟松 高畑店'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.87544909526002, 34.67425687279518]
            },
            properties: {
                title: '手付かずの自然剥き出し',
                date: '2024年4月13日 15:00',
                address: '奈良県奈良市白毫寺町首切地蔵'
            }
        }
    ]
};

for (let nara of naraHeard.heard) {
    things.features.push(nara);
}
