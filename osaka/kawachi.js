let osakaKawachi = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.63899457302392, 34.615696738201265]
            },
            properties: {
                title: '自転車通ります',
                date: '2024年3月4日 14:20',
                address: '大阪府八尾市垣内6丁目18'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.64013413415324, 34.612442712781814]
            },
            properties: {
                title: '御札買うてくれませんか？',
                date: '2024年3月4日 15:20',
                address: '大阪府八尾市垣内(大字)479'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.6361870871712, 34.61178681811512]
            },
            properties: {
                title: 'アルペン踊りをさあ踊りましょ',
                date: '2024年3月4日 15:45',
                address: '大阪府八尾市恩智北町4丁目471-5'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.6184309523988, 34.59862016955677]
            },
            properties: {
                title: 'ごゆっくりどうぞ',
                date: '2024年3月4日 16:30',
                address: '大阪府八尾市二俣1-8 喜多の湯'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.57767741841081, 34.630131490885574]
            },
            properties: {
                title: 'マジカル・ミステリー・ツアー',
                date: '2024年4月28日 12:00',
                address: '大阪府八尾市西久宝寺323'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.5750212521744, 34.633665665689605]
            },
            properties: {
                title: 'おしごと興行',
                date: '2024年4月28日 12:45',
                address: '大阪府東大阪市加美東3丁目3番8'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.5758506767781, 34.631611672730585]
            },
            properties: {
                title: '何言っとんや',
                date: '2024年4月28日 13:30',
                address: '大阪府八尾市西久宝寺136'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.59808174319215, 34.63026614582786]
            },
            properties: {
                title: '願成就',
                date: '2024年4月28日 15:30',
                address: '大阪府八尾市本町5-8-1常光寺'
            }
        }
    ]
};

for (let kawachi of osakaKawachi.heard) {
    things.features.push(kawachi);
}
