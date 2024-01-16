let toastsBox = document.getElementById('toastsBox')

const showToast = () => {
    const toast = document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML = 'Success';
    toastsBox.appendChild(toast)
}