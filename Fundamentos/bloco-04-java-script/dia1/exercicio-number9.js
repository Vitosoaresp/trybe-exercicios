//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const numbA = 6;
const numbB = 4;
const numbC = 12;

if (numbA % 2 > 0 || numbB % 2 > 0|| numbC % 2 > 0) {
    console.log('true');
}
else {
    console.log("false")
}