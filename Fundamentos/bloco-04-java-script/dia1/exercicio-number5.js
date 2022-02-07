//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function triângulo (angulo1, angulo2, angulo3) {
    let validacao = angulo1 + angulo2 + angulo3;
    if (validacao === 180) {
        return "true";
    }else {
        return "false";
    }
}

console.log(triângulo(30,60,60));






















// //Só irá existir um triângulo somente se, um de seus lados deve ser maior que o valor absoluto (módulo) da diferença dos outros dois lados e menor que a soma dos outros dois lados.

// const a =  10;
// const b = 6;
// const c = 5;

// let condicaoA1 = b % c;
// let condicaoA2 = b + c;
// let condicaoB1 = c % a;
// let condicaoB2 = c + b;
// let condicaoC1 = a % b;
// let condicaoC2 = b + a;

// if (condicaoA1 < a && a < condicaoA2 && condicaoB1 < b && b < condicaoB2 && condicaoC1 < c && c < condicaoC2) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }