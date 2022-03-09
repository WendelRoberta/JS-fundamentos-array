const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach -> para cada 'nota'
//callback -> uma função que chama outra função

// notas.forEach(nota => {
//     somaDasNotas += nota;
// })

notas.forEach(function(nota){
                //notas[i]
    somaDasNotas += nota;
})
let media = somaDasNotas / notas.length;

console.log(media);
