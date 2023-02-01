const factoryPhotographer = require('../factories/createDataIndex')
const { getPhotographers } = require('../components/api')

const displayData = async photographers => {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = factoryPhotographer.create(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

const init = async () => {
  // Récupère les datas des photographes
  const photographers = await getPhotographers()
  displayData(photographers)
}

init()
