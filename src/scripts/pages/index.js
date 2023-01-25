const factoryPhotographer = require('../factories/photographer')

const getPhotographers = async () => {
  const photographers =
    await
    fetch('/src/data/photographers.json')
      .then(res => res.json(res))
      .then(data => console.log(data))
  console.log(photographers)
  return ({ photographers: [...photographers.photographers] })
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
