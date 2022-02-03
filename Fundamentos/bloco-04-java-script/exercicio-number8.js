//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const numbA = 5;
const numbB = 7;
const numbC = 13;

if (numbA % 2 === 0 || numbB % 2 === 0|| numbC % 2 ===0) {
    console.log('true');
}
else {
    console.log("false")
}