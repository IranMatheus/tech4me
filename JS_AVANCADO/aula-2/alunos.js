// quero ter um obj, que vai ter uma propriedade chamada 'alunos' com o nome do tres alunos da turma( Angelina, Edson e emily) em ordem alfabetica
// essa propriedade vai receber o retorno de uma function anônima
// esta function vai pedir tres nome para o usuario
// lancem um log desse objeto

const turma = {
  alunos: (function() {
    const nome1 = "Angelina";
    const nome2 = "Edson";
    const nome3 = "Emily";

    const alunosOrdenados = [nome1, nome2, nome3].sort();
    return alunosOrdenados;
  })()
};

console.log(turma);


