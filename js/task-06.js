const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))

textInput.addEventListener('blur', event => {
	if (event.target.value.length === 6) {
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
