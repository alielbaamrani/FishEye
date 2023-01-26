module.exports = {
  create (data) {
    const { name, city, portrait, tagline, price, country } = data

    const picture = `/src/assets/photographers/${portrait}`

    const getUserCardDOM = () => {
      const article = document.createElement('article')
      const img = document.createElement('img')
      img.setAttribute('src', picture)
      img.setAttribute('alt', `${name}`)
      const h2 = document.createElement('h2')
      h2.textContent = name
      const h3 = document.createElement('h3')
      h3.textContent = `${city}, ${country}`
      const h4 = document.createElement('h4')
      h4.textContent = tagline
      const prix = document.createElement('p')
      prix.textContent = `${price}€/jour`
      article.appendChild(img)
      article.appendChild(h2)
      article.appendChild(h3)
      article.appendChild(h4)
      article.appendChild(prix)
      return (article)
    }

    return { name, city, picture, tagline, price, country, getUserCardDOM }
  }
}
