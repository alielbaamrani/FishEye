const { contactModal, contactButton, closeModal, formContact, prenom, nom, email, message } = require('./domLinker')

contactButton.addEventListener('click', () => displayModal())
closeModal.addEventListener('click', () => closeForm())
formContact.addEventListener('submit', e => formResult(e))

const displayModal = () => {
  contactModal.style.display = 'block'
}

const closeForm = () => {
  contactModal.style.display = 'none'
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
