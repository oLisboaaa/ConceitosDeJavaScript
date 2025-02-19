function verifTrian(ld1, ld2, ld3) {
    let confirma = '';

    if (ld1 === ld2 && ld2 === ld3) {

        confirma = 'equilátero';

    } else if (ld1 === ld2 || ld1 === ld3 || ld2 === ld3) {

        confirma = 'isósceles';

    } else {

        confirma = 'escaleno';

    }

    return confirma;
}

let ld1 = 3, ld2 = 4, ld3 = 5;
console.log('O triângulo de lados ' + ld1 + ', ' + ld2 + ', ' + ld3 + ' é um triângulo ' + verifTrian(ld1, ld2, ld3));
