'use strict'

csvtojson('../submit.csv')

async function csvtojson(csv) {
    const response = await fetch(csv);
    const text = await response.text();
    const data = text.trim().split('\n')
        .map(line => line.split(',').map(x => x.trim()))
        .map(marker => {
            let thisMarker = {
                'type': 'Feature',
                'class': 'submit',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [marker[1], marker[2]]
                },
                'properties': {
                    'title': marker[4].replace(/"/g, ''),
                    'date': marker[0],
                    'address': marker[3].replace(/"/g, '')
                }
            };
            things.features.push(thisMarker);
        });
};