const notas = [10, 6.5, 8, 7.5];

let somasDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somasDasNotas += notas[i]; 
}

let media = somasDasNotas / notas.length;

console.log(media);