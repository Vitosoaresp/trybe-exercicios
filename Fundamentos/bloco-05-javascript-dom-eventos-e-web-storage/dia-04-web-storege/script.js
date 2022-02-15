let sectionOptions = document.querySelector('.options-page');
let body = document.body;

function createInput() {
  let input = document.createElement('input');
  input.type = 'checkBox';
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
createTagP('Modo Dark');

function colorBackground(color) {
  body.style.background = color;
  localStorage.setItem('background', color)
}
colorBackground('black');

function colorText(color) {
  body.style.color = color
  localStorage.setItem('colorText', color);
}
colorText('white');
// function modoDark() {
//   inputText.addEventListener('click', function(){
//     if (inputText.checked == true) {
//       colorBackground('black')
//       colorText('white');
//     }
//   })
// }

function fontSize(value) {
  body.style.fontSize = value + 'px';
  let valueFont = value + 'px';
  localStorage.setItem('fontSize', valueFont);
}
fontSize('16');

