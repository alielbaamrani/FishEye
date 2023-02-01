const factoryPhotographer = require('../factories/createDataPhotographMedia')
const { getPhotographerById } = require('../components/api')
const { getMediaByPhotographerId } = require('../components/api')
// photographerCardInfo by getPhotographerById

const displayData = async photographer => {
  const photographerCardInfo = document.querySelector('.photographCardInfo')
  const photographerCardModel = factoryPhotographer.create(photographer)
  const photographerCardDOM = photographerCardModel.getPhotographerCardDOM()
  photographerCardInfo.appendChild(photographerCardDOM)
}

module.exports = id => {
  const init = async () => {
    // Récupère les data by PhotographerId
    const photographerId = await getPhotographerById(parseInt(id))
    const medias = await getMediaByPhotographerId(parseInt(id))
    displayData(photographerId)
    console.log(medias)
  }

  init()
}
