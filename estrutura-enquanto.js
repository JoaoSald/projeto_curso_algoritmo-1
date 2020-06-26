/*
 nome: caractere
 idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("digite a quantidade de vezes que vai se verificar a idade:")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
           escreva("digite o nome da pessoa: ")
           leia(nome)
           escreva("digite a idade do(a): " , nome, " : " )
           leia(idade)
           se idade > 18 entao
           escreval(nome, "você é maior de idade!")
           senao
           escreval(nome, "você é menor de idade '-'")
           fimse
           contador := contador + 1
           fimenquanto
Fimalgoritmo
*/ 
function acaoBotao(){
    var nome, idade, limite, contador 
limite = prompt("digite a quantidade de vezes que vai se verificar a idade")
contador = 0 
while(contador < limite){
   nome = prompt("digite o nome da pessoa: ")
   idade = prompt("digite a idade do(a): " + nome)
    if (idade > 18) 
    document.getElementById("paragrafo").innerText = nome + "você é maior de idade!"
    else
    document.getElementById("paragrafo").innerText = nome + "você é menor de idade '-'" 
 contador ++

}
