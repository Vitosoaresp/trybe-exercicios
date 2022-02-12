function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let dias = document.querySelector('#days');

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let addDay = dezDaysList[i]
    addDay = document.createElement('li');
    addDay.innerText = dezDaysList[i];
    addDay.className = 'day';
    dias.appendChild(addDay);

      if (addDay.innerText === '24' || addDay.innerText === '25' || addDay.innerText === '31' ) {
        addDay.className = 'day holiday';
      }
      if (addDay.innerText === '4' || addDay.innerText === '11' || addDay.innerText === '18' || addDay.innerText === '25') {
        addDay.classList.add('friday');
      }  
  }
}
createDays();

let buttonsContainer = document.querySelector('.buttons-container');
function createHolidays(string) {
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday';
  
  newButton.innerHTML = string;
  newButton.id = newButtonId;
  buttonsContainer.appendChild(newButton);
}
createHolidays('Feriados');

let button = document.getElementById('btn-holiday');
let feriadosDay = document.querySelectorAll('.holiday');
function addCorHoliday() {
  let newColor = 'darkgrey';
  let standardColor = 'rgb(238,238,238)';

  for (let i = 0; i < feriadosDay.length; i+=1) {
    if (feriadosDay[i].style.background === newColor) {
      feriadosDay[i].style.background = standardColor
    } else {
      feriadosDay[i].style.background = newColor;
    } 
  }
}
button.addEventListener('click', addCorHoliday);

function fridayDays(string) {
  let friday = document.getElementsByClassName('friday')
  let newButtonFriday = document.createElement('button')
  newButtonFriday.innerHTML = string;
  newButtonFriday.id = 'btn-friday';

  buttonsContainer.appendChild(newButtonFriday);
}
fridayDays('Sexta-feira')

function addColorFriday () {
  let newColor = 'chartreuse';
  let standardColor = 'rgb(238,238,238)';
  let fridays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].style.background === newColor) {
      fridays[i].style.background = standardColor;
    } else {
      fridays[i].style.background = newColor;
    }
  }
}
let buttonFriday = document.getElementById('btn-friday');
buttonFriday.addEventListener('click', addColorFriday);



function zoomMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
function zoomMouseOut() {
  let days = document.querySelector('#days');
  
  days.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
zoomMouseOver();
zoomMouseOut();

function addTask (string) {
  let div = document.querySelector('.my-tasks')
  let newElement = document.createElement('span');
  newElement.innerHTML = string

  div.appendChild(newElement);
}
addTask('Estudar sobre DOM');

function addLegendAndColor(color) { 
  let newElement = document.createElement('div');
  newElement.className = 'task';
  newElement.style.backgroundColor = color;

  let myTask = document.querySelector('.my-tasks');
  myTask.appendChild(newElement);
}
addLegendAndColor('darkgreen');

function clickLegend() {
  let tagDiv = document.querySelector('.task');

  tagDiv.addEventListener('click', function(event){
  if (event.target.className === 'task selected') {
    event.target.className = 'task';
  } else {
    event.target.className = 'task selected';
  }
  })
}
clickLegend();

function colorDays() {
  let days = document.querySelector('#days');
  let newColor = 'darkgreen'
  let standardColor = 'rgb(119,119,119)';
  days.addEventListener('click', function(event){
    if (event.target.style.color === newColor){
      event.target.style.color = standardColor;
      event.target.style.fontSize = '20px'
      event.target.style.fontWeight = '200';
    } else {
      event.target.style.color = newColor;
      event.target.style.fontWeight = '400';
      event.target.style.fontSize = '30px';
    }
  })
}
colorDays();