
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
