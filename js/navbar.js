const body = document.querySelector("body"), 
    navbar = body.querySelector(".navbar"),
    alternar = body.querySelector(".alternar"),
    interruptor = body.querySelector(".alternar-interruptor"),
    modoTxt = body.querySelector(".modo-txt");
let out = document.querySelector("main");

interruptor.addEventListener("click", changeMode);

alternar.addEventListener("click", openNav)

out.addEventListener("click", () => { 
    navbar.classList.add("fechar"); 
});

function openNav() { 
    navbar.classList.toggle("fechar");
}

function changeMode() {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        modoTxt.innerText = "Light Mode";
        localStorage.setItem('mode', 'dark');
    } else {
        modoTxt.innerText = "Dark Mode";
        localStorage.setItem('mode', 'light');
    }
}