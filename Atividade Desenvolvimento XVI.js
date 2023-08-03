var voto = 0;
var finalizar_voto = "";
var nulo = 0;
var cont_candidato_x = 0;
var cont_candidato_y = 0;
var cont_candidato_z = 0;
var cont_voto_branco = 0;
var cont_voto_nulo = 0;
var vencedor = 0

const candidato = {
  x: 889,
  y: 847,
  z: 515,
  branco: 0
}

do {
  var voto = parseInt(prompt("URNA\nDIGITE O NUMERO DO SEU CANDIDATO:\n889 -> CANDIDATO X\n847 -> CANDIDATO Y\n515 -> CANDIDATO Z\n0 -> BRANCO\nQUALQUER OUTRO VALOR, SERÁ DADO COMO NULO."));
  if (isNaN(voto) === true) {
    alert("DIGITE UM NÚMERO!");
    continue;
  } else if (voto == candidato.x) {
    alert("Você votou no candidato X!");
    cont_candidato_x++;
  } else if (voto == candidato.y) {
    alert("Você votou no candidato Y!");
    cont_candidato_y++;
  } else if (voto == candidato.z) {
    alert("Você votou no candidato Z!");
    cont_candidato_z++;
  } else if (voto == candidato.branco) {
    alert("Você votou em Branco")
    cont_voto_branco++
  } else {
    alert("Você votou nulo!")
    cont_voto_nulo++
  }
  
  finalizar_voto_minusculo = prompt("Deseja finalizar a votação?\nDigite s para sim.\nDigite qualquer outra coisa para não!");
  finalizar_voto = finalizar_voto_minusculo.toUpperCase();
} while (finalizar_voto != "S");

if (cont_candidato_x > cont_candidato_y && cont_candidato_x > cont_candidato_z){
  vencedor = candidato.x;
} else if (cont_candidato_y > cont_candidato_x && cont_candidato_y > cont_candidato_z) {
  vencedor = candidato.y;
} else {
  vencedor = candidato.z;
}

alert("O VENCEDOR COM O MAIOR NÚMERO DE VOTOS FOI\nO CANDIDATO " + vencedor + "\n\n" +
     "O CANDIDATO X TEVE " + cont_candidato_x + " VOTOS\n" +
     "O CANDIDATO Y TEVE " + cont_candidato_y + " VOTOS\n" +
     "O CANDIDATO Z TEVE " + cont_candidato_z + " VOTOS \n" +
     "O TOTAL DE VOTOS EM BRANCOS FORAM DE " + cont_voto_branco + 
     "\nO TOTAL DE VOTOS NULO FORAM DE " + cont_voto_nulo);
