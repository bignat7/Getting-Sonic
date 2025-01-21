function playAudio() {
    const audio = document.getElementById('audioPlayer');
    const background = document.getElementById('background');

    if (background.classList.contains('background-active')) {
        background.classList.remove('background-active');
        audio.pause();
    } else {
        background.classList.add('background-active');
        audio.play();
    }
}