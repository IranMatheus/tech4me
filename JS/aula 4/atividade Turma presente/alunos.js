function alunos(){
    const totalAlunos = 24;
    const alunosPresentes = prompt("Quantos alunos estão presentes? ");
    
    var repostaAlunos = alunosPresentes >= 16
    
    console.log ("O total de alunos é: " + totalAlunos);
    console.log( "O Numero de alunos presente é: " + alunosPresentes);


    console.log( "A maioria dos alunos esta presente? " + repostaAlunos)

}

alunos()