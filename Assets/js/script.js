
/* Theme changer */
let curTheme = 1
const thematicElements = document.querySelectorAll('.thematic')

function changeTheme(newTheme) {
  if (newTheme < 1 || newTheme > 3) throw 'Invalid Theme'
  thematicElements.forEach(element => {
    element.classList.remove('theme' + curTheme)
    element.classList.add('theme' + newTheme)
  })
  curTheme = newTheme
}

const sliderDots = document.querySelectorAll('.slider-dot')
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', event => {
    event.target.classList.add('active')
    changeTheme(index + 1)
    sliderDots.forEach(dot => {
      if (dot != event.target) dot.classList.remove('active')
    })
  })
})

