const { lightboxContainer, lightbox, totalLikesId, titleMedia, body } = require('./domLinker')
const factoryPhotographer = require('../factories/createDataPhotographMedia')
const state = require('../components/state')

const previousMedia = datas => {
  // Remove all first child from an element
  while (lightboxContainer.firstChild) {
    lightboxContainer.removeChild(lightboxContainer.firstChild)
  }

  const currentIndex = datas.indexOf(state.currentMedia)
  const newMedia = currentIndex === 0 ? datas[datas.length - 1] : datas[currentIndex - 1]
  const mediaModel = factoryPhotographer.create(newMedia)
  lightboxContainer.appendChild(mediaModel.getMedia())
  state.currentMedia = newMedia
  titleMedia.textContent = newMedia.title
  const mediasVideo = document?.querySelector('.lightbox__container video')
  mediasVideo?.setAttribute('controls', 'controls')

  console.log(newMedia.title)
}

const nextMedia = datas => {
  // Remove all first child from an element
  while (lightboxContainer.firstChild) {
    lightboxContainer.removeChild(lightboxContainer.firstChild)
  }

  const currentIndex = datas.indexOf(state.currentMedia)
  const newMedia = currentIndex === (datas.length - 1) ? datas[0] : datas[currentIndex + 1]
  const mediaModel = factoryPhotographer.create(newMedia)
  lightboxContainer.appendChild(mediaModel.getMedia())
  state.currentMedia = newMedia
  titleMedia.textContent = newMedia.title
  const mediasVideo = document?.querySelector('.lightbox__container video')
  mediasVideo?.setAttribute('controls', 'controls')

  console.log(newMedia.title)
}

const closeLightbox = () => {
  lightbox.style.display = 'none'
  totalLikesId.style.opacity = '1'
  body.style.overflow = 'auto'
}

module.exports = {
  previousMedia,
  nextMedia,
  closeLightbox
}
