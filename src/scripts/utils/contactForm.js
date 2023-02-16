const { contactModal, contactButton, closeModal, submit } = require('./domLinker')

contactButton.addEventListener('click', () => displayModal())
closeModal.addEventListener('click', () => closeForm())
submit.addEventListener('click', (e) => formResult)

const displayModal = () => {
  contactModal.style.display = 'block'
}

const closeForm = () => {
  contactModal.style.display = 'none'
}

const formResult = (e) => {
  console.log('submit')

  document.getElementById('prenom').addEventListener('input', () => console.log(document.getElementById('prenom').value))
}

module.exports = {
  displayModal,
  closeForm,
  formResult
}
