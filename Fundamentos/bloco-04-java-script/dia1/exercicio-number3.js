//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 49;
const b = 330;
const c = 500;

if (a > b && a > c) {
    console.log(a)    
}
else if (c > b && c > a) {    
    console.log(c);
}
else if (b > c && b > a) {
    console.log(b);
}


