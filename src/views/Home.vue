<script lang="ts" setup>
import videoPlayer from '@/components/videoPlayer.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
const drawer = ref(false)

const activities = [
  {
    content: '再次重构-Vue3',
    timestamp: '2024-04-28',
  },
  {
    content: '初次重构-NodeJs',
    timestamp: '2024-04-18',
  },
  {
    content: '立项-原生js',
    timestamp: '2024-03-11',
  },
]

const open = () => {
  ElMessageBox.alert('该功能暂未实现，敬请期待一下吧~', '提示', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
defineOptions({
  name: 'HomeIndex'
})
</script>

<template>
  <div class="home" id="home">
    <video src="@/../public/videos/BlueArchive4th PV.mp4" loop autoplay muted="true" class="bgd"></video>
    <div class="all">
      <div class="left">
        <div class="logo">
          <img src="@/../public/images/白子.gif">
          <div class="name">
            <span style="font-size: 5rem;">KeyFab</span>
          </div>
        </div>
        <div class="description cards">
          <p style="font-size: 18px;">人为什么要为了死亡而出生在这个世上？</p>
          <p style="text-align: right; font-size: 18px;">--Honkai StarRail</p>
        </div>
        <el-timeline style="max-width: 60vw;margin-top: 2vh;margin-left: -14vw;">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            class="timeline-item"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="right">
        <videoPlayer />
        <span class="line">List</span>
        <div class="list">
          <el-button plain @click="open" class="el-col">
            <img src="@/../public/images/icons/forum.png"><span>Forum</span>
          </el-button>
          <el-button type="primary" @click="drawer = true" class="el-col">
            <img src="@/../public/images/icons/music.png"><span>Music</span>
          </el-button>
          <el-button plain @click="open" class="el-col">
            <img src="@/../public/images/icons/server-outline.png"><span>SQL</span>
          </el-button>
          <el-button plain @click="open" class="el-col">
            <img src="@/../public/images/icons/toggle.png"><span>URL</span>
          </el-button>
          <el-button plain @click="open" class="el-col">
            <img src="@/../public/images/icons/hot.png"><span>Hot</span>
          </el-button>
          <el-button plain @click="open" class="el-col">
            <img src="@/../public/images/icons/settings.png"><span>Settings</span>
          </el-button>
        </div>
      </div>
      <el-drawer v-model="drawer" title="Music" :with-header="true" class="el-dra">
        <el-empty description="空空如也" />
      </el-drawer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/part.scss';
.home{
  @include body-style;
  margin: 0 auto;
  video{
    @include body-style;
    position: absolute;
    pointer-events: none;
    object-fit: cover;
    z-index: -1;
  }
  .all{
    width: 100%;
    height: 100%;
    padding: 0 .75rem;
    @include flex-style;
    font-family: Pacifico-Regular;
    .left{
      width: 50%;
      margin-right: 10px;
      transform: translateY(-30px);
      @include flex-style;
      margin-top: 12.5vh;
      flex-direction: column;
      .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        animation: fade .5s;
        max-width: 460px;
        img{
          width: 105px;
          height: 105px;
          border-radius: 50%;
          margin-right: 15px;
        }
        .name{
          width: 100%;
          text-align: center;
          transform: translateY(-8px);
          font-family: Pacifico-Regular;
          color: $fontColor;
        }
      }
      .description{
        padding: 1rem;
        margin-top: 3.5rem;
        max-width: 460px;
        animation: fade .5s;
      }
      .cards{
        border-radius: 6px;
        background-color: #00000040;
        @include wrapper-style;
        transform: scale(1);
        transition: backdrop-filter .3s, transform .3s;
        p{
          margin: .75rem 1rem;
          line-height: 2rem;
          font-size: 15px;
          color: $fontColor;
        }
      }
    }
    .right{
      width: 50%;
      margin-left: .75rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      .line{
        color: $fontColor;
        margin-left: 8px;
        font-size: 1.15rem;
        text-shadow: 0 0 5px rgba(0,0,0,.3137254902);
      }
      .list{
        display: grid;
        grid-template-columns: repeat(3, minmax(0px, 1fr));
        justify-items: end;
        left: -10px;
        width: 588px;
        height: 225px;
        padding: 5px 10px 0;
        .el-col{
          font-family: Pacifico-Regular;
          color: #fff;
          border: none;
          height: 100px;
          width: 182px;
          @include flex-style;
          border-radius: 10px;
          padding: 0 10px;
          animation: fade .5s;
          background-color: #00000040;
          @include wrapper-style;
          font-size: 25px;
          transition: height .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          &:hover{background-color: rgba(255, 255, 255, 0.4);}
          img{height: 35px;}
        }
      }
    }
  }
}
</style>
