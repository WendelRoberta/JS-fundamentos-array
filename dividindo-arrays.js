const nomes = ['João', 'Juliana',
'Ana', 'Caio','Lara', 'Marjore',
'Guilherme','Aline', 'Fabiana',
'Andre', 'Carlos','Paulo', 'Bia',
'Vivian', 'Isabela','Vinicius',
'Renan', 'Renata','Daisy', 'Camilo'];

                        //0, 10
const sala1 = nomes.slice(0, nomes.length/2);
                        //10, 19
const sala2 = nomes.slice(nomes.length/2);//pega só a segunda metade

console.log("tamanho da array", nomes.length);
console.log(`Alunos da sala 1: ${ sala1 }`);
console.log(`Alunos da sala 2: ${ sala2 }`);
