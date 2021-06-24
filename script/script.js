function voltar(){
    window.history.back()
}

function login(){
    var dados = {}
    dados.usuario = document.getElementById('usuario').value
    dados.senha = document.getElementById('senha').value

    if(dados.usuario == "admin" && dados.senha == "admin"){
        alert("Login feito!")
    }
    else alert("Usuario ou senha incorreto!")
}