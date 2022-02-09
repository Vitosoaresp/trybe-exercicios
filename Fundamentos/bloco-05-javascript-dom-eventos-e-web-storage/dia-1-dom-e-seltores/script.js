let tagP = document.getElementsByTagName('p');
let mainContent = document.getElementsByClassName('main-content');
let centerContent = document.getElementsByClassName('center-content');
let title = document.getElementsByClassName("title");
function changeText (element, text) {
  for (let i = 0; i < element.length; i += 1) {
    element[i].innerText = text;
  }
  return element;
}
function changeColor(element, color) {
  for (let i = 0; i < element.length; i +=1){
    element[i].style.background = color;
  }
    return element;
}
function upperCase(element, valor) {
  for (let i =0; i < element.length; i += 1) {
    element[i].style.textTransform = "uppercase";
  }
  return element;
}

console.log(tagP);






changeText(tagP,"Trabalhando como programador web!")
changeColor(mainContent,"rgb(76,164,109)");
changeColor(centerContent, "white");
changeText(title,"Exercício 5.1 - JavaScript");
upperCase(tagP);