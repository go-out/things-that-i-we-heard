let osaka3rd = {
  heard: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.40149776697507, 34.66695718509628]
      },
      properties: {
        title: 'モミジバフウ',
        date: '2024年4月7日 12:30',
        address: '大阪市此花区此花区北港緑地1/北港緑地2舞洲東バス停'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.39092015142256, 34.66607545876393]
      },
      properties: {
        title: '一人1500円',
        date: '2024年4月7日 13:00',
        address: '大阪市此花区北港緑地2丁目新夕陽ヶ丘'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [135.4799526669222, 34.66767657762675]
      },
      properties: {
        title: 'かわいいって言われる',
        date: '2024年4月30日 21:45',
        address: '大阪市大正区大正区三軒家西1/西区千代崎3岩松橋'
      }
    }
  ]
};

for (const osakaBayarea of osaka3rd.heard) {
  things.features.push(osakaBayarea);
}
