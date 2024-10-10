var quantidadeveiculos = 0;
var quantidadeMultados = parseFloat(0);
var veiculosSoma = parseFloat (0);





while (true){
  
    var velocidade = parseFloat(prompt("Digite a velocidade do veículo em km/h:"));

    if (velocidade === 0){
      break;  
    }
      
    quantidadeveiculos++;
    veiculosSoma += velocidade;

    if(velocidade > 120 ){
      
        quantidadeMultados++;

        
} 

}

 var media = quantidadeveiculos > 0 ? (veiculosSoma / quantidadeveiculos ).toFixed(2) : 0;
 
document.write(`A quantidade  total de veiculos foi : ${quantidadeveiculos}<br> `)
document.write(`A velocidade média foi: ${media} km/h <br>`)
document.write(` Quantidade de veículos multados foi:${quantidadeMultados}<br>`)































