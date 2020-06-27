

function acaoBotao() {
 var numero, fatorial, 
numero = prompt("digite o numero para calcular o fatorial: ")
fatorial = 1 
//contador = contador + 1( formula abaixo)
for (var contador  = 1; contador <= numero; contador++) {
    fatorial  = fatorial * contador    
}
document.getElementById("paragrafo").innerText = "o fatorial de " + numero +  " é: "  + fatorial    
}