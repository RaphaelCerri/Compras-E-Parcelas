"use strict";
var pre = parseFloat(prompt("digite o valor da compra"));
alert("1 parcela = 0% de juros \n 2 parcelas = 3% de juros \n 4 parcelas = 7% de juros");
var par = parseInt(prompt("digite a quantidade de parcelas"));

if (par == 1) {
    var resul = pre;
    alert("Sem parcelas, o valor a ser pago é: " + resul.toFixed(1));
} else {
    if (par == 2) {
        var resul = (pre *0.03 + pre);
        alert("O valor de cada parcela é: " + resul/2 + "\n E o total é: " + resul.toFixed(1));
    } else {
        var resul = (pre *0.07 + pre);
        alert("O valor de cada parcela é: " + resul/4 + "\n E o total é: " + resul.toFixed(1));
    }
}










