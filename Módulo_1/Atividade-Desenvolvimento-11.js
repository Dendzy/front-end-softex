var quantRodas = 0;
var pesoBruto = 0;
var quantPessoasVeiculo = 0;

alert("Iremos executar um programa para determinar qual a melhor habilitação, mas para isso precisaremos de algumas informações.")
quantRodas = parseInt(prompt("Quantas rodas o veículo possui? "));
pesoBruto = parseInt(prompt("Quantos quilogramas o veículo possui? "));
quantPessoasVeiculo = parseInt(prompt("Qual a quantidade de pessoas no veículo? "));

// Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
// A: Veículos com duas ou três rodas;
if (quantRodas == 2 || quantRodas == 3) {
  alert("A melhor categoria para a sua habilitação é A");  
}
// B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
else if (quantRodas == 4 && quantPessoasVeiculo <= 8 && pesoBruto <= 3500) {
  alert("A melhor categoria para a sua habilitação é B");
  }
//C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
else if (quantRodas >= 4 && pesoBruto >= 3500 && pesoBruto <= 6000) {
  alert("A melhor categoria para a sua habilitação é C");
}
// D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
else if (quantRodas >= 4 && quantPessoasVeiculo > 8) {
  alert("A melhor categoria para a sua habilitação é D");
}
// E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
else if (quantRodas >= 4 && pesoBruto > 6000) {
  alert("A melhor categoria para a sua habilitação é E");
}
else alert("Informações erradas, por favor tente novamente."); 

//Achei que as informações ficaram um pouco confusas, mas fiz conforme o programa pediu!
