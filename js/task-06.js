const textInput = document.querySelector('#validation-input')
const dataLength = (textInput.getAttribute('data-length'), 6)

textInput.addEventListener('blur', event => {
	if (event.target.value.length === dataLength) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})
