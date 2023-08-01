var nome_usuario = "";
var ano_nascimento = 0;
var ano_atual = 2022;
var idade = 0;

do {
  try {
    nome_usuario = prompt("Digite seu nome completo");
    if (isNaN(nome_usuario) === false){
      throw new Error("Digite seu nome completo, apenas letras e sem números.");
    }
  } catch (error) {
    alert(error.message);
  }
} while (isNaN(nome_usuario) === false);

do {
  ano_nascimento = parseInt(prompt("Digite o ano desejado, entre 1922 e 2021\nSe quiser sair do programa digite 0 para Sair."));
  if (isNaN(ano_nascimento) === false) {
    if (ano_nascimento === 0){
      break;
    } else if (ano_nascimento < 1922) {
        alert("Insira um ano acima ou igual a 1922 ou digite 0 para sair do programa!");
        continue;
    } else if (ano_nascimento > 2021){
        alert("Insira um ano abaixo ou igual a 2021 ou digite 0 para sair do programa!");
        continue;
    }
  } else {
      alert("Insira o valor em números e não em palavras!");
  }

} while (isNaN(ano_nascimento) === true || ano_nascimento < 1922 || ano_nascimento > 2021);
  
idade = (ano_atual - ano_nascimento);
alert("Seu nome é " + nome_usuario + " e tem " + idade + " de idade");
