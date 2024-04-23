let canScroll = true;
const container = document.querySelector('.container');
window.addEventListener('wheel', (event) => {
  if (!canScroll) {
    return
  }

  // 判断鼠标滚动事件是否在.container组件内
  if (container.contains(event.target)) {
    return // 如果在.container内，不执行页面滚动操作
  }

  const scrollAmount = window.innerHeight;

  if (event.deltaY > 0) {
    smoothScroll(window.scrollY + scrollAmount, 400)
  } else {
    smoothScroll(window.scrollY - scrollAmount, 400)
  }

  canScroll = false
  setTimeout(() => {
    canScroll = true
  }, 1000)
});

function smoothScroll(target, duration) {
  const startTime = performance.now()
  const startY = window.scrollY
  const distance = target - startY

  function step(currentTime) {
    const elapsedTime = currentTime - startTime
    window.scrollTo(0, easeInOut(startY, distance, elapsedTime, duration))

    if (elapsedTime < duration) {
      requestAnimationFrame(step)
    }
  }

  function easeInOut(start, distance, elapsedTime, duration) {
    elapsedTime /= duration / 2;
    if (elapsedTime < 1) return distance / 2 * elapsedTime * elapsedTime + start
    elapsedTime--
    return -distance / 2 * (elapsedTime * (elapsedTime - 2) - 1) + start
  }

  requestAnimationFrame(step)
}