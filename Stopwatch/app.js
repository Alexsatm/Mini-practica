let [sec, min, hours] = [0, 0, 0];
let displayTime = document.getElementById('displayTime')
let timer = null

const stopwatch = () => {
    sec ++;
    if(sec === 60) {
        sec = 0;
        min++

        if (min === 60) {
            min = 0;
            hours++
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;

    displayTime.innerHTML = h + ':' + m + ':' + s;
}

const watchStart = () => {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000);
}

const watchStop = () => {
    clearInterval(timer)
}

const watchReset = () => {
    clearInterval(timer)
    let [sec, min, hours] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00';
}