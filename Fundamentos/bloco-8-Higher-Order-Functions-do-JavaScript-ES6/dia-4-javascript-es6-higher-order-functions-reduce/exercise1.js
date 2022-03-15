// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];//[1,2,3,true,4,5,6]

function flatten() {
 const result = arrays.reduce((acc, currentValue) => {
    return acc.concat(currentValue);
  }, [])
  return result;
}

// const changeArr = () => arrays.reduce((acc,currentValue) => acc.concat(currentValue), [])
console.log(flatten());

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//metodo concat retorna um novo array contendo todos os arrays ou valores passados como parâmetro.