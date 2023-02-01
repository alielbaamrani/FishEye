/* Inject css */
require('./css/style.scss')

/* Rooter of the app : load js file in function of url */
const url = new URL(window.location.href)
console.log(url)
const id = url.searchParams.get('id')

// if page photographer.html is loaded and a param id exists from url
if (id !== null) {
  console.log('id:', id)
  require('./scripts/pages/photographer')(id)
} else {
  // By default load home page
  require('./scripts/pages/index')
}
