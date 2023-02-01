module.exports = {
  create (data) {
    const { photographerId, portrait, title, image, likes, date, price } = data

    const picture = `/src/assets/photographers/${portrait}`

    const getPhotographerCardDOM = () => {
      const article = document.createElement('article')
      const img = document.createElement('img')
      img.setAttribute('src', picture)
      img.setAttribute('alt', 'test')

      article.appendChild(img)

      return (article)
    }

    return { photographerId, title, portrait, image, likes, date, price, getPhotographerCardDOM }
  }
}
