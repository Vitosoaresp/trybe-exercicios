//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome (palavra) {
  let reverseWord = '';
  for (let index = 0; index < palavra.length; index += 1) {
    reverseWord += palavra[palavra.length - 1 - index];
  }
  if (reverseWord == palavra){
    console.log('true')
  }
  else {
    console.log('false')
  }
  return reverseWord;
}
verificaPalindrome("arara");

// 2 -  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numbers = [2, 3, 6, 7, 10, 1];
function maiorValor (object) {
  let maiorNumber = numbers[0];
  for (let index in object) {
    if (object[index] > maiorNumber) {
      maiorNumber = index;
    }
  }
  return maiorNumber;
}
console.log(maiorValor(numbers));

// //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbers = [2, 4, 6, 7, 10, 0, -3];
function menorValor (object) {
  let menorNumber = numbers[0];
  for (let index in object) {
    if (object[index] < menorNumber) {
      menorNumber = index;
    }
  }
  return menorNumber;
}
console.log(menorValor(numbers));

// 4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
let maiorPalavra = array[0]
function maiorname (object) {
  for (let index = 1; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
  }
  return maiorPalavra;
}
console.log(maiorname(array));

// // 5 -Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let numbers = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
} 
console.log(maisRepetido(numbers));

// 6 - revisar
let sum = 0;
function sumNumbers (object){
  for (let index = 1; index <= object; index +=1) {
    sum = sum + index;
  }
  return sum
}
console.log(sumNumbers(5))

// 7 - revisar
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be')); 