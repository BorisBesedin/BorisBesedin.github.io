const form = () => {
    const form = document.querySelector('.form'),
          submitBtn = form.querySelector('.popup__btn'),
          fields = form.querySelectorAll('.form__field'),
          popup = document.querySelector('.popup'),
          overlay = document.querySelector('.overlay');

    const postData = async (url, data) => {
        let responce = await fetch(url, {
            method: "POST",
            body: data
        });
        return await responce.text();
    };

    function checkValidity() {
        let isValid = true

        fields.forEach(elem => {
            if (elem.classList.contains('form__field--invalid')) {
                isValid = false
            }
        })
        return isValid
    }

    function submit() {
        let data = {}
        const name = document.querySelector('#name').value
        const phone = document.querySelector('#phone').value

        if (window.calculatedData) {
            data = {
                name: name,
                phone: phone,
                calculator: window.calculatedData
            }
        } else {
            data = {
                name: name,
                phone: phone
            }
        }
        console.log(data)
        submitBtn.classList.add('button-orange--loading')
        postData('https://куда-нибудь/', JSON.stringify(data))
            .then(responce => {
                console.log(responce.status) 
                closePopup()               
            })
            
            .catch((e) => {
                console.log(e)
                submitBtn.classList.remove('button-orange--loading')
                popup.classList.remove('slideUp');
                popup.classList.add('slideDown');
                setTimeout(() => {
                    popup.style.display = 'none';
                    overlay.style.display = 'none';
                    document.body.style.overflow = 'scroll';
                }, 350)
            })
            
    }

    form.addEventListener('submit', e => {
        e.preventDefault()
        let isValid = checkValidity()

        if (isValid) {
            submit()
        }
    })
}

export default form