const factoryPhotographer = require('../factories/photographer')

const getPhotographers = async () => {
  const photographers = []
  const response = await fetch('/src/data/photographers.json') // attend que la data soir recuperer
  const data = await response.json() // attend que la data soit converti
  photographers.push(data.photographers) // on push data.photographers dans photographers
  return ({ photographers: [...photographers[0]] }) // on retourne la data photographers du tableau[0] de photographers
}

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
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
