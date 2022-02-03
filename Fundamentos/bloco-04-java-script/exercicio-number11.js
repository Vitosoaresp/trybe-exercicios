//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salarioBruto = 3000;

let inssAliquota1 = salarioBruto * 8 / 100;
let inssAliquota2 = salarioBruto * 9 / 100;
let inssAliquota3 = salarioBruto * 11 / 100;
let inssAliquotaMAX = 570.88;

let salario2;
let irAliquota1 = salario2 * 7.5 / 100 - 142.80;
let irAliquota2 = salario2 * 15 / 100 - 354.80;
let irAliquota3 = salario2 * 22.5 / 100 - 636.13;
let irAliquota4 = salario2 * 27.5 / 100 - 869.36;
let salarioliquido;

if (salarioBruto <= 1556.94) {
    salario2 = salarioBruto - inssAliquota1
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salario2 = salarioBruto - inssAliquota2;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ) {
    salario2 = salarioBruto - inssAliquota3;
} else {
    salario2 = salarioBruto - inssAliquotaMAX;
}

if (salario2 <= 1903.98) {
        console.log(salario2)
}
else if (salario2 >= 1903.99 && salario2 <= 2826.65) {
        salarioliquido = salario2 - irAliquota1;
        console.log(salarioliquido);
} 
    else if (salario2 >= 2826.66 && salario2 <= 3751.05) {
        salarioliquido = salario2 - irAliquota2;
        console.log(salarioliquido);
    }
    else if (salario2 >= 3751.06 && salario2 <= 4664.68) {
        salarioliquido = salario2 - irAliquota3;
        console.log(salarioliquido);
    }else {
        salarioliquido = salario2 - irAliquota4;
        console.log(salarioliquido);
    }