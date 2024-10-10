var anocadastro = new Date().getFullYear().slice(-2);

var alunos = [];


for (var contador = 1; contador <=15; contador++) {

    var nome = prompt(`Digite o nome dy alune ${contador} `);
    
    
    var matricula = anocadastro + (contador < 10 ? '0': '') + contador;
     
    
    
    
    
    alunos.push({nome, matricula});


}




     document.write(`Aluno: ${nome} | matricula: ${matricula}<br>`);










































