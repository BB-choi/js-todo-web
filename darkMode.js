const darkChkBox = document.querySelector("#darkCtrl");

const getTheme = localStorage.getItem('colorTheme');

window.onload = function() {
    console.log(getTheme);
    if(getTheme === null) {
        document.documentElement.setAttribute('color-theme', 'light')
    }
    if(getTheme === 'dark') {
        document.documentElement.setAttribute('color-theme', 'dark');
        darkChkBox.setAttribute('checked', true);
    } else {
        document.documentElement.setAttribute('color-theme', 'light');
    }
}

function darkMode(event) {
    const check = event.target;
    if(check.checked) {
        localStorage.setItem("colorTheme","dark");
        document.documentElement.setAttribute('color-theme', 'dark');
    } else {
        localStorage.setItem("colorTheme", "light");
        document.documentElement.setAttribute('color-theme', 'light');
    }

}

darkChkBox.addEventListener("click", darkMode);