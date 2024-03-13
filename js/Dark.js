if(localStorage.getItem('mode') == 'dark') {
    darkMode();
} else {
    lightMode();
}

function darkMode() {
    const body = document.querySelector("body");
    const modoTxt = body.querySelector(".modo-txt");

    localStorage.setItem('mode', 'dark');
    body.classList.add("dark");
    modoTxt.innerText = "Light Mode";
}

function lightMode() {
    const body = document.querySelector("body");
    const modoTxt = body.querySelector(".modo-txt");

    localStorage.setItem('mode', 'light');
    body.classList.remove("dark");
    modoTxt.innerText = "Dark Mode";
}
