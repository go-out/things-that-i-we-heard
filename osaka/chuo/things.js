let osaka4th = {
  heard: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.49668428409916, 34.66129875911339]
      },
      properties: {
        title: '難波の綱引きよーいよい',
        date: '2024年1月21日 14:00',
        address: '大阪市浪速区浪速区元町2-9-19難波八阪神社'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.49761391755527, 34.65512385982274]
      },
      properties: {
        title: '京都新聞テレビ広告<br>東京マラソン',
        date: '2024年2月12日 9:45',
        address: '大阪市浪速区大国1丁目1番14'
      }
    }
  ]
};

for (const osakaChuo of osaka4th.heard) {
  things.features.push(osakaChuo);
}
