const notas = [10, 9, 8, 6];

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);
// ++nota ou nota++ 
 /* ++ antes da variavel o js incrementa a 
 variavel e ja retorna o valor atualizado*/ 
/* ++ depois da variavel o js incrementa mais 
o valor só vai ser atualizado no proximo uso.
*/
console.log(notasAtualizadas);