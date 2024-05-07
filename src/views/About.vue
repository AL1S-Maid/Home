<script setup>
import { ref } from 'vue'
const drawer = ref(false)
const drawer2 = ref(false)
</script>

<template>
  <div class="about" id="about">
    <el-drawer v-model="drawer" title="About Auther" :with-header="true">
      <span>
        <h2>@某不知名Sensei</h2>
        <p>一名普通学生党，热衷于网页，动画制作、绘画、软件开发等。喜欢玩一些游戏，比较喜欢骑行，喜欢动漫。</p>
        <p></p>
        <p>暂无更多介绍...</p>
      </span>
    </el-drawer>
    <el-drawer v-model="drawer2" title="About Team" :with-header="true">
      <span>暂无团队......</span>
      <el-empty :image-size="200" description="No Team" />
    </el-drawer>
    <div class="heading">
      <h1>About</h1>
    </div>
    <main>
      <el-timeline style="max-width: 23vw" class="about-timeline">
        <el-timeline-item timestamp="2024-04-28" placement="top" class="about-timeline-item">
          <el-card class="about-timeline-card">
            <h4>再次重构-Vue3</h4>
            <p>第二次重构：使用Vue3+Element-plus+Vite全部重构</p>
            <p>2024-04-28</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024-04-18" placement="top" class="about-timeline-item">
          <el-card class="about-timeline-card">
            <h4>初次重构-Node</h4>
            <p>首次重构：基于Node环境，使用Vite打包构建,优化代码</p>
            <p>2024-04-18</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024-03-11" placement="top" class="about-timeline-item">
          <el-card class="about-timeline-card">
            <h4>立项-原生js</h4>
            <p>初次打算制作：使用Html5+css+Js制作,部分复用</p>
            <p>2024-03-11</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <div class="about-website">
        <h2>About Website</h2>
        <article>
          <div class="txt">
            Vue3+Vite+Element-plus制作的碧蓝档案风格的个人博客，素材大部分来源于网络。<p />
            项目基于Vite打包构建，部分引用Element-Plus组件库，实现了音乐播放、导航、搜索、获取实时天气和地理位置(OpenWeatherAPI)、路由切换等功能<p />
            整个网页编码、结构设计、图像处理均由作者本人独立完成，素材来源于网络。不得私自盗用，商业化，使用时请标明出处。<p />
            本来打算加入Vuetify，但是使用时遇到些困难。项目还有许多不足，今后还会继续学习，优化改进好网页<p />
          </div>
          <div class="txt">
            <p>刚开始制作时，本人甚至还只是停留在javascript的学习阶段，制作起来相当困难，更多的也还都是以前项目的代码复用，布局和样式也借鉴了别人的网页。</p>
            <p>一开始打算用js制作一个单页面应用，初版制作出来的时候，整体的交互并没有多少，还因为动画过多导致页面卡顿，有些bug自己解决不了只能问大佬。</p>
            <p>整个网页的结构代码有350多行，样式712行，这样冗杂的代码都堆砌在一个文件中显然不利于维护修改，重构也只是时间问题</p>
          </div>
          <div class="txt">
            <p>经过一段时间的学习，我也渐渐感觉自己做的这个网页太拉了，带着这些不满，我打算重构网页。</p>
            <p>原本打算使用vue2重构，但是当时习惯了js操作dom的我用vue2选项式api操作数据是在需要适应一下，便折中选择基于Node环境使用Vite构建。</p>
            <p>第一次重构并不困难，代码的变化也不算太大，引入了组件库，使得代码上限更高，还对代码做了更多优化和修改，使代码可读性更高，性能更好</p>
            <p>但很显然，即使对代码进行了修改拆解，代码量依旧大，维护修改起来也十分麻烦，所以不久后便再次重构。</p>
          </div>
          <div class="txt">
            <p>又学习了一段时间后，我决定将网页再次重构，这次我选择使用Vue3+Vite进行重构。</p>
            <p>从选项式api到组合式api的过渡对于一个小白来说无疑是困难的，写的时候甚至大脑都是有些空白的，但是通过一步步地学习也逐步克服了这些困难。</p>
            <p>此次重构基本相当于重写了一遍代码，使用Vue3重构，也使得代码相比之前300多行的结构和700行的样式更易维护，可读性和性能更强。</p>
            <p>由于对Element-plus的了解不多，组件结构也比较完善，所以我并不打算使用Element-plus重写结构，只引入部分功能组件，提升网页交互性。</p>
          </div>
        </article>
      </div>
    </main>
    <footer class="about-other">
      <div class="profile">
        <img src="@/../public/images/白子.gif" alt="">
      </div>
      <el-button type="primary" style="margin-left: 16px" @click="drawer = true" class="about-btn">
        About Auther...
      </el-button>
      <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true" class="about-btn">
        About Team...
      </el-button>
    </footer>
  </div>
  
</template>

<style lang="scss" scoped>
@import '@/style/part.scss';
.about{
  @include body-style;
  display: flex;
  flex-direction: column;
  background-image: url(@/../public/images/ARONAl.jpeg);
  background-size: cover;
  background-position: center;
  .heading h1{
    color: rgb(86, 219, 251);
    font-size: 5em;
    text-align: center;
    line-height: 12vh;
  }
  main{
    @include flex-style;
    .about-timeline{
      margin-left: -6.4%;
      .about-timeline-card{
        background-color: #20232350;
        color: #fff;
      }
    }
    .about-website{
      margin: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 50vw;
      height: 60vh;
      background-color: #2e333380;
      border-radius: 30px;
      margin-left: 5vw;
      h2{
        color: rgb(86, 219, 251);
        font-size: 1.8rem;
      }
      article{
        display: grid;
        grid-template-columns: repeat(2, minmax(0px, 1fr));
        gap: 5vw;
        .txt{
          width: 22vw;
          height: 18vh;
          color: #fff;
          font-size: 1vw;
        }
      }
    }
  }
  .about-other{
    height: 18vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .profile{
      height: 10vh;
      width: 6vw;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .about-btn{
      width: 20vw;
      height: 10vh;
      background-color: #20232350;
      border: #fff 2px solid;
      font-size: 1.35vw;
      font-weight: 600;
    }
  }
}
</style>
