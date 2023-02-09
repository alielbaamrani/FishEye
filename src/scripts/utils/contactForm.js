const { contactModal, contactButton, closeModal } = require('./domLinker')

contactButton.addEventListener('click', () => displayModal())
closeModal.addEventListener('click', () => closeForm())

const displayModal = () => {
  contactModal.style.display = 'block'
}

const closeForm = () => {
  contactModal.style.display = 'none'
}

module.exports = {
  displayModal,
  closeForm
}
