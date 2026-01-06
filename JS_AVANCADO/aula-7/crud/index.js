let responseParse = [];

const getTodos = async () => {
    let response = await fetch("http://localhost:8080/pessoas")
    responseParse = await response.json();

    console.log(responseParse);

const getId = async () => {
    let response = await fetch("http://localhost:8080/pessoas")
    responseParse = await response.json();

    console.log(responseParse);
}

const getPost = async () => {
    let response = await fetch("http://localhost:8080/pessoas")
    responseParse = await response.json();

    console.log(responseParse);
}

}