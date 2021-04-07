const inputs = () => {
    const inputs = document.querySelectorAll('.form input')

    const setValidity = (input) => {
        function showMessage(msg) {
            input.parentNode.classList.remove('form__field--valid')
            input.parentNode.classList.add('form__field--invalid')
            const message = document.querySelector(`#${input.getAttribute('id')} + span`);
            message.textContent = msg
        }
        if (!input.value) { 
            showMessage('заполните поле')
        } else if (input.getAttribute('id') === 'phone' && input.value.length !== 18) {
            showMessage('слишком мало цифр')
        } else {
            input.parentNode.classList.add('form__field--valid')
        }
    }

    inputs.forEach(elem => {
        elem.addEventListener('focus', () => {
            elem.parentNode.classList.remove('form__field--valid')
            elem.parentNode.classList.remove('form__field--invalid')
            elem.parentNode.classList.add('form__field--focus')
        })
        elem.addEventListener('blur', () => {
            elem.parentNode.classList.remove('form__field--focus')
            setValidity(elem)
        })
    })
}

export default inputs