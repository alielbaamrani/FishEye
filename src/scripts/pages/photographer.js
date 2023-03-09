const factoryPhotographer = require('../factories/createDataPhotographMedia')

const { getPhotographerById, getMediaByPhotographerId } = require('../components/api')
const { lightbox, lightboxContainer, lightboxClose, previous, next, photographMedias, total, tagLine, totalLikesId, body } = require('../utils/domLinker')
const { previousMedia, nextMedia, closeLightbox } = require('../utils/lightbox')
const state = require('../components/state')

const displayData = async photographer => {
  const photographerCardModel = factoryPhotographer.create(photographer)
  photographerCardModel.getPhotographerCardDOM()
}

const displayTotalLikes = () => {
  let totalLikes = 0
  const likes = document.querySelectorAll('.likes')
  likes.forEach(like => {
    totalLikes += parseInt(like.textContent)
  })
  total.textContent = totalLikes
}

// Medias by getPhotographMedia

const displayDataMedias = async datas => {
  // Supprimer tout les element enfants afin de ne pas dupliquer les medias
  while (photographMedias.firstChild) {
    photographMedias.removeChild(photographMedias.firstChild)
  }

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
      body.style.overflow = 'hidden'
      lightboxContainer.appendChild(mediaModel.getMedia(true))
      totalLikesId.style.opacity = '0'
    })
  })

  displayTotalLikes()
}

module.exports = id => {
  // recuperer la donnée 'prix' de chaque photographes par leurs ID
  const getPhotographPrice = async () => {
    const photographerId = await getPhotographerById(parseInt(id))
    const photographerPrice = photographerId.price
    tagLine.textContent = photographerPrice + '€ /jour'
  }
  getPhotographPrice()

  const init = async () => {
    // Récupère les data by PhotographerId
    const photographerId = await getPhotographerById(parseInt(id))
    displayData(photographerId)
    // Récupere les data by getMediaByPhotographerId
    const medias = await getMediaByPhotographerId(parseInt(id))

    displayDataMedias(medias)

    // trier avant d'afficher les elements dans la displayDataMedias
    const populaire = document.querySelector('.populaire')
    populaire.addEventListener('click', () => {
      const mediaByLikes = medias.sort((a, b) => { return b.likes - a.likes })
      displayDataMedias(mediaByLikes)
    })
    // trier par date
    const date = document.querySelector('.date')
    date.addEventListener('click', () => {
      const mediaByDate = medias.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
      displayDataMedias(mediaByDate)
    })
    // trier par title
    const title = document.querySelector('.title')
    title.addEventListener('click', () => {
      const mediaByTitle = medias.sort((a, b) => { return a.title > b.title })
      displayDataMedias(mediaByTitle)
    })

    lightboxClose.addEventListener('click', () => closeLightbox())
    previous.addEventListener('click', () => previousMedia(medias))
    next.addEventListener('click', () => nextMedia(medias))

    // previousMedia with arrowLeft
    document.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === 'arrowleft') {
        previousMedia(medias)
      }
    })
    // nextMedia with arrowRight
    document.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === 'arrowright') {
        nextMedia(medias)
      }
    })
    // CloseMedia with escapeKey
    document.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === 'escape') {
        closeLightbox()
      }
    })
  }

  init()
}
