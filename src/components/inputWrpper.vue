<script setup>
import { ref, onMounted, nextTick } from 'vue';

const toggleBtn = ref(null);
const DropDownMenu = ref(null);

const searchWithBing = () => {
  const searchInput = document.querySelector('.input');
  const query = searchInput.value.trim();
  if (!query) {
    return;
  }
  const searchUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(query);
  window.open(searchUrl, '_blank');
};

const toggleDropDown = () => {
  DropDownMenu.value.classList.toggle('open');
};

const menuItems = [
  { name: 'Github', url: 'https://github.com', icon: '@/../public/images/icons/github2.png', class: 'github engine' },
  { name: 'Bilibili', url: 'https://bilibili.com', icon: '@/../public/images/icons/bilibili.png', class: 'bilibili engine' },
  { name: 'Gitee', url: 'https://gitee.com', icon: '@/../public/images/icons/gitee.png', class: 'gitee engine' },
  { name: 'Email', url: 'https://mail.google.com/gamil', icon: '@/../public/images/icons/email.png', class: 'email engine' },
  { name: 'Twitter', url: 'https://X.com', icon: '@/../public/images/icons/twitter.png', class: 'twitter engine' },
  { name: 'Pixiv', url: 'http://www.pixiv.net/', icon: '@/../public/images/icons/pixiv.png', class: 'pixiv engine' },
  { name: 'Youtube', url: 'https://youtube.com', icon: '@/../public/images/icons/Youtube.png', class: 'youtube engine' },
  { name: 'Facebook', url: 'https://facebook.com', icon: '@/../public/images/icons/facebook.png', class: 'facebook engine' }
];

onMounted(() => {
  const searchInput = document.querySelector('.input');
  const searchIcon = document.querySelector('.searchIcon');
  
  searchIcon.addEventListener('click', searchWithBing);

  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchWithBing();
    }
  });
});

onMounted(async () => {
  await nextTick();
  toggleBtn.value = document.querySelector('.toggle');
  DropDownMenu.value = document.querySelector('.dropdown_menu');
  
  if (toggleBtn.value) {
    toggleBtn.value.addEventListener('click', toggleDropDown);
  }
});
</script>

<template>
  <div class="inputWrpper">
    <input placeholder="Search" spellcheck="false" type="text" aria-live="polite" autocomplete="off" class="input">
    <ion-icon name="search-outline" class="searchIcon"></ion-icon>
    <div class="toggle" ref="toggleBtn"><img src="@/../public/images/icons/toggle.png"></div>
  </div>
  <div class="dropdown_menu" ref="DropDownMenu">
    <div class="all-engine">
      <a v-for="item in menuItems" :key="item.name" :href="item.url" target="_blank">
        <div :class="item.class">
          <img :src="item.icon">
          <span>{{ item.name }}</span>
        </div>
      </a>
      <div class="engine">
        <span style="font-weight: 800;">自定义+</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/part.scss';
.inputWrpper{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 60px);
  max-width: 680px;
  height: 42px;
  border-radius: 30px;
  @include wrapper-style;
  background-color: #0000001f;
  transform: translateY(-120px);
  .toggle{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    left: 14px;
    position: absolute;
    img{
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  .input{
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    text-align: center;
    color: #fff;
    &::placeholder { /* Mozilla Firefox 4 to 18 */
      font-size: 18px; 
      color: #fff;
    }
  }
}
ion-icon{
  position: absolute;
  right: 20px;
  color: $fontColor;
  font-size: 1.5rem;
  cursor: pointer;
}
.dropdown_menu{
  top: -10px;
  display: flex;
  flex-direction: row;
  // display: none;
  height: 0px;
  width: calc(100% - 60px);
  max-width: 680px;
  background: rgba(0, 0, 0, 0.346666);
  backdrop-filter: blur(15px);
  --webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  transition: height .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .all-engine{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 10px;
    .engine{
      @include flex-style;
      margin: 5px;
      width: 150px;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.3766666);
      border-radius: 10px;
      cursor: pointer;
      transition: background-color .3s, box-shadow .3s;
      &:hover{background-color: rgba(255, 255, 255, 0.4);}
      span{
        color: $fontColor;
        font-size: 15px;
        text-align: center;
        margin: auto;
      }
      img{
        width: 30px;
        height: 30px;
        margin-left: 15px;
      }
    }
  }
}
.dropdown_menu.open{
  height: 210px;
  margin-top: 30px; 
  transition: height .3s cubic-bezier(0.175, 0.885, 0.32, 1.275), margin-top .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>