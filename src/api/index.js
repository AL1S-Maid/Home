import axios from 'axios'
function getWeather(latitude, longitude) {
  const apiKey = '7f239ae39889096beca7fcf79cd67d39';
  const weatherElement = document.querySelector('.weather');
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; // 添加units=metric参数以获取摄氏度单位的温度
  axios.get(url)
    .then(response => {
      const weatherData = response.data;
      weatherElement.textContent = `${weatherData.sys.country} ${weatherData.weather[0].description}  ${weatherData.main.temp}°C`; // 拼接位置天气描述和实时温度
    })
    .catch(error => {
      console.error(error);
      weatherElement.textContent='数据获取失败'
    });
}
// 获取地理位置
function updateWeatherData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeather(latitude, longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
updateWeatherData()

setInterval(updateWeatherData,3600000)