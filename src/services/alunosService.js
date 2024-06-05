const alunosModel = require('../models/alunosModel');

function addStar(aluno){
    aluno = aluno+'*';
    return aluno
}


function getAlunosEstrela(){
    const alunos  = alunosModel.getAllAlunos();
    const alunosEstrela = alunos.map(addStar);
    return alunosEstrela;
}

module.exports = {
    getAlunosEstrela
};