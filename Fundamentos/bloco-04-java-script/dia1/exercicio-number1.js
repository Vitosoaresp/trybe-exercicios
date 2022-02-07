//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
/*Adição (a + b) | Subtração (a - b) | Multiplicação (a * b) | Divisão (a / b) | Módulo (a % b)*/

function calculadora (numberUm, operacao , numberDois) {
    if (operacao === "soma" || operacao === "+") {
        return numberUm + numberDois;
    } else if (operacao === "subtração" || operacao === "-") {
        return numberUm - numberDois;
    } else if (operacao === "divisão" || operacao === "/") {
        return numberUm / numberDois;
    } else if (operacao === "resto" || operacao === "%") {
        return numberUm % numberDois;
    }
    else if (operacao === "multiplicação" || operacao === "*") {
        return numberUm * numberDois;
    }
}

console.log("O resultado dessa operação é " + calculadora( 100,"/", 10));