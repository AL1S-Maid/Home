<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router';
import Loading from '@/views/Loading.vue';
import { useMainStore } from "@/stores";
import { ref, onMounted } from 'vue';
const store = useMainStore();
const router = useRouter();
const currentRoute = useRoute();

const handleScroll = (event) => {
  const routes = router.getRoutes();
  const totalRoutes = routes.length;
  let nextRouteIndex = currentRoute.meta.index;
  if (event.deltaY > 0) {
    nextRouteIndex = (nextRouteIndex + 1) % totalRoutes;
  } else {
    nextRouteIndex = (nextRouteIndex - 1 + totalRoutes) % totalRoutes;
  }
  store.imgLoadStatus = false;
  setTimeout(() => {
    router.push(routes[nextRouteIndex].path);
    store.imgLoadStatus = true;
  }, 200);
};

const header = ref(null);

const navShow = () => {
  document.addEventListener('mouseover', (event) => {
    if (header.value && event.clientY <= 100) {
      header.value.style.top = '0';
    }
  });
  document.addEventListener('mouseout', (event) => {
    if (header.value && event.clientY > 60) {
      header.value.style.top = '-60px';
    }
  });
};

onMounted(() => {
  navShow();
});

function getTransitionName(currentRoute, nextRoute) {
  const currentIndex = currentRoute.meta.index;
  const nextIndex = nextRoute.meta.index;

  return currentIndex < nextIndex ? 'slide-down' : 'slide-up';
}

</script>

<template>
  <header class="header" ref="header">
    <nav class="navbar">
      <ul class="links">
        <li><RouterLink  to="/">Home</RouterLink></li>
        <li><RouterLink  to="/services">Services</RouterLink></li>        
        <li><RouterLink  to="/album">Album</RouterLink></li>
        <li><RouterLink  to="/about">About</RouterLink></li>
        <li><RouterLink  to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main class="main" @wheel="handleScroll">
    <Loading  />
    
    <router-view v-slot="{ Component }">
      <transition :name="getTransitionName(currentRoute, $route)" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer class="footer">
      @2024-2025 | BY:KeyFab | 网页版权归KeyFab所有
    </footer>
  </main>
</template>

<style lang="scss" scoped>
@import '@/style/part.scss';
.header{
  top: -60px;
  width: 100%;
  position: fixed;
  transition: all .4s;
  z-index: 999;
  .navbar{
    @include flex-style;
    width: 100%;
    max-width: 1200px;
    height: 60px;
    margin: 0 auto;
    .links{
      display: flex;
      gap: 3.6rem;
      a{
        color: $fontColor;
        text-decoration: none;
        font-weight: 800;
        font-size: 22px;
        &:hover{
          color: gray;
        }
      }
    }
    
  }
}

.main{
  position: absolute;
  display: flex;
  flex-direction: column;
  .footer{
    display: flex;
    margin-top: 97vh;
    width: 100%;
    height: 35px;
    clear: both;
    text-align: center;
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 1;
    color: $fontColor;
    @include wrapper-style;
    background-color: #0000004f;
    font-family: Pacifico-Regular;
    font-size: 12px;
  }
}
</style>
