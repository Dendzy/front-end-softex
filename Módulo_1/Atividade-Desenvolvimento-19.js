/* QUESTÃO: Considere o array [3, 7, 9, 1, 0].
O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?
*/

// Filas: O primeiro a entrar é o primeiro a sair (FIFO: First-In-First-Out).
var fila = [3, 7, 9, 1, 0];
var fila = [7, 9, 1, 0];
var fila = [9, 1, 0];
var fila = [1, 0];
var fila = [0];
var fila = [ ];

// Pilhas: O último a entrar é o primeiro a sair (LIFO: Last-In-First-Out).
var fila = [3, 7, 9, 1, 0];
var fila = [3, 7, 9, 1];
var fila = [3, 7, 9];
var fila = [3, 7];
var fila = [3];
var fila = [ ]

/* O legal das listas é que ela tem liberdade de fazer em qualquer ordem,
seja na sua atualização, busca ou remoção, como a questão pede a remoção, a resposta
basicamente é o número de possibilidades que eu teria para remover cada um,
que é o fatorial de 5, que são ao todo 120 possibilidades. Abaixo terá uma delas.
*/
var fila = [3, 7, 9, 1, 0];
var fila = [3, 7, 9, 1];
var fila = [3, 7, 1];
var fila = [7, 1];
var fila = [1];
var fila = [ ];
