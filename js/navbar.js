const body = document.querySelector("body"), 
navbar = body.querySelector(".navbar"),
alternar = body.querySelector(".alternar"),
interruptor = body.querySelector(".alternar-interruptor"),
modoTxt = body.querySelector(".modo-txt");

alternar.addEventListener("click", () =>{
    navbar.classList.toggle("fechar");
});

interruptor.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark"))
    {
        modoTxt.innerText = "Light Mode";
    }
    else
    {
        modoTxt.innerText = "Dark Mode";
    }
});