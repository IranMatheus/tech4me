function calculadora(){
    const imputValor1 = parseInt(prompt ("digite o primeiro numero:"));

    const imputValor2 = parseInt(prompt ("digite o segundo numero:"));
    
    alert("soma:" + (imputValor1 + imputValor2));
    
    alert("substração:" + (imputValor1 - imputValor2));

    alert("multiplicação:" + (imputValor1 * imputValor2));

    alert("divisão Real:" + (imputValor1 / imputValor2));

    alert("divisão Inteira:" + Math.floor (imputValor1 / imputValor2));
}

calculadora();
