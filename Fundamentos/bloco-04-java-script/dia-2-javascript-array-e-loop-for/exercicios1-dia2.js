let numbers = [5, 9, 3, 19, 10, 8, 100, 2, 35, 27];

// 1.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//2.
let result = 0;
for (let contar in numbers) {
    result += numbers[contar]
}
console.log(result);

//3
let soma = 0;
for (let contar in numbers) {
   soma += numbers[contar]
}
let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);

//4
let soma = 0;
for (let contar in numbers) {
   soma += numbers[contar]
}
let mediaAritmetica = soma / numbers.length;
if (mediaAritmetica > 20) {
    console.log("Valor maior que 20!");
} else  {
    console.log("Valor menor ou igual a 20!");
}

// 5
let numberMaior = numbers[0];
for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] > numberMaior) {
        numberMaior = numbers[contador];
    }    
}

console.log(numberMaior);

//6
let quantImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    let verificador = numbers[index] % 2;
    if (verificador > 0) {
        quantImpar += 1
    }
}
if (quantImpar > 0){
    console.log(quantImpar);
} else {
    console.log("Nenhum valor ímpar")
}

// // 7
let numberMenor = numbers[0];
for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] < numberMenor) {
        numberMenor = numbers[contador];
    }    
}
console.log (numberMenor);

// // 8
let numeros = [];
for (let index = 1; index <= 25; index +=1) {
    numeros.push(index);
}
console.log(numeros);

//9
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
for (let index = 0; index < numeros.length; index +=1) {
    console.log(numeros[index] / 2);
}   
