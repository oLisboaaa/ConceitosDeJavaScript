function vogal(str) {
    let vogais = 'aeiou'
    let conta = 0
    for (let char of str) {
        if (vogais.includes(char)) {
            conta++
        }
    }
    return conta
}

console.log('a frase "Eu odeio Java" possui ' + vogal('Eu odeio Java') + ' vogais minusculas')
