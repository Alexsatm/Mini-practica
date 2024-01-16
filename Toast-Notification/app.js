let toastsBox = document.getElementById('toastsBox')
let successMsg = '<ion-icon name="checkmark-circle-outline"></ion-icon> Успешно отправлено';
let errorMsg = '<ion-icon name="close-circle-outline"></ion-icon> Пожалуйста исправьте ошибку';
let invalidMsg = '<ion-icon name="alert-circle-outline"></ion-icon> Неверный ввод, проверьте еще раз';

const showToast = (msg) => {
    const toast = document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastsBox.appendChild(toast)
}