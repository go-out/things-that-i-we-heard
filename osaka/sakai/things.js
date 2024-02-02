let osakaSakai = {
    heard: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.45304101089812, 34.5602853215355]
            },
            properties: {
                title: 'トングでお肉持って',
                date: '2023年12月9日 19:30',
                address: '堺市西区浜寺石津町西2-3-11セリアハウス'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48294875760593, 34.5737784844588]
            },
            properties: {
                title: 'ピアノがある',
                date: '2024年1月7日 11:00',
                address: '堺市堺区堺区南瓦町3-1堺市役所 高層館21階展望ロビー'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48631060496848, 34.567786459098954]
            },
            properties: {
                title: 'これも古墳じゃない？',
                date: '2024年1月7日 11:30',
                address: '堺市堺区東永山園永山古墳'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48649393135707, 34.56001516898691]
            },
            properties: {
                title: '体重何キロですか？',
                date: '2024年1月7日 12:00',
                address: '堺市堺区堺区百舌鳥夕雲町2-160大仙公園観光案内所'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48426965342924, 34.55969680104943]
            },
            properties: {
                title: 'もしかして、シャリンバイ',
                date: '2024年1月7日 12:20',
                address: '堺市堺区堺市堺区百舌鳥夕曇2丁堺市茶室 伸庵'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48234499929362, 34.55816085141883]
            },
            properties: {
                title: '暴れ凧',
                date: '2024年1月7日 12:45',
                address: '堺市堺区堺区百舌鳥夕雲町/旭ヶ丘北町/大仙中町大仙公園'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48248790732947, 34.56040418482125]
            },
            properties: {
                title: 'お墓だ',
                date: '2024年1月7日 13:00',
                address: '堺市堺区百舌鳥夕雲町2-204堺市平和塔'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.4828976232402, 34.55602928066287]
            },
            properties: {
                title: 'すごっ！めっちゃきれい！',
                date: '2024年1月7日 13:30',
                address: '堺市堺区堺区東上野芝町1丁4-3堺市都市緑化センター'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.47897472718017, 34.556350760208204]
            },
            properties: {
                title: 'この辺に住んでたらパワー湧きそう',
                date: '2024年1月7日 14:15',
                address: '堺市西区上野芝町1丁17番4'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.48384011692394, 34.56089223643208]
            },
            properties: {
                title: 'ぱーぱーぱーぱー',
                date: '2024年1月7日 14:35',
                address: '日本大阪府堺市堺区堺区大仙中町18竜佐山古墳'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.4969460102521, 34.57740290102144]
            },
            properties: {
                title: 'おぼっちゃんおじょうちゃん',
                date: '2024年1月7日 15:25',
                address: '堺市堺区田出井町１ベルマージュ堺'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.4981639517004, 34.5701397159435]
            },
            properties: {
                title: 'ほんとに跡地なんじゃない？',
                date: '2024年1月7日 16:45',
                address: '堺市北区東三国ヶ丘町3丁3番12'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [135.50100581589487, 34.571056827710265]
            },
            properties: {
                title: 'スーパー銭湯じゃない普通の銭湯',
                date: '2024年1月7日 17:10',
                address: '堺市北区東三国ヶ丘町５丁８−７ヘルシーバス フォーユー'
            }
        }
    ]
};

for (let sakai of osakaSakai.heard) {
    things.features.push(sakai);
}
