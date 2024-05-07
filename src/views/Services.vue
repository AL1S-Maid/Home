<script setup>
import { ref, onMounted } from 'vue';
import inputWrpper from '@/components/inputWrpper.vue'
import getWeather from '@/components/getWeather.vue'
defineOptions({
  name: 'ServicesView',
});

// getTime
const time = ref('');
const nowDate = ref('');

const updateClock = () => {
  const date = new Date();
  const weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = weekdayArr[date.getDay()];
  let years = date.getFullYear();
  let months = date.getMonth() + 1;
  let days = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  time.value = h + ':' + m + ':' + s;
  nowDate.value = years + '.' + months + '.' + days + ' ' + weekday;
};

onMounted(() => {
  updateClock();
  setInterval(updateClock, 1000);
});

</script>

<template>
  <div class="services" id="services">
    <div class="topText">
      <span class="time">{{ time }}</span>
    <p/>
    <span class="Date">{{ nowDate }}</span>
    <p/>
      <getWeather />
    </div>
    <inputWrpper />
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/part.scss';
.services{
  @include flex-style;
  flex-direction: column;
  @include body-style;
  background-image: url(@/../public/images/Noa&Yuki.jpg);
  background-size: cover;
  background-position: center;
  .topText{
    display: flex;
    flex-direction: column;
    transform: translateY(-250px);
    position: absolute;
    .time{
      font-size: 65px;
      color: $fontColor;
      text-align: center;
    }
    .Date{
      font-size: 30px;
      color: $fontColor;
      text-align: center;
    }
  }
}
</style>