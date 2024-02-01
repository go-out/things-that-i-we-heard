'use strict'

switch (document.readyState) {
    case "loading":
        // この文書はまだ読み込み中
        const head = document.querySelector('head')

        if (indexThis) {
            document.title = indexThis.title;
            const ogTitle = document.createElement("meta")
            const twTitle = document.createElement("meta")
            ogTitle.setAttribute("property", "og:title")
            twTitle.setAttribute("name", "twitter:title")
            ogTitle.setAttribute("content", document.title)
            twTitle.setAttribute("content", document.title)
            head.appendChild(ogTitle)
            head.appendChild(twTitle)

            for (const jsEach of indexThis.things) {
                const script = document.createElement("script")
                script.src = jsEach.js;
                head.appendChild(script)
            }

            const description = document.head.querySelector("[name=description][content]").content;
            description = `私（わたしたち）が ${indexThis.area}で聞いた言葉`;
            const ogDescription = document.createElement("meta")
            const twDescription = document.createElement("meta")
            ogDescription.setAttribute("property", "og:description")
            twDescription.setAttribute("name", "twitter:description")
            ogDescription.setAttribute("content", description)
            twDescription.setAttribute("content", description)
            head.appendChild(ogDescription)
            head.appendChild(twDescription)

            const bounds = indexThis.bounds;
            const center = indexThis.center;
            const zoom = indexThis.zoom;
            const zoomIn = indexThis.zoomIn;
        }
        break;
    case "interactive": {
        // この文書は読み込みが終了した。 DOM 要素にアクセスできるようになった。
        // しかし、画像、スタイルシート、フレームなどの副リソースはまだ読み込み中。

        let allThings = things.features[length];

        for (const jsEach of indexThis.things) {
            const script = document.createElement("script")
            script.src = jsEach.js;

            let heardArr = jsEach.arr;
            let pushArr = jsEach.push;
            for (const pushArr of heardArr.heard) {
                things.features.push(pushArr);
            }

            head.appendChild(script)
        }

        break;
    }
    case "complete":
        // ページが完全に読み込み完了。

        break;
}
