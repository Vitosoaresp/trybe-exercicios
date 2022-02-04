//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 10;
let result = fatorial;

for (let index = 1; index < fatorial; index += 1) {
    result *= index;
}
console.log(result);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index]; //[busca o indice = .length(6) - 1(5) - index] ]
}
console.log(reverseWord);

// 3-Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[4]

for (let index = 1; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}
console.log("Essa é a maior palavra da array: " ,maiorPalavra);

for (let index2 = array.length - 1; index2 >= 0; index2 -= 1) {
    if (array[index2].length < menorPalavra.length) {
        menorPalavra = array[index2];
    }
} 
console.log("Essa é a menor palavra da array: " ,menorPalavra);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let lagerNumberPrimo = 0;
for (let index = 0; index <= 50 ;index += 1) {
    if  (index % 2 > 0 && index % 3 > 0) {
        lagerNumberPrimo = index;
        console.log(lagerNumberPrimo);
    }
}
console.log(lagerNumberPrimo);