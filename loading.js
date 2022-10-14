let interval

document.addEventListener('DOMContentLoaded', () => {
  interval = setInterval(fadeOut, 35)
})

const blackScreen = document.querySelector('.black-screen')
blackScreen.style.opacity = 1

function fadeOut() {
  if (blackScreen.style.opacity > 0) {
    blackScreen.style.opacity -= .05
  } else {
    blackScreen.style.display = 'none'
    clearInterval(interval)
  }
}