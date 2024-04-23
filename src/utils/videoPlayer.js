const volumeControl = document.querySelector('.volumeControl');
const title= document.querySelector('.title');
const prev= document.querySelector('.prev');
const playPause= document.querySelector('.playPause');
const next= document.querySelector('.next');
const audio= document.querySelector('audio');

// 设置音量
volumeControl.addEventListener('input', function() {
  audio.volume = volumeControl.value;
});

// song list
const songList=[
  {
    src:"../public/videos/Luminous Memory.mp3",
    songName:"Luminous memory",
  },
  {
    src:"../public/videos/Target for Love.mp3",
    songName:"Target for Love",
  },
  {
    src:"../public/videos/鹿乃 - 優しさの記憶 (温柔的回忆).mp3",
    songName:"優しさの記憶",
  }
];

let songPlaying = false;

//play song
const playSong = ()=>{
  songPlaying = true;
  audio.play();
  // playPause.classList.add('active');
  playPause.src='../public/images/icons/pause.png';
}

//pause song
const pauseSong = () => {
  songPlaying = false;
  audio.pause();
  // playPause.classList.remove('active');
  playPause.src='../public/images/icons/play.png';

}
//play/pause song
  playPause.addEventListener("click",() => (songPlaying? pauseSong() : playSong()));

//load song
const loadSong = (songList) => {
  title.textContent = songList.songName;
  audio.src = songList.src;//
}
let i = 0;
loadSong (songList[i]);

//previous song
const prevSong = () => {
  i--;
  if (i < 0){
    i = songList.length -1;
  }
  loadSong(songList[i]);
  playSong();
}

prev.addEventListener("click", prevSong);

//next song
const nextSong = () => {
  i++;
  if (i > (songList.length - 1)){
    i = 0;
  }
  loadSong(songList[i]);
  playSong();
}

next.addEventListener("click", nextSong);