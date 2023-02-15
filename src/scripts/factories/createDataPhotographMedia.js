
module.exports = {
  create (data) {
    const { photographerId, name, city, country, tagline, portrait, title, image, video, likes, date, price } = data

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
    }

    const getPhotographMediaDOM = () => {
      const allPhotographMedia = document.getElementById('photographMedias')
      const article = document.createElement('a')
      article.setAttribute('href', source)
      const articleInfo = document.createElement('div')
      articleInfo.classList.add('articleInfo')
      const pTitle = document.createElement('p')
      const pLikes = document.createElement('p')
      const love = document.createElement('i')
      love.classList.add('fa-solid', 'fa-heart')
      pTitle.textContent = `${title}`
      pLikes.textContent = `${likes}`
      if (image) {
        const media = document.createElement('img')
        media.classList.add('media')
        media.setAttribute('src', source)
        media.setAttribute('alt', title)
        article.appendChild(media)
      } else {
        const media = document.createElement('video')
        media.setAttribute('src', source)
        media.setAttribute('alt', title)
        media.setAttribute('width', '100%')
        media.setAttribute('height', '90%')
        media.setAttribute('type', 'video/mp4')
        article.appendChild(media)
      }
      allPhotographMedia.appendChild(article)
      articleInfo.appendChild(pTitle)
      articleInfo.appendChild(pLikes)
      pLikes.appendChild(love)
      article.appendChild(articleInfo)
      // modale
      const modale = document.querySelector('.lightbox')
      const close = document.querySelector('.lightbox__close')
      const links = document.querySelectorAll('#photographMedias a')
      const isImage = ['.gif', '.jpg', '.jpeg', '.png'] // you can add more
      const isVideo = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4'] // you can add more extention
      for (const link of links) {
        link.addEventListener('click', function (e) {
          // desactive l'evenement par default
          e.preventDefault()
          if (isImage) {
            const lightboxImg = document.querySelector('.lightbox__container img')
            console.log(lightboxImg)
            lightboxImg.src = this.href
            const lightboxContainer = document.querySelector('.lightbox__container')
            lightboxContainer.appendChild(lightboxImg)
            lightboxImg.style.display = 'block'
          } else if (isVideo) {
            const lightboxVideo = document.querySelector('.lightbox__container video')
            lightboxVideo.src = this.href
            const lightboxContainer = document.querySelector('.lightbox__container')
            lightboxContainer.appendChild(lightboxVideo)
            lightboxVideo.style.display = 'block'
          }

          modale.style.display = 'block'
        })
      }
      close.addEventListener('click', function () {
        modale.style.display = 'none'
      })
    }

    const getLikesPhotographer = () => {
      const infoBar = document.getElementById('infoBar')
      const likesCount = document.createElement('p')
      likesCount.innerHTML = 'test'
      infoBar.appendChild(likesCount)
    }

    return { photographerId, name, city, country, tagline, portrait, title, image, video, likes, date, price, getPhotographerCardDOM, getPhotographMediaDOM, getLikesPhotographer }
  }
}
