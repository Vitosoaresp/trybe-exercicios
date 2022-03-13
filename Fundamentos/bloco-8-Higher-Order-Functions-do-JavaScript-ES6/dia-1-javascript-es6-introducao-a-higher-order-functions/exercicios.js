// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const cadastroTrybe = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com`,};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees(cadastroTrybe)); 
/*{
  id1: { nomeCompleto: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
  id2: { nomeCompleto: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
  id3: { nomeCompleto: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
}*/

// 2 Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberRandom = () => {
  const numberLotery = Math.floor(Math.random() * 5 ) + 1;
  return numberLotery;
};
const sorteio = (aposta, callback) => {
  if (aposta === callback) {
    return "Parabéns você ganhou";
  }
  return "Tente novamente"
};
console.log(sorteio(2, numberRandom()));

// 3 Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (gabarito, chute) => {
  if (gabarito === chute) {
    return 1;
  }else if (chute === 'N.A') {
    return 0;
  }
  return -0.5;
};
const resultAnswers = (gabarito, estudante, callback) => {
  let contador = 0;
  for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    const verifyAnswers = callback(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    contador += verifyAnswers;
  }
  return `Resultado: ${contador} pontos!`
};
console.log(resultAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers)); // Resultado: 5 pontos!




