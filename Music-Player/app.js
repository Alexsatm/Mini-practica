const musicContainer = document.querySelector('#container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


const songs = ['audio-1', 'audio-2', 'audio-3'];

let songIndex = 2;

loadSong(songs[songIndex])

function loadSong (song) {
    title.innerText = song;
    audio.src = `audio/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
}

//event listenner
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

function playSong () {
    musicContainer.classList.add('play')
    playBtn.querySelector('.play').style.display = 'none';
    playBtn.querySelector('.pause').style.display = 'block';

    audio.play()
}