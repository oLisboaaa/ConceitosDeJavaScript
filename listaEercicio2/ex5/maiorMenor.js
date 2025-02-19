function MinMax(vetor) {

    let min = Math.min(...vetor);
    let max = Math.max(...vetor);

    return 'Menor número: ' + min + ', Maior número: ' + max
}

let vet = [10, 3, 25, 7, 8, 99, 1, 50];
console.log(MinMax(vet));
