// IFrame Player API の読み込み

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: youtubeID,
        playerVars: {
            'controls': 0
        }
    });
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);