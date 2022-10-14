const musicsElement = document.querySelector('#musicas')
const musicArray = [
  {
    name: 'Break It Off',
    file: 'break-it-off.mp3'
  },
  {
    name: 'I Must Apologise',
    file: 'i-must-apologise.mp3'
  },
  {
    name: 'Just For Me',
    file: 'just-for-me.mp3'
  },
  {
    name: 'Passion',
    file: 'passion.mp3'
  },
  {
    name: 'Picture In My Mind',
    file: 'picture-in-my-mind.mp3'
  }
]

function generateElement(tag, scope, textContent) {
  const element = document.createElement(tag)

  if (scope) {
    element.setAttribute('scope', scope)
  }

  if (textContent) {
    element.textContent = textContent
  }

  return element
}

musicArray.forEach(({ name, file }, index) => {
  const rowElement = generateElement('tr')
  const indexElement = generateElement('th', 'row', index + 1)
  const nameElement = generateElement('td', undefined, name)
  const musicElement = generateElement('td')
  const audioElement = generateElement('audio')
  audioElement.src = `./musicas/${file}`
  audioElement.controls = true

  musicElement.append(audioElement)

  rowElement.append(indexElement)
  rowElement.append(nameElement)
  rowElement.append(musicElement)

  musicsElement.append(rowElement)
})