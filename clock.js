const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    dateContainer = document.querySelector(".js-date"),
    dateTitle = dateContainer.querySelector("span");

function getTime() {
    const date = new Date();
    const year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate(),
        minutes = date.getMinutes(),
        hours = date.getHours(),
        seconds = date.getSeconds();
    dateTitle.innerText = `${year}/${month < 10? `0${month}` : month}/${day}`;
    clockTitle.innerText = `${hours > 12 ? `${hours-12}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();