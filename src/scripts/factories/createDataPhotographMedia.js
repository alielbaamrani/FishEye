const { total } = require('../utils/domLinker')

module.exports = {
  create (data) {
    const { photographerId, name, city, country, tagline, portrait, title, image, video, likes, date } = data

    const picture = `/src/assets/photographers/${portrait}`
    const source = `/src/assets/medias/${image || video}`

    const getPhotographerCardDOM = () => {
      const photographCardInfo = document.getElementById('photographCardInfo')
      const info = document.createElement('div')
      info.setAttribute('id', 'info')
      const photographImg = document.createElement('img')
      photographImg.classList.add('photographImg')
      photographImg.setAttribute('src', picture)
      photographImg.setAttribute('alt', `${name}`)
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

      const modalSub = document.querySelector('.modalSub')
      const photographName = document.querySelector('.photographName')
      photographName.textContent = `Contactez-moi ${name}`

      modalSub.appendChild(photographName)
    }

    const getMedia = () => {
      let media
      if (image) {
        media = document.createElement('img')
      } else {
        media = document.createElement('video', 'controls')
        media.setAttribute('width', '90%')
        media.setAttribute('height', '90%')
        media.setAttribute('type', 'video/mp4')
      }
      media.classList.add('media')
      media.setAttribute('src', source)
      media.setAttribute('alt', title)
      return media
    }

    const getPhotographMediaDOM = () => {
      const allPhotographMedia = document.getElementById('photographMedias')
      const article = document.createElement('article')
      const articleInfo = document.createElement('div')
      articleInfo.classList.add('articleInfo')
      const pTitle = document.createElement('p')
      const pLikes = document.createElement('p')
      pLikes.setAttribute('class', 'likes eventLikes')
      const love = document.createElement('i')
      love.classList.add('fa-solid', 'fa-heart')
      pTitle.textContent = `${title}`
      pLikes.textContent = `${likes}`

      const displayTotalLikes = () => {
        let totalLikes = 0
        const likes = document.querySelectorAll('.likes')
        likes.forEach(like => {
          totalLikes += parseInt(like.textContent)
        })
        total.textContent = totalLikes
      }

      pLikes.addEventListener('click', () => {
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

      const media = getMedia()
      article.appendChild(media)
      allPhotographMedia.appendChild(article)
      articleInfo.appendChild(pTitle)
      articleInfo.appendChild(pLikes)
      pLikes.appendChild(love)
      article.appendChild(articleInfo)

      return media
    }

    return { photographerId, name, city, country, tagline, total, portrait, title, image, video, likes, date, getPhotographerCardDOM, getPhotographMediaDOM, getMedia }
  }
}
