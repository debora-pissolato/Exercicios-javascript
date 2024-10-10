var pilotos = [];
var voltamaislenta = 0;
var voltamaisRápida = 0;



while (true){

var nomePiloto = prompt("Nome do piloto ou digite '0' para finalizar:")
var velocidade =parseFloat(prompt("Insira a velocidade percorrida:"))

if (nomePiloto == '0'){


   break;
}
if (velocidade > voltamaisRápida){
   voltamaisRápida = velocidade
}
if (velocidade < voltamaislenta){
    voltamaislenta = velocidade
}
pilotos.push({nomePiloto, velocidade});
}

var media = (velocidade / pilotos );

document.write(`O piloto mais rapido foi o: ${nomePiloto} ele percorreu ${voltamaisRápida}<br>`)
document.write(`O piloto mais lento foi o: ${nomePiloto}ele percorreu ${voltamaislenta}<br>`)
document.write(`A media dos pilotos foi ${media}<br>`)


















































