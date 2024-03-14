// Mensagem de erro ao efetuar Login MOBILE / TABLET
let login_facebook = document.getElementById('btn_facebook'),
    login_google = document.getElementById('btn_google'),
    login_apple = document.getElementById('btn_apple'),
    esqueciSenha = document.getElementById('esqueci'),
    login_entrar = document.getElementById('btn_entrar');

login_facebook.addEventListener("click", msgError);
login_google.addEventListener("click", msgError);
login_apple.addEventListener("click", msgError);
esqueciSenha.addEventListener("click", msgError);
login_entrar.addEventListener("click", msgError);

// Mensagem de erro ao efetuar Login DESKTOP
let login_facebook_desk = document.getElementById('btn_facebook-desk'),
    login_google_desk = document.getElementById('btn_google-desk'),
    login_apple_desk = document.getElementById('btn_apple-desk'),
    esqueciSenha_desk = document.getElementById('esqueci-desk'),
    login_entrar_desk = document.getElementById('btn_entrar-desk');

login_facebook_desk.addEventListener("click", msgError);
login_google_desk.addEventListener("click", msgError);
login_apple_desk.addEventListener("click", msgError);
esqueciSenha_desk.addEventListener("click", msgError);
login_entrar_desk.addEventListener("click", msgError);

function msgError(){
    window.alert("Nosso sistema de login ainda está em desenvolvimento!\nAgradeçemos a compreensão ;)"); 
}