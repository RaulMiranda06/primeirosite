function altert_login(){
    const nome = document.querySelector("input[name=nome]");
    const email = document.querySelector("input[name=email]");
    const observacoes= document.querySelector("textarea[name=observacoes]");
    const telefone = document.querySelector("input[name=telefone]");
    const nasci = document.querySelector("input[name=data_nascimento]");
    const confirmar_senha= document.querySelector("input[name=confirmar_senha]");
    const genero = document.querySelector("input[name=genero]");
    

    if(nome.value==""){
        alert ("Preencha o campo nome");
        return false
    }

    if(email.value==""){
        alert ("Preencha o campo email");
        return false
    }
    
    if(observacoes.value==""){
        alert ("Preencha o campo assunto");
        return false
    }

    if(telefone.value==""){
        alert ("Preencha o campo telefone");
        return false
    }

    if(data_nascimento.value==""){
        alert ("Preencha o campo data nascimento");
        return false
    }
    
    if(confirmar_senha.value==""){
        alert ("Preencha o campo confirmar senha");
        return false
    }

    if(genero.value==""){
        alert ("Preencha o campo confirmar genero");
        return false
    }

    








}