// Validação dos dados para login
let obrigatorioUsu = document.getElementById('obrigatorioUsu'),
obrigatorioUsu_desk = document.getElementById('obrigatorioUsu-desk'),
obrigatorioPwd = document.getElementById('obrigatorioPwd'),
obrigatorioPwd_desk = document.getElementById('obrigatorioPwd-desk'),
usuario = document.getElementById('usuario'),
usuario_desk = document.getElementById('usuario-desk'),
senha = document.getElementById('senha');
senha_desk = document.getElementById('senha-desk');


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

usuario_desk.addEventListener("change", () =>{   
    if(usuario_desk.value.length == 0){
        obrigatorioUsu_desk.style.display = "block";
        obrigatorioUsu_desk.style.color = "#EC3540";
        usuario_desk.style.borderColor = "#EC3540";
    }
    else if(usuario_desk.value.length >= 1)
    {
        obrigatorioUsu_desk.style.display = "none";
        obrigatorioUsu_desk.style.color = "#000";
        usuario_desk.style.borderColor = "#8F8F8F";
    }
});


senha_desk.addEventListener("change", () =>{   
    if(senha_desk.value.length == 0){
        obrigatorioPwd_desk.style.display = "block";
        obrigatorioPwd_desk.style.color = "#EC3540";
        senha_desk.style.borderColor = "#EC3540";
    }
    else if(senha_desk.value.length >= 1)
    {
        obrigatorioPwd_desk.style.display = "none";
        obrigatorioPwd_desk.style.color = "#000";
        senha_desk.style.borderColor = "#8F8F8F";
    }
});
