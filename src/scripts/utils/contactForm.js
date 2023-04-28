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
const isValidMessage = () => checkInput(message, /([a-zA-Z_]){2,20}/.test(message.value))

// ecoute de la valeur 'input' de l'Id first envoyé dans IsValid...
first.addEventListener('input', isValidFirstname)

// ecoute de la valeur 'input' de l'Id last envoyé dans IsValid...
last.addEventListener('input', isValidLastname)

// ecoute de la valeur 'input' de l'Id email envoyé dans IsValid...
email.addEventListener('input', isValidEmail)

// ecoute de la valeur 'input' de l'Id message envoyé dans IsValid...
message.addEventListener('input', isValidMessage)

/* Validation de tout les champ du Form Via la const inputsAreValid afin de recuperer une seul reponse de toute les champ */
const inputsAreValid = () =>
  isValidFirstname() && isValidLastname() && isValidEmail() && isValidMessage()

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

/** * Trap focus inside modal ***/
// https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
// add all the elements inside modal which you want to make focusable
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
const modal = contactModal // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements)
const lastFocusableElement = focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

document.addEventListener('keydown', function (e) {
  const isTabPressed = e.key === 'Tab' || e.keyCode === 9

  if (!isTabPressed) {
    return
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus() // add focus for the last focusable element
      e.preventDefault()
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus() // add focus for the first focusable element
      e.preventDefault()
    }
  }
})

firstFocusableElement.focus()

module.exports = {
  displayModal,
  closeForm,
  formResult
}
