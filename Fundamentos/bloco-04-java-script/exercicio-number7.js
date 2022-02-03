//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let notarecebida = 200

if (notarecebida >= 90 && notarecebida <= 100) {
    console.log("A");    
}
else if (notarecebida >= 80 && notarecebida <= 89) {
    console.log("B");    
}
else if (notarecebida >= 70 && notarecebida <= 79) {
    console.log("C");    
}else if (notarecebida >= 60 && notarecebida <= 69) {
    console.log("D");    
}else if (notarecebida >= 50 && notarecebida <= 59) {
    console.log("E");    
}else if (notarecebida < 0 || notarecebida > 100)
    console.log("ERROR, Nota não é valida!")
else {
    console.log("F");    
}