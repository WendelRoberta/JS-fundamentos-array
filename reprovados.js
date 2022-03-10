const nomes = ["Ana", "Marcus", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)
console.log(`reprovados: ${reprovados}`);