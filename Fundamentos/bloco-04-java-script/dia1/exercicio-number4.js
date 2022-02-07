//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function sabio (number) {
	if (number > 0) {
    return " número positive";
}
else if (number < 0) {
    return "número negative";
}
else {
    return "zero";
}
}
console.log(sabio(-9));