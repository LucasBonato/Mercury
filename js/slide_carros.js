const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionFinal = sliderSection[sliderSection.length -1];

const btnEsq = document.querySelector("#esq");
const btnDir = document.querySelector("#dir");

const comecar = document.querySelector("#comecar");
const parar = document.querySelector("#parar");


slider.insertAdjacentElement('afterbegin', sliderSectionFinal);

//Manual
function toRight(){
    let sliderSectionInicial = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionInicial);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function toLeft(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionFinal = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionFinal);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnDir.addEventListener('click', function(){
    toRight();
});
btnEsq.addEventListener('click', function(){
    toLeft();
});

//Automático
setInterval(function(){
    toRight();
}, 5000);