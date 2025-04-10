export function setAnimation(elements) {
  const animateClass = 'animate-fade-in-bottom'

  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains(animateClass)) entry.target.classList.add(animateClass)
    })
  })

  elements.forEach(ele => {
    intersectionObserver.observe(ele)
  })
}
