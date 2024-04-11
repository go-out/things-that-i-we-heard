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

            const thing = document.createElement('section');
            thing.className = 'thing';
            thing.innerHTML = `
            <h3>${marker[4].replace(/"/g, '')}</h3>
            <p class="date">
            ${marker[0]}</br>
            ${marker[3].replace(/"/g, '')}
            </p>
            `;
            document.querySelector('#things').appendChild(thing)
        });
};