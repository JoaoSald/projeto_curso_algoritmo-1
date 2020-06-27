
*/
function acaoBotao(){
var sairLoop, valor01, valor02 
do { 
    valor01 = prompt("digite o primeiro valor: ")
    valor02 = prompt("digite o segundo valor: ")
    document.getElementById("paragrafo").innerText = "resultado: " + ( parseInt valor01 + parseInt valor02)
    sairLoop = prompt("deseja sair? S/N")
    
} while(sairLoop != "N")
}
