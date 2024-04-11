let tokyoHeard = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [139.64968386115362, 35.70482679301459]
            },
            properties: {
                title: 'TEAM友達',
                date: '2024年2月16日 15:36',
                address: '東京都東京都杉並区高円寺南4-26-12麻雀ミスチョイス 高円寺Q'
            }
        }
    ]
};

for (let tokyo of tokyoHeard.heard) {
    things.features.push(tokyo);
}
