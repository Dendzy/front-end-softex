var terrestre, pessoa, pesado, capacete;

window.alert('Iremos agora fazer um jogo de perguntas e respostas!');
window.alert('Escolha entre um trator, uma moto ou uma bicicleta.');
window.alert('Iremos fazer perguntas e você deverá responder com sim ou nao!');
window.alert('Através delas descobriremos em qual veículo você pensou.');
terrestre = window.prompt('É terrestre? ');
pessoa = window.prompt('Cabe mais de uma pessoa?');
pesado = window.prompt('É pesado? ');
capacete = window.prompt('Usa capacete? ');
if (capacete == 'sim') {
  window.alert('Então, o transporte escolhido foi uma moto!');
} else if (pesado == 'sim') {
  window.alert('Então, o transporte escolhido foi um trator!');
} else {
  window.alert('Então, o transporte escolhido foi uma bicicleta!');
}
// Programado pelo Blockly em JavaScript
