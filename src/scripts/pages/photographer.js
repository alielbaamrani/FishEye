const factoryPhotographer = require('../factories/createDataPhotographMedia')
const { getPhotographerById, getMediaByPhotographerId } = require('../components/api')

// photographerCardInfo by getPhotographerById

const displayData = async photographer => {
  // const photographerCardInfo = document.querySelector('#photographCardInfo')
  const photographerCardModel = factoryPhotographer.create(photographer)
  photographerCardModel.getPhotographerCardDOM()
  // const photographerCardDOM = photographerCardModel.getPhotographerCardDOM()
  // photographerCardInfo.appendChild(photographerCardDOM)
}
// Medias by getPhotographMedia
const displayDataMedias = async medias => {
  medias.forEach((media) => {
    const mediaModel = factoryPhotographer.create(media)
    mediaModel.getPhotographMediaDOM()
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
