alert("Olá, somos uma calculadora e precisaremos de 2 números que você queira para fazer as operações a seguir.");

var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));
var opcao = parseInt(prompt("Escolha qual operação:\n 1. SOMA\n 2. SUBTRAÇÃO\n 3. MULTIPLICAÇÃO\n 4. DIVISÃO\n 5. Sair"));

while (opcao != 5) {
 if (opcao == 1) {
    var soma = num1 + num2;
    window.alert("Sua soma foi igual a " + soma);
  } else if (opcao == 2) {
    var subtracao = num1 - num2;
    window.alert("Sua subtração foi igual a " + subtracao);
  } else if (opcao == 3) {
    var multiplicacao = num1 * num2;
    window.alert("Sua multiplicação foi igual a " + multiplicacao);
  } else if (opcao == 4) {
    if (num2 === 0) {
      window.alert("Não é possível dividir por zero.");
    }
    var divisao = num1 / num2;
    window.alert("Sua divisão foi igual a " + divisao);
  } else {
    window.alert("Opção inválida.");
  }
  
 var num1 = parseInt(prompt("Digite o primeiro número: "));
 var num2 = parseInt(prompt("Digite o segundo número: "));
 var opcao = parseInt(prompt("Escolha qual operação:\n 1. SOMA\n 2. SUBTRAÇÃO\n 3. MULTIPLICAÇÃO\n 4. DIVISÃO\n 5. SAIR"));
}
