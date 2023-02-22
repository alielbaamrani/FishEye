const factoryPhotographer = require('../factories/createDataPhotographMedia')
const { getPhotographerById, getMediaByPhotographerId, getMediaByPhotographerByLike } = require('../components/api')
const { lightbox, lightboxContainer, lightboxClose, previous, next } = require('../utils/domLinker')
const { previousMedia, nextMedia } = require('../utils/lightbox')
const state = require('../components/state')

const displayData = async photographer => {
  const photographerCardModel = factoryPhotographer.create(photographer)
  photographerCardModel.getPhotographerCardDOM()
}
// Medias by getPhotographMedia
const displayDataMedias = async datas => {
  datas.forEach(data => {
    const mediaModel = factoryPhotographer.create(data)
    const media = mediaModel.getPhotographMediaDOM()

    // open lightbox on click on media
    media.addEventListener('click', () => {
      // Remove all first child from an element
      while (lightboxContainer.firstChild) {
        lightboxContainer.removeChild(lightboxContainer.firstChild)
      }

      state.currentMedia = data

      lightbox.style.display = 'block'
      lightboxContainer.appendChild(mediaModel.getMedia())
    })
  })
}

module.exports = id => {
  const init = async () => {
    // Récupère les data by PhotographerId
    const photographerId = await getPhotographerById(parseInt(id))
    // Récupere les data by getMediaByPhotographerId
    const medias = await getMediaByPhotographerId(parseInt(id))
    const mediasLike = await getMediaByPhotographerByLike(parseInt(id))
    displayData(photographerId)
    displayDataMedias(medias)

    lightboxClose.addEventListener('click', () => lightbox.style.display = 'none')
    previous.addEventListener('click', () => previousMedia(medias))
    next.addEventListener('click', () => nextMedia(medias))
  }

  init()
}
