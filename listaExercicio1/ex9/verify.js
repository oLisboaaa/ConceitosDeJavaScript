let isEmail = false

function verificaEmail(str) {
    if(str.indexOf('@') && str.indexOf('.')){
        isEmail = true
    }else{
        isEmail = false
    }

    return isEmail
}


console.log(verificaEmail('248347@facens.br'))