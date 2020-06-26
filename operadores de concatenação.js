/*
     nome: caractere
     numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("digite seu nome:")
  leia(nome)
  escreval("digite seu numero:")
  leia(numero)

  escreval(nome, " : ", numero)
*/
 var nome, numero
 nome = prompt("digite seu nome:")
numero = prompt("digite seu nuemro") 
document.getElementById("paragrafo").innerText = nome + " : " + numero