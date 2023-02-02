const factoryPhotographer = require('../factories/createDataPhotographMedia')
const { getPhotographerById } = require('../components/api')
const { getMediaByPhotographerId } = require('../components/api')

// photographerCardInfo by getPhotographerById

const displayData = async photographer => {
  const photographerCardInfo = document.querySelector('#photographCardInfo')
  const photographerCardModel = factoryPhotographer.create(photographer)
  const photographerCardDOM = photographerCardModel.getPhotographerCardDOM()
  photographerCardInfo.appendChild(photographerCardDOM)
}
// Medias by getPhotographMedia
const displayDataMedias = async medias => {
  const photographMedias = document.querySelector('#photographMedias')

  medias.forEach((media) => {
    const mediaModel = factoryPhotographer.create(media)
    const photographMediaDOM = mediaModel.getPhotographMediaDOM()
    photographMedias.appendChild(photographMediaDOM)
  })
}

module.exports = id => {
  const init = async () => {
    // Récupère les data by PhotographerId
    const photographerId = await getPhotographerById(parseInt(id))
    // Récupere les data by getMediaByPhotographerId
    const medias = await getMediaByPhotographerId(parseInt(id))
    displayData(photographerId)
    displayDataMedias(medias)
    console.log(medias)
  }

  init()
}
