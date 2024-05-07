<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = ref([FreeMode])

    const handleMouseWheel = (event) => {
      event.preventDefault();
      const swiper = document.querySelector('.mySwiper').swiper
      if (event.deltaY > 0) {
        swiper.slideNext()
      } else {
        swiper.slidePrev()
      }
    }

    return {
      modules,
      handleMouseWheel,
    }
  },
}
</script>

<template>
  <div class="album" id="album">
    <div class="wallpaper-warp" @wheel.stop="handleMouseWheel">
      <swiper
        :slidesPerView="2.4"
        :spaceBetween="30"
        :freeMode="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/../public/images/美食研究会.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/ARONAl.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/lifuHina1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/Noa&Yuki.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/shiroko.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/AL1S&Kei.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/BA2th.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/3th.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/../public/images/3th2.png" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <div class="warp">
      <div class="warp-left"></div>
      <div class="warp-right">
        <span>Album</span>
        <span>Desktop Wallpaper</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/part.scss';
.album{
  @include body-style;
  @include flex-style;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background-image: url(@/../public/images/AL1S&Kei.jpg);
  background-size: cover;
  background-position: center;
  gap: 6vh;
  .wallpaper-warp{
    will-change: scroll-position;
    width: 100%;
    display: flex;
    -ms-overflow-style: none;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translate(-50%);
    flex-wrap: nowrap;
    height: 40vh;
    .swiper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        height: 100%;
        width: 40vw !important;
        margin-left: 2.6vw !important;
        margin-right: 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 10px;
        img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 100%;
          min-width: 100%;
          object-fit: cover;
          transition: all .3s ease;
          &:hover{
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .warp{
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    margin-bottom: -50vh;
    position: relative;
    .warp-left{
      height: 100%;
      width: 30vw;
      background-image: url(@/../public/images/icons/BaLogo.png);
      background-size: 100% 100%;
      position: absolute;
      margin-left: 8vw;
    }
    .warp-right{
      position: absolute;
      right: 5vw;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 50vw;
      span{
        width: 100%;
        height: 100%;
        font-size: 5vw;
        font-weight: 800;
        -webkit-text-stroke: 2px rgb(81, 219, 251);
        color: transparent;
        text-align: right;
      }
    }
  }
}
</style>