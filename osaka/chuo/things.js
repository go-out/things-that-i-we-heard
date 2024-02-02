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
    }
  ]
};

for (const osakaChuo of osaka4th.heard) {
  things.features.push(osakaChuo);
}
