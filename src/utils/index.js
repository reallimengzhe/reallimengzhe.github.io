export function setAnimation(elements) {
  const animateClass = 'fade_in_bottom'
  const { innerHeight } = window

  function setClass() {
    elements.forEach(ele => {
      const { top, bottom } = ele.getBoundingClientRect()
      // 进入视口
      if (top + 0 - innerHeight < 0) {
        ele.classList.add(animateClass)
      }
      // 脱离视口
      else if (top < 0 || bottom > innerHeight) {
        ele.classList.remove(animateClass)
      }
    })
  }

  setClass()

  window.addEventListener('scroll', setClass)
}
