let osaka5th = {
  heard: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.51340219922275, 34.73775189505879]
      },
      properties: {
        title: '白い靴下履くんやったら白いパンツ履かなあかん',
        date: '2024年3月16日 12:54',
        address: '大阪市東淀川区東淀川区淡路3-13 淡路3公園'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.51899158472293, 34.738570216882295]
      },
      properties: {
        title: 'この道初めて',
        date: '2024年3月16日 13:03',
        address: '大阪市東淀川区東淡路4丁目21番21'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.52593033628847, 34.73893215359102]
      },
      properties: {
        title: '今日朝お風呂入った',
        date: '2024年3月16日 13:22',
        address: '大阪市東淀川区菅原3丁目3番8'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.53721752632816, 34.74455883901929]
      },
      properties: {
        title: '何休んでんねん',
        date: '2024年3月16日 13:35',
        address: '大阪市東淀川区豊新4丁目10番19'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.5446133411508, 34.743818796855265]
      },
      properties: {
        title: '3回結婚してはるねんで<br>お葬式まで面倒見る分お金はもらいます',
        date: '2024年3月16日 14:25',
        address: '大阪市東淀川区大桐1-1-7だいどう豊里駅'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.5226123180218, 34.73568170563705]
      },
      properties: {
        title: '走らなくていいから',
        date: '2024年3月18日 15:36',
        address: '大阪市東淀川区東淡路3丁目6番22'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.55266076975124, 34.740965526151854]
      },
      properties: {
        title: 'A whole new world',
        date: '2024年3月18日 15:56',
        address: '大阪市東淀川区大道南1丁目25番23'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.50679974497035, 34.74409247444555]
      },
      properties: {
        title: 'ジャンプ',
        date: '2024年3月18日 16:54',
        address: '大阪市東淀川区西淡路6丁目1番1'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.45068303243318, 34.733349686039176]
      },
      properties: {
        title: 'はいご苦労さん',
        date: '2024年3月18日 17:35',
        address: '大阪市淀川区加島4丁目18番31'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.4469876062476, 34.73006979742057]
      },
      properties: {
        title: 'はははははは',
        date: '2024年3月18日 17:41',
        address: '大阪市淀川区淀川区加島3-16-89'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.45559245204328, 34.712604090149256]
      },
      properties: {
        title: '日本共産党でございます',
        date: '2024年3月18日 18:03',
        address: '大阪市西淀川区御幣島2丁目5番1'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.50867492294856, 34.706670107307296]
      },
      properties: {
        title: 'それじゃあ実際一体こったい<br>どうなんだって',
        date: '2024年3月25日 2:20',
        address: '大阪市北区黒崎町2番3'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.4963788879552, 34.69953215018194]
      },
      properties: {
        title: 'メニューおまへんか？',
        date: '2024年3月27日 12:48',
        address: '大阪市北区梅田 大阪駅前第一ビル 神仙閣ビアガーデン'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.4965103627493, 34.699216360607195]
      },
      properties: {
        title: 'まぁまぁそんなもんで',
        date: '2024年3月27日 11:45',
        address: '大阪市北区スマートバイヤー 梅田店'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.51182301236844, 34.704860766478674]
      },
      properties: {
        title: 'ブルーサファイアの100均の',
        date: '2024年3月28日 14:09',
        address: '大阪市北区天神橋4丁目4番1'
      }
    }
  ]
};

for (const osakaKita of osaka5th.heard) {
  things.features.push(osakaKita);
}
