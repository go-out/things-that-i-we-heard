'use strict'

switch (document.readyState) {
    case "loading":
        // この文書はまだ読み込み中
        const head = document.querySelector('head')
        if (head) {
            document.title = head.title;
            const ogTitle = document.createElement("meta")
            const twTitle = document.createElement("meta")
            ogTitle.setAttribute("property", "og:title")
            twTitle.setAttribute("name", "twitter:title")
            ogTitle.setAttribute("content", document.title)
            twTitle.setAttribute("content", document.title)
            head.appendChild(ogTitle)
            head.appendChild(twTitle)

            let allThings = 0;
            for (const jsEach of head.things) {
                const script = document.createElement("script")
                script.src = jsEach.js;

                let heardArr = jsEach.arr;
                let pushArr = jsEach.push;
                for (const pushArr of heardArr.heard) {
                    things.features.push(pushArr);
                    allThings + heardArr.heard[length]
                }

                head.appendChild(script)
            }

            const description = document.head.querySelector("[name=description][content]").content;
            description = `私（わたしたち）が ${head.area}で聞いた ${allThings} の 言葉`;
            const ogDescription = document.createElement("meta")
            const twDescription = document.createElement("meta")
            ogDescription.setAttribute("property", "og:description")
            twDescription.setAttribute("name", "twitter:description")
            ogDescription.setAttribute("content", description)
            twDescription.setAttribute("content", description)
            head.appendChild(ogDescription)
            head.appendChild(twDescription)

            const bounds = head.bounds;
            const center = head.center;
            const zoom = head.zoom;
            const zoomIn = head.zoomIn;
        }
        break;
    case "interactive": {
        // この文書は読み込みが終了した。 DOM 要素にアクセスできるようになった。
        // しかし、画像、スタイルシート、フレームなどの副リソースはまだ読み込み中。

        break;
    }
    case "complete":
        // ページが完全に読み込み完了。

        break;
}
