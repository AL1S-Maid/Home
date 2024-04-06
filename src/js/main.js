window.onload=()=>{
  (function(){
    // navbar
    // const heading=document.querySelector('.list')
    const header=document.querySelector('.header')
    // window.addEventListener('scroll',()=>{
    //   const n =document.documentElement.scrollTop
    //   if (n>=heading.offsetTop) {
    //     header.style.top=0
    //   } else {
    //     header.style.top='-60px'
    //   }
    // })

    document.addEventListener('mouseover', (event) => {
      if (event.clientY <= 100) { // 鼠标距离文档顶部小于等于100px时显示元素
        header.style.top = 0;
      }
    });
    
    document.addEventListener('mouseout', (event) => {
      if (event.clientY > 60) { // 鼠标距离文档顶部大于60px时隐藏元素
        header.style.top = '-60px';
      }
    });
  })();

  (function(){
    const navbar=document.querySelector('.navbar')
    navbar.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetSection = event.target.textContent.toLowerCase();
        const targetElement = document.querySelector('.' + targetSection);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
    
  })();
    



    //页面滚动
    let canScroll = true;
    const container = document.querySelector('.container');
    window.addEventListener('wheel', (event) => {
      if (!canScroll) {
        return;
      }
    
      // 判断鼠标滚动事件是否在.container组件内
      if (container.contains(event.target)) {
        return; // 如果在.container内，不执行页面滚动操作
      }
    
      const scrollAmount = window.innerHeight;
    
      if (event.deltaY > 0) {
        smoothScroll(window.scrollY + scrollAmount, 400);
      } else {
        smoothScroll(window.scrollY - scrollAmount, 400);
      }
    
      canScroll = false;
      setTimeout(() => {
        canScroll = true;
      }, 1000);
    });

    //平滑函数 通过 requestAnimationFrame() 方法在一定时间内逐渐滚动到指定位置
    function smoothScroll(target, duration) {
      const startTime = performance.now();
      const startY = window.scrollY;
      const distance = target - startY;
  
      function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        window.scrollTo(0, easeInOut(startY, distance, elapsedTime, duration));

        if (elapsedTime < duration) {
          requestAnimationFrame(step);
        }
      }
  
      function easeInOut(start, distance, elapsedTime, duration) {
        elapsedTime /= duration / 2;
        if (elapsedTime < 1) return distance / 2 * elapsedTime * elapsedTime + start;
        elapsedTime--;
        return -distance / 2 * (elapsedTime * (elapsedTime - 2) - 1) + start;
      }
  
      requestAnimationFrame(step);
    }


   


  (function(){
    const toggleBtn=document.querySelector('.toggle')
    const DropDownMenu=document.querySelector('.dropdown_menu')
    toggleBtn.addEventListener('click',() => {
      DropDownMenu.classList.toggle('open')
    })
  })();


  (function(){
    function getTime(){
      const time=document.querySelector('.time')
      const nowDate=document.querySelector('.Date')
      const date=new Date()
      const weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const weekday =  weekdayArr[date.getDay()];
      let years=date.getFullYear()
      let months=date.getMonth()+1
      let days=date.getDate()
      let h=date.getHours()
      let m=date.getMinutes()
      let s=date.getSeconds()
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s
      time.innerHTML=h+':'+m+':'+s
      nowDate.innerHTML = years + '.' + months + '.' + days + ' ' +weekday
    }
    setInterval(getTime,1000)
  })();
  

}