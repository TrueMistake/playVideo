window.onload = function () {
    playVideo('video','playBtn',0);
}

function playVideo(v, p, number) {
    var videoEl = document.getElementsByTagName(v)[number];
    var playBtn = document.getElementById(p);
    playBtn.addEventListener('click', function () {
        if (videoEl.paused) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }, false);

    videoEl.addEventListener('play', function () {
        playBtn.style.display = 'none';
        videoEl.setAttribute('controls', 'controls');
    }, false);
    videoEl.addEventListener('pause', function () {

    }, false);
}