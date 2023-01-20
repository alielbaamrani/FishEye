const factoryPhotographer = require('../factories/photographer')

const getPhotographers = async () => {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = [
    {
      name: 'Ma data test',
      id: 1,
      city: 'Paris',
      country: 'France',
      tagline: 'Ceci est ma data test',
      price: 400,
      portrait: 'account.png'
    },
    {
      name: 'Autre data test',
      id: 2,
      city: 'Londres',
      country: 'UK',
      tagline: 'Ceci est ma data test 2',
      price: 500,
      portrait: 'account.png'
    }
  ]
  // et bien retourner le tableau photographers seulement une fois
  return ({ photographers: [...photographers, ...photographers, ...photographers] })
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
