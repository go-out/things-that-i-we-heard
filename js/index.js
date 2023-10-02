'use strict'

indexHead()

async function fetchHTML(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerHTML => {
            document.querySelector(query).innerHTML = innerHTML;
        });
}

function indexHead() {
    const head = document.querySelector('head');

    const googleapis = document.createElement("link");
    googleapis.setAttribute("rel", "preconnect");
    googleapis.setAttribute("href", "https://fonts.googleapis.com");
    head.appendChild(googleapis);

    const gstatic = document.createElement("link");
    gstatic.setAttribute("rel", "preconnect");
    gstatic.setAttribute("href", "https://fonts.gstatic.com");
    gstatic.setAttribute("crossorigin", "anonymous");
    head.appendChild(gstatic);

    const fonts = document.createElement("link");
    fonts.setAttribute("rel", "stylesheet");
    fonts.setAttribute("href", "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Zen+Old+Mincho&display=swap");
    head.appendChild(fonts);
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const title = document.querySelector('#title');
        title.addEventListener('click', function () {
            document.body.classList.toggle('enter');
            openModal()
        }, false);

        const dialogModal = document.querySelector('dialog')
        const closeModal = document.querySelector('#closeModal')
        closeModal.addEventListener('click', () => {
            dialogModal.close()
        })

        let mainBtn = document.querySelector('#changeHidden');
        mainBtn.addEventListener('click', function () {
            const mainAll = document.querySelectorAll('main');
            mainAll.forEach(main => {
                if (main.hidden == false) {
                    main.hidden = true;
                    mainBtn.textContent = "?";
                } else {
                    main.hidden = false;
                    mainBtn.textContent = "×";
                }
            })
        }, false);

        fetchHTML('https://things-that-i-we-heard.github.io/readme.html', '#readme section');
    } else if (event.target.readyState === 'complete') {
        const now = new Date();
        const year = now.getFullYear();
        document.querySelector('#copy time').innerHTML = year;
    }
});

function openModal() {
    const dialogModal = document.querySelector('dialog')
    if (typeof dialogModal.showModal === "function") {
        dialogModal.showModal()
    } else {
        alert("The <dialog> API is not supported by this browser")
    }
}