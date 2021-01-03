function forms() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.getElementById('form'),
        contactInput = document.getElementsByTagName('input');

        statusMessage.classList.add('status');

        function sendForm(elem) {
            elem.addEventListener('submit', function(e) {
                e.preventDefault();
                    elem.appendChild(statusMessage);
                    let formData = new FormData(elem);

                    function postData(data) {

                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                        // Without AJAX request.setRequestHeader('Content-Type', 'application/x-www-urlencoded');

                        let obj = {};
                        formData.forEach(function(value, key) {
                            obj[key] = value;
                        })
                        let json = JSON.stringify(obj);


            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    resolve()
                    // statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                     if (request.status == 200 && request.status <3) {
                       resolve()
                    // statusMessage.innerHTML = message.success;  
                     } 
                     else {
                    reject()
                    // statusMessage.innerHTML = message.failure;
                    }
                }
            };
            request.send(json);
        });
        
    } // End postData
        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput)
        })
}

sendForm(form);
sendForm(contactForm);
}

module.exports = forms;