//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest .

const sum = (...numbers) => numbers.reduce((result, numbers) => result += numbers);
console.log(sum(50,3,2,1,100)); // 156
console.log(sum(50,3,2,1)); // 56
console.log(sum(3,2,1)); //6