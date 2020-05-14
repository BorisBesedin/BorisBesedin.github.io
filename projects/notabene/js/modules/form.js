const forms = () => {
    const form = document.querySelector('.form'),
        inputs = form.querySelectorAll('input'),
        submit = form.querySelector('.form__submit');   

    const message = {
        success: 'Спасибо! Скоро мы вам перезвоним!',
        failure: 'Что-то пошло не так',
        loading: 'Загрузка',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = 'server.php';

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const postData = async (url, data) => {
        let responce = await fetch(url, {
            method: "POST",
            body: data
        });

        return await responce.text();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div'),
            statusText = document.createElement('div');

        statusMessage.appendChild(statusText);
        statusMessage.style = 'position: absolute; display: flex; flex-direction: column; justify-content: center; top: 50%; left: 50%; transform: translate(-50%, -50%); align-items: center; text-align: center;';

        statusMessage.classList.add('status');
        form.parentNode.appendChild(statusMessage);
        form.style.visibility = 'hidden';
        form.classList.remove('fadeIn');

        statusText.textContent = message.loading;     

        let data = new FormData(form);

        postData(path, data)
            .then(responce => {
                statusText.textContent = message.success;
                statusMessage.classList.add('fadeIn');                    
            })
            .catch(() => {
                statusText.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    form.classList.add('fadeIn');
                    form.style.visibility = 'visible';  
                }, 5000);
            });
    });
};

export default forms;