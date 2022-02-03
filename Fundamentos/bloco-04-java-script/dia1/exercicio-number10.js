//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = 20;
const valorDeVenda = 60;
let imposto = 20 / 100
let calculoImposto = custoProduto * imposto;

let custoTotal = custoProduto + calculoImposto;
let quantidadeVendida = 1000;
let lucroliquido = valorDeVenda - custoTotal;

if (valorDeVenda > 0 && custoProduto > 0) {
    console.log("Você terá um lucro de " + lucroliquido * quantidadeVendida + "!" );
} 
else {
    console.log("ERRO!!!!, Valor de entrada menor que 0.")
}