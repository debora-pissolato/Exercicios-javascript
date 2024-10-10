var soma = parseFloat(0);
var quantidadeNúmeros = parseFloat(0);
var numero = parseFloat (0);


while (soma < 100){

    var numero = parseFloat(prompt("Digite um número:"));
    if (soma <= numero){
       ++numero;   
     }
    

        quantidadeNúmeros++;
        soma += numero;

       if(soma >= 100){
        break;
       }
    }




document.write(`Quantidade de números necessários para alcançar a soma de 100 ou mais: ${quantidadeNúmeros}`)

























































