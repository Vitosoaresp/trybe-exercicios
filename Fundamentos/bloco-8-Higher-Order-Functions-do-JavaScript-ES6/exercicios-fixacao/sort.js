// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const ordenaCrescente = (arr) => arr.sort((a, b) => a.age - b.age);

console.log(people);
ordenaCrescente(people);
console.log(people);

const ordenaDescente = (arr) => arr.sort((a, b) => b.age - a.age);
ordenaDescente(people);
console.log(people);
