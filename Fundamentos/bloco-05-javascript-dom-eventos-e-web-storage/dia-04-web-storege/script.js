let sectionOptions = document.querySelector('.options-page');
let body = document.body;

function createInput() {
  let input = document.createElement('input');
  input.type = 'text';
  input.style.border = '2px solid black';
  input.placeholder = 'Escreva a cor de fundo em inglês'
  input.id = 'input-backgroundColor';

  sectionOptions.appendChild(input);
}
createInput();
let inputText = document.getElementById('input-backgroundColor');

function createTagP (string) {
  let tagP =document.createElement('p');
  tagP.innerText = string;
  tagP.className = 'text-input-left';
  sectionOptions.appendChild(tagP);
}
createTagP('Mude a cor de fundo da página --->');

function colorBackground() {
  body.style.background = inputText.value;
  if (inputText.value == 'black') {
    body.style.color = 'white';
  }
}
inputText.addEventListener('keyup', colorBackground);
