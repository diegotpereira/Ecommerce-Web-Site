// redirect to home page if user logged in 
window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user)
        if (compareToken(user.authToken, user.email)) {
            location.replace('/');

        }
    }
}

const loader = document.querySelector('.loader');

// Selecionar Entradas
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {
    if (name.value.length < 3) {
        showAlert('o nome deve ter 3 letras..!');
    } else if (!email.value.length) {
        showAlert('Digite seu email..!');
    } else if (password.value.length < 8) {
        showAlert('A senha deve ter 8 letras..!');
    } else if (!number.value.length) {
        showAlert('Digite seu número de telefone..!');
    } else if (!Number(number.value) || number.value.length < 10) {
        showAlert('Número inválido, por favor insira um válido..!');
    } else if (!tac) {
        showAlert('Você deve concordar com nossos termos e condiçõe..!');
    } else {
        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    }
})


// send data function 
const sendData = (path, data) => {
    fetch(path, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then(response => {
            processData(response);
        })
}

const processData = (data) => {
        loader.style.display = null;
        if (data.alert) {
            showAlert(data.alert);
        } else if (data.name) {
            // create authToken
            data.authToken = generateToken(data.email);
            sessionStorage.user = JSON.stringify(data);
            location.replace('/');
        }
    }
    // alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}