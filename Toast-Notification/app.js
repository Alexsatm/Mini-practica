let toastsBox = document.getElementById('toastsBox')
let successMsg = 'Успешно отправлено';
let errorMsg = 'Пожалуйста исправьте ошибку';
let invalidMsg = 'Неверный ввод, проверьте еще раз';

const showToast = () => {
    const toast = document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML = 'Success';
    toastsBox.appendChild(toast)
}