import {postPessoa} from "./pessoasService"

const cadastrarPessoa = async () => {
    let nomePessoa = document.getElementById("nomePessoa").value;
    console.log(nomePessoa);
    

    postPessoa(nomePessoa);
}