module.exports = {
  create (data) {
    const { name, city, portrait, tagline, price } = data

    const picture = `/src/assets/photographers/${portrait}`

    const getUserCardDOM = () => {
      const article = document.createElement('article')
      const img = document.createElement('img')
      img.setAttribute('src', picture)
      const h2 = document.createElement('h2')
      h2.textContent = name
      const h3 = document.createElement('h3')
      h3.textContent = city
      const p = document.createElement('p')
      p.textContent = tagline
      const prix = document.createElement('p')
      prix.textContent = price
      article.appendChild(img)
      article.appendChild(h2)
      article.appendChild(h3)
      article.appendChild(p)
      article.appendChild(prix)
      return (article)
    }

    return { name, city, picture, tagline, price, getUserCardDOM }
  }
}
