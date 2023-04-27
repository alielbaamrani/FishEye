const { main, contactModal, contactButton, closeModal, formContact, first, last, email, message } = require('./domLinker')

// creation des evenements

contactButton.addEventListener('click', () => displayModal())
closeModal.addEventListener('click', () => closeForm())

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
  first.value = ''
  last.value = ''
  email.value = ''
  message.value = ''
}

const displayErrorMessage = (input, isValid) => {
  if (isValid) {
    input.parentNode.setAttribute('data-error-visible', false)
  } else {
    input.parentNode.setAttribute('data-error-visible', true)
  }
}
const checkInput = (input, isValid) => {
  displayErrorMessage(input, isValid)
  return isValid
}

/**
 * Creation des regex pour chaque formulaire via la fonction IsValid + Checkinput de la valeur
 * @param {Boolean} = () => CheckInput, /Regex/.test(IdForm.value)}
 */
const isValidFirstname = () => checkInput(first, /([a-zA-Z_]){2,20}/.test(first.value))
const isValidLastname = () => checkInput(last, /([a-zA-Z_]){2,20}/.test(last.value))
const isValidEmail = () => checkInput(email, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))

// ecoute de la valeur 'input' de l'Id first envoyé dans IsValid...

first.addEventListener('input', isValidFirstname)

// ecoute de la valeur 'input' de l'Id last envoyé dans IsValid...

last.addEventListener('input', isValidLastname)

// ecoute de la valeur 'input' de l'Id email envoyé dans IsValid...

email.addEventListener('input', isValidEmail)

// ecoute de la valeur 'input' de l'Id birthdate envoyé dans IsValid...

/* Validation de tout les champ du Form Via la const inputsAreValid afin de recuperer une seul reponse de toute les champ */
const inputsAreValid = () =>
  isValidFirstname() && isValidLastname() && isValidEmail()

/**
* Change l'effet du boutton Submit
* @param {Object} event
 */
const formResult = (event) => {
  // rend le button non utilisable
  event.preventDefault()
  // si InputsAreValid alors return success
  if (inputsAreValid()) {
    console.log(`
    firstname:${first.value}
    lastname:${last.value}
    email:${email.value}
    message:${message.value}`)

    closeForm()
  }
}

// event submit form event
formContact.addEventListener('submit', formResult)

module.exports = {
  displayModal,
  closeForm,
  formResult
}
