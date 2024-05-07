<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const weather = ref('');

    const getWeather = (latitude, longitude) => {
      const apiKey = '7f239ae39889096beca7fcf79cd67d39';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      
      axios.get(url)
        .then(response => {
          const weatherData = response.data;
          weather.value = `${weatherData.sys.country} ${weatherData.weather[0].description} ${weatherData.main.temp}°C`;
        })
        .catch(error => {
          console.error(error);
          weather.value = '数据获取失败';
        });
    }

    onMounted(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          getWeather(latitude, longitude);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    });

    setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          getWeather(latitude, longitude);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }, 3600000);

    return {
      weather
    };
  }
}
</script>

<template>
  <span class="weather">{{ weather }}</span>
</template>

<style scoped>
.weather{
  font-size: 20px;
  color: #fff;
  text-align: center;
}
</style>