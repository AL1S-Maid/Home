<script setup>
import { ref } from 'vue';
import { watch } from 'vue';

const currentSongIndex = ref(0);
const isPlaying = ref(false);
const volume = ref(1);
const songList = [
  {
    src: "@/../public/videos/Luminous Memory.mp3",
    songName: "Luminous memory",
  },
  {
    src: "@/../public/videos/Target for Love.mp3",
    songName: "Target for Love",
  },
  {
    src: "@/../public/videos/鹿乃 - 優しさの記憶 (温柔的回忆).mp3",
    songName: "優しさの記憶",
  },
];
const audioPlayer = ref(null);

const playSong = () => {
  if (audioPlayer.value) {
    isPlaying.value = true;
    audioPlayer.value.play().catch(error => {
      console.error('Failed to play audio:', error);
    });
  }
};

const pauseSong = () => {
  if (audioPlayer.value) {
    isPlaying.value = false;
    audioPlayer.value.pause();
  }
};

const togglePlayPause = () => {
  isPlaying.value ? pauseSong() : playSong();
};

const loadSong = () => {
  if (audioPlayer.value) {
    audioPlayer.value.src = songList[currentSongIndex.value].src;
    audioPlayer.value.load();
    audioPlayer.value.addEventListener('canplaythrough', () => {
      playSong();
    }, { once: true }); // Ensure the event listener is executed only once
  }
};

const prevSong = () => {
  currentSongIndex.value = (currentSongIndex.value - 1 + songList.length) % songList.length;
  loadSong();
};

const nextSong = () => {
  const wasPlaying = isPlaying.value;
  currentSongIndex.value = (currentSongIndex.value + 1) % songList.length;
  if (wasPlaying) {
    loadSong();
  } else {
    isPlaying.value = false;
  }
};

watch(volume, (newVolume) => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = newVolume;
  }
});
</script>

<template>
  <div class="videoPlayer">
    <span class="title" style="color: #fff; font-size: 20px;">{{ songList[currentSongIndex].songName }}</span>
    <div class="player">
      <audio ref="audioPlayer" :src="songList[currentSongIndex].src" loop></audio>
      <img @click="prevSong" src="@/../public/images/icons/play-skip-back-outline.png" class="i-icon prev">
      <img @click="togglePlayPause" :src="isPlaying ? '@/../public/images/icons/pause.png' : '@/../public/images/icons/play.png'" class="i-icon playPause">
      <img @click="nextSong" src="@/../public/images/icons/play-skip-forward-outline.png" class="i-icon next">
    </div>
    <div class="setline">
      <img src="@/../public/images/icons/volume-high-outline.png">
      <input type="range" class="volumeControl" min="0" max="1" step="0.01" v-model="volume">
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '@/style/part.scss';
.videoPlayer{
  margin-left: 15px;
  width: 500px;
  height: 165px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #00000040;
  @include wrapper-style;
  .player{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    width: 100%;
    .i-icon{
      width: 36px;
      height: 36px;
      @include flex-style;
      border-radius: 6px;
      cursor: pointer;
      transform: scale(1);
    }
  }
  .setline{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    img{
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
    input[type="range"]{
      width: 260px;
      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        background-color: #fff;
        border-radius: 10px;
        height: 15px;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: #0000004f;
        cursor: pointer;
      }
    }
  }
}
</style>