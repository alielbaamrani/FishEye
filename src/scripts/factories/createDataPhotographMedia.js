const { total } = require('../utils/domLinker')

module.exports = {
  create (data) {
    const { photographerId, name, city, country, tagline, portrait, title, image, video, likes, date } = data

    const picture = `/src/assets/photographers/${portrait}`
    const source = `/src/assets/medias/${image || video}`

    // creation de la section photographCardInfo
    const getPhotographerCardDOM = () => {
      const photographCardInfo = document.getElementById('photographCardInfo')
      const info = document.createElement('div')
      info.setAttribute('id', 'info')
      const photographImg = document.createElement('img')
      photographImg.classList.add('photographImg')
      photographImg.setAttribute('src', picture)
      photographImg.setAttribute('alt', `${name}`)
      photographImg.setAttribute('arial-label', 'open-lightbox')

      const h2 = document.createElement('h2')
      h2.textContent = name
      const h3 = document.createElement('h3')
      h3.textContent = `${city}, ${country}`
      const h4 = document.createElement('h4')
      h4.textContent = tagline
      info.appendChild(h2)
      info.appendChild(h3)
      info.appendChild(h4)
      photographCardInfo.prepend(info)
      photographCardInfo.appendChild(photographImg)

      // afficher le nom du photograph dans la modal de contact

      const modalSub = document.querySelector('.modalSub')
      const photographName = document.querySelector('.photographName')
      photographName.textContent = `Contactez-moi ${name}`
      modalSub.appendChild(photographName)
    }
    // creation de getmedia afin d'afficher les medias dans la gallerie ainsi que dans la lightbox
    const getMedia = (isLightbox = false) => {
      let media
      // verification image / video
      if (image) {
        media = document.createElement('img')
      } else {
        media = document.createElement('video')
        media.setAttribute('type', 'video/mp4')
        media.setAttribute('width', '90%')
        media.setAttribute('height', '90%')
        if (isLightbox) {
          media.setAttribute('controls', 'controls')
        }
      }
      media.classList.add('media')
      media.setAttribute('src', source)
      media.setAttribute('alt', title)
      return media
    }
    // creation de la gallerie photo
    const getPhotographMediaDOM = () => {
      const allPhotographMedia = document.getElementById('photographMedias')
      const a = document.createElement('a')
      a.setAttribute('href', '#')

      const article = document.createElement('article')
      const articleInfo = document.createElement('div')
      articleInfo.classList.add('articleInfo')
      const pTitle = document.createElement('p')
      const pLikes = document.createElement('p')
      pLikes.setAttribute('class', 'likes eventLikes')
      pLikes.setAttribute('arial-label', 'likes')
      const love = document.createElement('i')
      love.classList.add('fa-solid', 'fa-heart')
      pTitle.textContent = `${title}`
      pLikes.textContent = `${likes}`
      // gestion de l'affichage du total de likes
      const displayTotalLikes = () => {
        let totalLikes = 0
        const likes = document.querySelectorAll('.likes')
        likes.forEach(like => {
          totalLikes += parseInt(like.textContent)
        })
        total.textContent = totalLikes
      }
      // gestion de l'incrementation des likes
      pLikes.addEventListener('click', e => {
        e.preventDefault()
        let calcul = 0
        if (pLikes.classList.contains('eventLikes')) {
          pLikes.classList.toggle('eventLikes')
          calcul = +1
        } else if (pLikes.classList.contains('likes')) {
          pLikes.classList.toggle('eventLikes')

          calcul = -1
        }
        pLikes.textContent = parseInt(pLikes.textContent) + calcul
        pLikes.appendChild(love)
        displayTotalLikes()
      })
      // annulation de l'effet 'a' sur les titres des images
      articleInfo.addEventListener('click', e => {
        e.preventDefault()
      })
      // recuperation de media
      const media = getMedia()
      a.appendChild(media)
      article.setAttribute('arial-label', 'ouvre la vue lightbox')
      allPhotographMedia.appendChild(a)
      articleInfo.appendChild(pTitle)
      articleInfo.appendChild(pLikes)
      pLikes.appendChild(love)
      a.appendChild(article)
      article.appendChild(articleInfo)

      return media
    }

    return { photographerId, name, city, country, tagline, total, portrait, title, image, video, likes, date, getPhotographerCardDOM, getPhotographMediaDOM, getMedia }
  }
}
