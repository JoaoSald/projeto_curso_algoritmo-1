var nome, nota1, nota2
nome = prompt("digite seu nome")
nota1 = prompt("digite nota1")
nota2 = prompt("digite nota2")

media = ( parseInt(nota1) + parseInt(nota2)) / 2;


if(media >=5){ 
     alert("aprovado" + nome)
 }
     else
     alert("reprovado" + nome)