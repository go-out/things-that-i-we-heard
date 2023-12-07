// IFrame Player API の読み込み

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var videoId;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'controls': 0,
            'rel': 0
        }
    });
}