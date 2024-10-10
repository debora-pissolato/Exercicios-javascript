var quantidadeveiculos = 0;
var quantidadeMultados = 0;

var velocidadeMaxima = 120;
var numeroVeiculos = 10;

for (var contador = 0; contador < numeroVeiculos; contador++){

    var velocidade = prompt("Digite a velocidade do veículo:");

    velocidade = number(velocidade);

    if (!isNaN(velocidade)){

        quantidadeveiculos++;
         

    if (velocidade > velocidadeMaxima){
        quantidadeMultados++;
    }    
    }
}




















































