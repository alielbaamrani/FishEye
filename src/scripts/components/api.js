const axios = require('axios')

const url = 'src/data/photographers.json'

/**
 * Get all photographers
 * @returns Array of photographer object
 */
const getPhotographers = () => axios.get(url).then(response => response.data.photographers)
/**
 * Get photographer in function of id in param
 *
 * @param {Number} id
 * @returns Object of photographer
 */
const getPhotographerById = id => getPhotographers().then(photographers => photographers.find(photographer => photographer.id === id))

/**
 *
 * Get all medias
 * @returns Array of media object
 */
const getMedias = () => axios.get(url).then(response => response.data.media)

/**
 * Get medias in function of photographerId in param
 *
 * @param {Number} id
 * @returns Array of media object
 */
const getMediaByPhotographerId = id => getMedias().then(medias => medias.filter(media => media.photographerId === id))

module.exports = {
  getPhotographers,
  getPhotographerById,
  getMediaByPhotographerId
}
