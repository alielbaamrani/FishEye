
module.exports = {
  create (data) {
    const { photographerId, name, city, country, tagline, portrait, title, image, likes, date, price } = data

    const picture = `/src/assets/photographers/${portrait}`
    const imge = `/src/assets/medias/Ellie Rose/${image}`

    const getPhotographerCardDOM = () => {
      const photographCardInfo = document.getElementById('photographCardInfo')
      const info = document.querySelector('info')
      const photographImg = document.createElement('img')
      photographImg.classList.add('photographImg')
      photographImg.setAttribute('src', picture)
      photographImg.setAttribute('alt', `${name}`)
      const h2 = document.querySelector('h2')
      h2.textContent = name
      const h3 = document.querySelector('h3')
      h3.textContent = `${city}, ${country}`
      const h4 = document.querySelector('h4')
      h4.textContent = tagline
      photographCardInfo.appendChild(photographImg)
      info.appendChild(h2)
      info.appendChild(h3)
      info.appendChild(h4)

      return (photographCardInfo)
    }

    const getPhotographMediaDOM = () => {
      const allPhotographMedia = document.getElementById('photographMedia')
      const media = document.createElement('img')
      media.classList.add(media)
      media.setAttribute('src', imge)
      allPhotographMedia.appendChild(media)

      return (allPhotographMedia)
    }

    return { photographerId, name, city, country, tagline, portrait, title, image, likes, date, price, getPhotographerCardDOM, getPhotographMediaDOM }
  }
}
