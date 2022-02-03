//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = "Bispo";
let result = pecaXadrez.toLowerCase();


switch (result) {
    case "bispo":
        console.log("bishop");
        break;
    case "diagonais":
        console.log("diadonals")
        break;
    case "cavalo":
        console.log("em l");
        break;
    default:
        console.log("error");
}