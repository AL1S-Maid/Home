// nav
export const navShow = () => {
  const header=document.querySelector('.header')

  document.addEventListener('mouseover', (event) => {
    if (event.clientY <= 100) {
      header.style.top = 0
    }
  })
  
  document.addEventListener('mouseout', (event) => {
    if (event.clientY > 60) {
      header.style.top = '-60px'
    }
  })
}


export const navLinks = () => {
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
        })
      }
    }
  })
}


// search
export const searchIpt = () => {
  const searchInput = document.querySelector('.input')
  const searchIcon = document.querySelector('.searchIcon')

  function searchWithBing() {
    const query = searchInput.value;
    const searchUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(query)
    window.open(searchUrl, '_blank')
  }

  searchIcon.addEventListener('click', searchWithBing)
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      searchWithBing()
    }
  })
}


export const dropDownMenu = () => {
  const toggleBtn=document.querySelector('.toggle')
  const DropDownMenu=document.querySelector('.dropdown_menu')
  toggleBtn.addEventListener('click',() => {
    DropDownMenu.classList.toggle('open')
  })
}


export const getTime = () =>{
  const time=document.querySelector('.time')
  const nowDate=document.querySelector('.Date')
  const date=new Date()
  const weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekday =  weekdayArr[date.getDay()]
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

// const helloInit = () => {
//   const hour = new Date().getHours();
//   let hello = null;
//   if (hour < 6) {
//     hello = "凌晨好";
//   } else if (hour < 9) {
//     hello = "早上好";
//   } else if (hour < 12) {
//     hello = "上午好";
//   } else if (hour < 14) {
//     hello = "中午好";
//   } else if (hour < 17) {
//     hello = "下午好";
//   } else if (hour < 19) {
//     hello = "傍晚好";
//   } else if (hour < 22) {
//     hello = "晚上好";
//   } else {
//     hello = "夜深了";
//   }
//   window.addEventListener('load',()=>{
//     hello = true
//     message: `<strong>${hello}</strong> 欢迎来到我的主页`
//   });
// };
// helloInit()