alert("Olá, somos uma calculadora e precisaremos de 2 números que você queira para fazer as operações a seguir.");

var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));
var opcao = parseInt(prompt("Escolha qual operação:\n 1. SOMA\n 2. SUBTRAÇÃO\n 3. MULTIPLICAÇÃO\n 4. DIVISÃO"));

function calculadora(num1, num2, opcao) {
  if (opcao == 1) {
    var soma = num1 + num2;
    return window.alert("Sua soma foi igual a " + soma);
  } else if (opcao == 2) {
    var subtracao = num1 - num2;
    return window.alert("Sua subtração foi igual a " + subtracao);
  } else if (opcao == 3) {
    var multiplicacao = num1 * num2;
    return window.alert("Sua multiplicação foi igual a " + multiplicacao);
  } else if (opcao == 4) {
    if (num2 === 0) {
      return window.alert("Não é possível dividir por zero.");
    }
    var divisao = num1 / num2;
    return window.alert("Sua divisão foi igual a " + divisao);
  } else {
    return window.alert("Opção inválida.");
  }
}

calculadora(num1, num2, opcao);
