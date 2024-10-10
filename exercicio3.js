
var maiorsaque = parseFloat(0);
var menorsaque = parseFloat(Infinity);
var totaldossaques = parseFloat(0);
var contador  = 0 



while(contador < 3 )

{
   var saqueclient = parseFloat(prompt("Digite o valor que você quer sacar:"))
   var totaldossaques = ( contador * saqueclient);
   contador += 1;
     
     if (saqueclient > maiorsaque){

        var maiorsaque = saqueclient
     }
     
   
     if (saqueclient < menorsaque){

        var menorsaque = saqueclient
     }
}
    

document.write(`maior valor sacado: R$ ${maiorsaque}<br>`);
document.write(`média de valores sacados: R$ ${totaldossaques / contador}<br>`);
document.write(`menor valor sacado: R$ ${menorsaque}<br>`)
document.write(`total de dinheiro sacado: R$ ${totaldossaques}<br>`);










































