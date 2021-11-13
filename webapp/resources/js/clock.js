const CLOCK_DELTA = 8000;

function addZero(value) {
    return value < 10 ? '0' + value : value;
}

function clockTick() {
    const current_datetime = new Date();
    const day = addZero(current_datetime.getDate());
    const month = addZero(current_datetime.getMonth() + 1);
    const year = current_datetime.getFullYear();
    const hours = addZero(current_datetime.getHours());
    const minutes = addZero(current_datetime.getMinutes());
    const seconds = addZero(current_datetime.getSeconds());

    return `Дата: ${day}.${month}.${year} Время: ${hours}:${minutes}:${seconds}`;
}

window.onload = () => {
    setTimeout(() => document.getElementById('current-date-time').innerHTML = clockTick(), 0)
    setInterval(() => document.getElementById('current-date-time').innerHTML = clockTick(), CLOCK_DELTA);
}
