const { main, contactModal, contactButton, closeModal, formContact, prenom, nom, email, message } = require('./domLinker')

// creation des evenements

contactButton.addEventListener('click', () => displayModal())
closeModal.addEventListener('click', () => closeForm())
formContact.addEventListener('submit', e => formResult(e))

// ouvrir la modal

const displayModal = () => {
  contactModal.style.display = 'block'
  contactModal.setAttribute('aria-hidden', false)
  main.setAttribute('aria-hidden', true)
  closeModal.focus()
}
// fermer la modal avec Echap

document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'escape') {
    closeForm()
  }
})
// fermer la modal

const closeForm = () => {
  contactModal.style.display = 'none'
  contactModal.setAttribute('aria-hidden', true)
  main.setAttribute('aria-hidden', false)
}

const formResult = e => {
  e.preventDefault()
  console.log(`
    firstname:${prenom.value}
    lastname:${nom.value}
    email:${email.value}
    message:${message.value}`)
}

module.exports = {
  displayModal,
  closeForm,
  formResult
}
