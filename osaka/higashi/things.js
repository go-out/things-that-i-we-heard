let osaka6th = {
  heard: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.57206908278266,34.664323093089465]
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
        coordinates: [135.56862927459872,34.66456155197923]
      },
      properties: {
        title: '入って即ロウリュウ',
        date: '2024年1月21日 18:30',
        address: '東大阪市長堂3丁目4番21'
      }
    }
  ]
};

for (const osakaHigashi of osaka6th.heard) {
  things.features.push(osakaHigashi);
}
