function calcularMedias() {
    const alunos = [
        { nome: "Rana", modulo: "Módulo A", nota_4: 7, nota_6: 8 },
        { nome: "Samantha", modulo: "Módulo B", nota_4: 5, nota_6: 6 },
        { nome: "Axl", modulo: "Módulo A", nota_4: 9, nota_6: 7 },
        { nome: "Lorena", modulo: "Módulo C", nota_4: 4, nota_6: 5 },
        { nome: "Stella", modulo: "Módulo B", nota_4: 6, nota_6: 8 }
    ];

    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        const media = (aluno.nota_4 + aluno.nota_6) / 2;
        let resultado = "";

        if (media >= 6) {
            resultado = "Aprovado";
        } else {
            resultado = "Reprovado";
        }

        alert(
            `Aluno: ${aluno.nome}\n` +
            `Módulo: ${aluno.modulo}\n` +
            `Média: ${media.toFixed(1)}\n` +
            `Situação: ${resultado}`
        );
    }
}
