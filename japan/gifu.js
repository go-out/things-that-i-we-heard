let gifuHeard = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.33264534964943, 36.169546970888504]
            },
            properties: {
                title: 'はぁーいてぃーしゃしま〜す',
                date: '2024年4月11日 15:04',
                address: '岐阜県高山市丹生川町坊方458'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.60160100659132, 36.26827747098754]
            },
            properties: {
                title: 'あそこに尖っとんが槍岳',
                date: '2024年4月14日 10:44',
                address: '岐阜県高山市奥飛騨温泉郷新穂高温泉新穂高 千石園地'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.25302440175085, 36.13793574999087]
            },
            properties: {
                title: '世界でひとつだけ！タバコの吸える喫茶店',
                date: '2024年4月16日 9:49',
                address: '岐阜県高山市花里町3丁目34'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.25271184555322, 36.14047426542348]
            },
            properties: {
                title: 'みっちゃん背中に貼ってあるもんが丸見えじゃ',
                date: '2024年4月20日 8:11',
                address: '岐阜県高山市花里町4丁目65'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [137.25743308000534, 36.14212140236336]
            },
            properties: {
                title: 'ただ俺誕生日知らんもんで~',
                date: '2024年4月20日 15:53',
                address: '岐阜県高山市有楽町45寿美久'
            }
        }
    ]
};

for (let gifu of gifuHeard.heard) {
    things.features.push(gifu);
}
