const daysEi = document.querySelector('#days');
const hoursEi = document.querySelector('#hours');
const minsEi = document.querySelector('#mins');
const secondsEi = document.querySelector('#seconds');



const newYears = '1 Jan 2021';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    
    console.log(newYearDate);
    console.log(currentDate);

    const diff = new Date(newYearDate - currentDate);
    // console.log(diff);
    // console.log(diff.getSeconds());
    // console.log(diff.getMinutes());
    // console.log(diff.getHours());
    // console.log(diff.getMonth());

    // (newYearDate-currentDate) : get the time in milliseconds
    const seconds = (newYearDate-currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = (Math.floor(seconds / 60 ) % 60);
    const sec = Math.floor(seconds) % 60;




    console.log(Math.floor(seconds) % 60);
    console.log(Math.floor(seconds / 60));
    
    daysEi.innerHTML = days;
    hoursEi.innerHTML = formatTime(hours);
    minsEi.innerHTML = formatTime(minutes);
    secondsEi.innerHTML = formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) :  time;
}

countdown();

setInterval(countdown, 1000);