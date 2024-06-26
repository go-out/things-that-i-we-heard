let osaka6th = {
  heard: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.57206908278266, 34.664323093089465]
      },
      properties: {
        title: 'なんで90990？',
        date: '2024年1月21日 16:30',
        address: '東大阪市荒川3丁目4番17'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.56862927459872, 34.66456155197923]
      },
      properties: {
        title: '入って即ロウリュウ',
        date: '2024年1月21日 18:30',
        address: '東大阪市長堂3丁目4番21'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.58951319459118, 34.66375531909105]
      },
      properties: {
        title: 'いっこいしょ',
        date: '2024年2月12日 10:10',
        address: '東大阪市小阪3-1-1八戸ノ里駅'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.641694726592, 34.66078514339348]
      },
      properties: {
        title: 'ひょこタンひょこタンひょこタンタン',
        date: '2024年2月12日 12:20',
        address: '東大阪市瓢箪山町8-1瓢箪山稲荷神社'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.64003491139442, 34.66345651521239]
      },
      properties: {
        title: '上ハラミ200g',
        date: '2024年2月12日 15:15',
        address: '東大阪市昭和町2番3'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.6399750826638, 34.66452319443347]
      },
      properties: {
        title: 'チーズブール',
        date: '2024年2月12日 15:30',
        address: '東大阪市昭和町1番3'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.6345042905067, 34.66760724454545]
      },
      properties: {
        title: '太陽浴びてるんちゃうんかい',
        date: '2024年2月12日 16:30',
        address: '東大阪市旭町22番17'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.63511604994824, 34.672687158283935]
      },
      properties: {
        title: 'ちょっとエチエチ過ぎじゃない？',
        date: '2024年2月12日 17:30',
        address: '東大阪市新町17番3'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.59150274179535, 34.67892751879245]
      },
      properties: {
        title: '長田までが「けいはんな」じゃなくて<br>長田からが「中央線」な',
        date: '2024年2月12日 21:10',
        address: '東大阪市長田東長田駅'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.54455963577146, 34.6805514731858]
      },
      properties: {
        title: '家しか財産ないもん',
        date: '2024年3月16日 14:35',
        address: '大阪市東成区東中本1-13中央線 緑橋駅'
      }
    }
  ]
};

for (const osakaHigashi of osaka6th.heard) {
  things.features.push(osakaHigashi);
}
