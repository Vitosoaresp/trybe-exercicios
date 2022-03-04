//1

const fatorial = (n) => {
  let resp = 1;
  for (let i = 2; i <= n; i +=1) {
    resp *= i;
  }

  return resp;
}
console.log(fatorial(5))

//2
const longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
const maiorPalavra = () => {
let longstWordSplit = longestWord.split(' ');
let maiorPalavra = longstWordSplit[0];
for (let i = 1; i <longstWordSplit.length; i +=1) {
  if (maiorPalavra.length < longstWordSplit[i].length) {
    maiorPalavra=longstWordSplit[i];
  }
}
return maiorPalavra;
}
console.log(maiorPalavra(longestWord))

// 4
const array = ['JavaScript','CSS','HTML','ES6','CSS Responsivo'];
const frase = 'Trybe x aqui!'

const editX = (string) => {
  let fraseSplit = frase.split(' ');
  for (let i = 0; i < fraseSplit.length; i += 1){
    if (fraseSplit[i] === 'x') {
      fraseSplit[i] = string;
    }
  }
  return fraseSplit.toString().replace(/,/g," ");

}
console.log(`${editX('Vitor')} Minhas cinco principais habilidades são:
${array.sort()}`);
