
module.exports = {
  create (data) {
    const { photographerId, name, city, country, tagline, portrait, title, image, video, likes, date, price } = data

    const picture = `/src/assets/photographers/${portrait}`
    const source = `/src/assets/medias/${image}`

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
      const article = document.createElement('article')
      const media = document.createElement('img')
      const articleInfo = document.createElement('div')
      articleInfo.classList.add('articleInfo')
      const pTitle = document.createElement('p')
      const pLikes = document.createElement('p')
      pTitle.textContent = `${title}`
      pLikes.textContent = `${likes}`
      media.classList.add('media')
      console.log(source)
      media.setAttribute('src', source)
      media.setAttribute('alt', title)
      article.appendChild(media)
      allPhotographMedia.appendChild(article)
      articleInfo.appendChild(pTitle)
      articleInfo.appendChild(pLikes)
      article.appendChild(articleInfo)
    }

    return { photographerId, name, city, country, tagline, portrait, title, image, video, likes, date, price, getPhotographerCardDOM, getPhotographMediaDOM }
  }
}
