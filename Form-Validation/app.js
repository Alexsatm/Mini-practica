const nameError = document.querySelector('#name-error');
const passwordError = document.querySelector('#password-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const submitError = document.querySelector('#submit-error');

const validateName = () => {
    const name = document.querySelector('#name').value;

    if (name.lenght == 0) {
        nameError.innerHTML = 'Требуется имя';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Напишите полное имя';
        return false;
    }

    nameError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
    return true;
}

const validatePhone = () => {
    const phone = document.querySelector('#phone').value;

    if (phone.lenght == 0) {
        phoneError.innerHTML = 'Требуется номер';
        return false;
    }

    if (phone.lenght !== 11) {
        phoneError.innerHTML = 'Номер должен быть из 11 цифр';
        return false;
    }

    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Только цифры';
        return false;
    }

    phoneError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
    return true;
}

const validateEmail = () => {
    const email = document.querySelector('#email').value;

    if (email.lenght == 0) {
        email.innerHTML = 'Требуется почта';
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Неверная почта';
        return false;
    }

    emailError.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone()|| !validateEmail()) {
        submitError.innerHTML = 'Заполните все поля';
        return false
    }
}