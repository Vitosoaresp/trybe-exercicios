//1
document.querySelector('#elementoOndeVoceEsta');
//2
let pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
pai.style.color = 'red';
//3
let filhoDoFilho = document.querySelector('#elementoOndeVoceEsta').children
filhoDoFilho[0].innerText = 'Primeiro Filho do Filho';

//4
/*let primeirofilho = */document.querySelector('#pai').children[0]
//5
/*let primeiroFilho = */document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
//6 
/*let atencao = */document.querySelector('#elementoOndeVoceEsta').nextSibling;
//7
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
//8
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
//parte 2
//1
let irmaoOndeEstou = document.createElement('p')
irmaoOndeEstou.innerHTML = 'irmao de onde estou'; 
pai.appendChild(irmaoOndeEstou);
//2
let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
let filhoOndeEstou = document.createElement('h3');
filhoOndeEstou.innerHTML = 'Filho onde estou.'
ondeEstou.appendChild(filhoOndeEstou);
//3
let primeiroFilhoDoFilho = filhoDoFilho[0];
let filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
filhoDoPrimeiroFilhoDoFilho.innerHTML = 'filho do primeiro filho do filho'
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
document.removeChild


let paidopai = document.querySelector('#paiDoPai');

for (let index = 0; index < paidopai.length;index +=1) {
  let element = paidopai[index];
  if (Element.innerHtml.includes('primeiro filho')) {
      paidopai.removeChild(element);
  }
}