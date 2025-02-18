let normal = 'arara'

function reverse(normal) {
    if (normal == '')
        return ''
    else
        return reverse(normal.substr(1)) + normal.charAt(0)
}

let palindromo

if (normal == reverse(normal)) {
    palindromo = true
} else {
    palindromo = false
    
}

console.log(palindromo)