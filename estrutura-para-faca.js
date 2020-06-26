/*
 numero,fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva ("digite o numero para calcular o fatorial: ")
   leia (numero)
   
   fatorial := 1
   para contador de 1 ate numero faca
      fatorial  := fatorial * contador
      
   fimpara
   escreval ("fatorial de numero" ,numero," é : ", fatorial)
*/

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