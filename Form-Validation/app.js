const nameError = document.querySelector('#name-error');
const passwordError = document.querySelector('#password-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#tel-error');

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

    if (phone.lenght !== 10) {
        phoneError.innerHTML = '';
        return false;
    }
}