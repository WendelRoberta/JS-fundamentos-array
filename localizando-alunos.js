const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];
                            //0     //1
let listaDeNotasDeAlunos = [alunos, mediaDosAlunos];

//includes -> booleano
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasDeAlunos[0].includes(nomeDoAluno)){
        // indexof ->pega o numero do indice - 3
        let indice = listaDeNotasDeAlunos[0].indexOf(nomeDoAluno);
                                // [0] [3]
        return listaDeNotasDeAlunos[0][indice] + ', sua média é ' +
        listaDeNotasDeAlunos[1][indice];
    }else {
        return "Aluno não esta cadastrado";
    }
}

console.log(exibeNomeNota("Ana"));