// Validação dos dados para login
let obrigatorioUsu = document.getElementById('obrigatorioUsu'),
obrigatorioPwd = document.getElementById('obrigatorioPwd'),
usuario = document.getElementById('usuario'),
senha = document.getElementById('senha');


usuario.addEventListener("change", () =>{   
    if(usuario.value.length == 0){
        obrigatorioUsu.style.display = "block";
        obrigatorioUsu.style.color = "#EC3540";
        usuario.style.borderColor = "#EC3540";
    }
    else if(usuario.value.length >= 1)
    {
        obrigatorioUsu.style.display = "none";
        obrigatorioUsu.style.color = "#000";
        usuario.style.borderColor = "#8F8F8F";
    }
});


senha.addEventListener("change", () =>{   
    if(senha.value.length == 0){
        obrigatorioPwd.style.display = "block";
        obrigatorioPwd.style.color = "#EC3540";
        senha.style.borderColor = "#EC3540";
    }
    else if(senha.value.length >= 1)
    {
        obrigatorioPwd.style.display = "none";
        obrigatorioPwd.style.color = "#000";
        senha.style.borderColor = "#8F8F8F";
    }
});



// Mensagem de erro ao efetuar Login MOBILE / TABLET
let login_facebook = document.getElementById('btn_facebook'),
login_google = document.getElementById('btn_google'),
login_apple = document.getElementById('btn_apple'),
esqueciSenha = document.getElementById('esqueci'),
login_entrar = document.getElementById('btn_entrar');

login_facebook.addEventListener("click", () =>{
    msgError();
});
login_google.addEventListener("click", () =>{
    msgError();
});
login_apple.addEventListener("click", () =>{
    msgError();    
});
esqueciSenha.addEventListener("click", () =>{
    msgError();    
});
login_entrar.addEventListener("click", () =>{
    msgError();    
});

// Mensagem de erro ao efetuar Login DESKTOP
let login_facebook_desk = document.getElementById('btn_facebook-desk'),
login_google_desk = document.getElementById('btn_google-desk'),
login_apple_desk = document.getElementById('btn_apple-desk'),
esqueciSenha_desk = document.getElementById('esqueci-desk'),
login_entrar_desk = document.getElementById('btn_entrar-desk');

login_facebook_desk.addEventListener("click", () =>{
    msgError();
});
login_google_desk.addEventListener("click", () =>{
    msgError();
});
login_apple_desk.addEventListener("click", () =>{
    msgError();    
});
esqueciSenha_desk.addEventListener("click", () =>{
    msgError();    
});
login_entrar_desk.addEventListener("click", () =>{
    msgError();    
});

function msgError(){
    window.alert("Nosso sistema de login ainda está em desenvolvimento!\n" + "Agradeçemos a compreensão ;)"); 
}

function msgLogin(){
    window.alert("Atenção! Para poder comprar é necessário estar logado."); 
}

window.onload = msgLogin;