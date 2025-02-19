function jSimples(cap, tax, time) {

    let juros = cap * tax * time
    return juros + cap
}

function jComposto(cap, tax, time) {
    let montante = cap * (1 + tax) ** time
    return montante
}

let cap = 100, tax = 0.05, time = 12

console.log('Sob regime de juros simples o total é de: R$' + jSimples(cap, tax, time).toFixed(2))
console.log('Sob regime de juros compostos o total é de: R$' + jComposto(cap, tax, time).toFixed(2))