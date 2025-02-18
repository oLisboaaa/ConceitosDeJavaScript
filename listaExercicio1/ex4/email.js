function gerar(nomeComp) {
    let div = nomeComp.trim().toLowerCase().split(' ')

    let primeiroNome = div[0]
    let ultmNome = div[div.length - 1]

    let email = primeiroNome + '.' + ultmNome + '@facens.br'

    return email
}

let nomeComp = 'Marcelo Roberto Lisboa'

console.log(gerar(nomeComp))