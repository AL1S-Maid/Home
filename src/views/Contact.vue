<script setup>
defineOptions({
  name: "ContactView"
})
</script>

<template>
  <div class="contact" id="contact">
    <div class="heading">
      <h1>Contact</h1>
    </div>
    <div class="joinpart" id="jp">
      <div class="main-cont">
        <div class="goal">
          <h1>
            お問い合わせ<br/>
            CONTACT
          </h1>
          <p>&emsp;&emsp;</p>
          <p>&emsp;&emsp;The goal is to establish an excellent game production team, become an excellent game producer, 
          and create a virtual world that people love. The team currently has only one person and knows nothing. Everyone who is interested is welcome to join! </p>
          <p>&emsp;&emsp;Accept contact only from these and E-mail.</p>
          <p>&emsp;&emsp;Unauthorized modification or copying of information on this website is prohibited.</p>
          <div class="meth">
            <div class="icon qq">
              <ul>
                <li>QQ:123456789</li>
              </ul>
            </div>
            <div class="icon wechat">
              <ul>
                <li>Wechat:123456789</li>
              </ul>
            </div>
            <a href="https://space.bilibili.com/" target="top">
              <div class="icon bili">
                <ul>
                  <li>link to my bilibili</li>
                </ul>
              </div>
            </a>
            <a href="https://github.com/KeyFab123" target="new front">
              <div class="icon gh">
                <ul>
                  <li>link to my GitHub</li>
                </ul>
              </div>
            </a>
            <a href="#">
              <div class="icon em">
                <ul>
                  <li>link to my Email</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(@/../public/images/shiroko.jpeg);
  background-size: cover;
  background-position: center;
  .heading h1{
    color: rgb(86, 219, 251);
    font-size: 5em;
    text-align: center;
    line-height: 15vh;
  }
  .joinpart{
    width: 1200px;
    height: 650px;
    margin: auto;
    display: flex;
    justify-content: center;
    background-image: url("@/../public/images/砂狼白子.JPG");
    background-repeat: no-repeat;
    background-size: 1300px;
    overflow: hidden;
    opacity: 0.9;
    border-radius: 50px;
    animation: loadbac 1s linear;
    transition: 1s ease 0.2s;
    .main-cont{
      width: 80%;
      height: 100%;
      .goal{
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        h1{
          font-size: 40px;
          font-weight: bolder;
          line-height: 75px;
          color: rgb(86, 219, 251,);
        }
        p{
          color: #fff;
          word-wrap: break-word;
          font-size: 20px;
          font-weight: 800;
          line-height: 40px;
        }
        .meth{
          width: 500px;
          height: 100px;
          flex-direction: row;
          display: flex;
          justify-content: space-around;
          margin-top: 50px;
          .icon{
            width: 30px;
            height: 30px;
            background-size: cover;
            border-radius: 5px;
            background-repeat: no-repeat;
            background-position: center;
            transition: 0.4s ease 0s;
            ul{
              display: none;
              list-style: none;
              margin-top: 30px;
              width: 150px;
              margin-left: -40px;
              color: white;
              font-size: 14px;
              font-weight: 800;
            }
            &:hover{
              transform: scale(1.1);
              cursor: pointer;
              ul{
                display: block;
                position: absolute;
              }
            }
          }
          .qq{
            background-image: url("@/../public/images/icons/qq.PNG");
            background-size: 25px;
          }
          .wechat{
            background-image: url("@/../public/images/icons/WeChat.png");
          }
          .bili{
            background-image: url("@/../public/images/icons/bilibili.png");
          }
          .gh{
            background-image: url("@/../public/images/icons/github.PNG");
            background-size: 40px;
          }
          .em{
            background-image: url("@/../public/images/icons/email.png");
            background-size: 25px;
          }
        }
      }
    }
  }
}
</style>