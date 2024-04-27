// calcula a media das três notas 
let button = document.querySelector("#media");
button.addEventListener("click", obtervalores);
function obtervalores(){
let nota1 = document.getElementById("nota1");
let valor1 = parseFloat(nota1.value);
let nota2 = document.getElementById("nota2");
let valor2 = parseFloat(nota2.value); 
let nota3 = document.getElementById("nota3");
let valor3 = parseFloat(nota3.value); 
let media = (valor1 + valor2 + valor3)/3;
alert("A média de sua notas é: "+ media);
};
