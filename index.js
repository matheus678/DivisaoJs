let numerador = prompt("Digite o numerador:");
let denominador = prompt("Digite o denominador: ");
let resultado;

if (denominador == 0) {
    alert ("Não é possível dividir um número por zero.");
}

else {
    resultado = numerador / denominador;
    alert(`${numerador} dividido por ${denominador} é igual a ${resultado}`);
}