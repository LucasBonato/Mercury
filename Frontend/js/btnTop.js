let cvlScroll = () =>{
    let progressao = document.getElementById('progressao');


    let posicao = document.documentElement.scrollTop;

    let altura = document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;

    let vlScroll = Math.round((posicao * 100 / altura));

    if(posicao>100){
        progressao.style.display = "grid";
    }
    else{
        progressao.style.display = "none";
    }

    progressao.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    })
    progressao.style.background = `conic-gradient(#EC3540 ${vlScroll}%, #d7d7d7 ${vlScroll}%)`;
}

window.onscroll = cvlScroll;
window.onload = cvlScroll;

