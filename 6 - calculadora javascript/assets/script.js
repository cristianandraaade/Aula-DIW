// calcula a media das três notas 
let button = document.querySelector("#media");
button.addEventListener("click", obtervalores);
function obtervalores() {
    let nota1 = document.getElementById("nota1");
    let valor1 = parseFloat(nota1.value);
    let nota2 = document.getElementById("nota2");
    let valor2 = parseFloat(nota2.value);
    let nota3 = document.getElementById("nota3");
    let valor3 = parseFloat(nota3.value);
    let media = (valor1 + valor2 + valor3) / 3;
    alert("A média de sua notas é: " + media);
};

//calculadora
let buttonadicao = document.getElementById("adição");
buttonadicao.addEventListener("click", adicao);
function adicao() {
    let numero1 = document.getElementById("numero1");
    let numero1Valor = parseFloat(numero1.value);
    let numero2 = document.getElementById("numero2");
    let numero2Valor = parseFloat(numero2.value);
    let resultadoAdicao = numero1Valor + numero2Valor;
    alert("O resultado da adição é: " + resultadoAdicao);
};
let buttonsubtracao = document.getElementById("subtração");
buttonsubtracao.addEventListener("click", subtracao);
function subtracao() {
    let numero1 = document.getElementById("numero1");
    let numero1Valor = parseFloat(numero1.value);
    let numero2 = document.getElementById("numero2");
    let numero2Valor = parseFloat(numero2.value);
    let resultadoSubtracao = numero1Valor - numero2Valor;
    alert("O resultado da subtração é: " + resultadoSubtracao);
};
let buttonmultiplicacao = document.getElementById("multiplicação");
buttonmultiplicacao.addEventListener("click", multiplicacao);
function multiplicacao() {
    let numero1 = document.getElementById("numero1");
    let numero1Valor = parseFloat(numero1.value);
    let numero2 = document.getElementById("numero2");
    let numero2Valor = parseFloat(numero2.value);
    let resultadoMultiplicacao = numero1Valor * numero2Valor;
    alert("O resultado da multiplicação é: " + resultadoMultiplicacao);
};
let buttondivisao = document.getElementById("divisão");
buttondivisao.addEventListener("click", divisao);
function divisao() {
    let numero1 = document.getElementById("numero1");
    let numero1Valor = parseFloat(numero1.value);
    let numero2 = document.getElementById("numero2");
    let numero2Valor = parseFloat(numero2.value);
    if (numero2 == 0){
        alert("Insira um um divisor valido");
    }
    else{
        let resultadoDivisao = numero1Valor / numero2Valor;
        alert("O resultado da multiplicação é: " + resultadoDivisao);
    }
};

