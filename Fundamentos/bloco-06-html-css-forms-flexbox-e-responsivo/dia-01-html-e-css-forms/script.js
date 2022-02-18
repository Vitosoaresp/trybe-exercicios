const buttonsSection = document.getElementById('buttons')
function createButton(type, text, id) {
  const newButton = document.createElement('button');
  newButton.type = type;
  newButton.textContent = text;
  newButton.className = 'button';
  newButton.id = id;
  buttonsSection.appendChild(newButton);
}
createButton('submit', 'Enviar', 'button1');
createButton('reset', 'Apagar', 'button2');

const button = document.getElementById('button1');
button.addEventListener('click', defalt)

function defalt(event) {
  event.preventDefault();
}
