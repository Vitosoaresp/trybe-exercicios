let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
      golden: 2, 
      silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' Tem ' + player.age + ' de idade.') //"A jogadora Marta Silva tem 34 anos de idade". 

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes.') //A jogadora Marta Silva foi eleita a melhor do mundo 6 vezes.

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata') //A jogadora possui 2 medalhas de ouro e 3 medalhas de prata
