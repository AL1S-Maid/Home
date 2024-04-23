import { navShow,navLinks,getTime,dropDownMenu,searchIpt } from "./src/utils/func";

const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = './public/images/icons/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);

window.addEventListener('load',()=>{
  const loader = document.querySelector('#loader-wrapper')
  loader.classList.add('hidden')
  setTimeout(()=>{
    loader.style.display='none'
  },1000)

  navShow()
  navLinks()
  
  searchIpt()
  dropDownMenu()
})
setInterval(getTime,1000)

