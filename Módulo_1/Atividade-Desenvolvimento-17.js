var nomes = ['Yago', 'João', 'Luiz', 'Silva', 'Azevedo', 'Pereira', 'Ricador', 'Leonardo', 'Roberto', 'Gabriel'];
var idades = [20,10,50,60,23,56,12,23,18,65];
var cores = ['Amarelo', 'Azul', 'Verde', 'Vermelho', 'Magenta', 'Branco', 'Cinza', 'Preto', 'Roxo', 'Marrom'];

// Verificar as listas:
console.log(nomes);
console.log(idades);
console.log(cores);

// Verificar o tamanho das listas:
console.log(nomes.length);
console.log(idades.length);
console.log(cores.length);

// ALTERANDO COM INSERÇÃO -> push(), unshift() e splice();
  
  // Adicionar na ultima posição do Array com push().
    idades.push(12);
    console.log(idades);

  // Adicionar na primeira posição do Array com unshift().
    nomes.unshift('Bernardo')
    console.log(nomes);

  // Adicionando com splice().
    nomes.splice(0,0,'Amanda'); // Adicionei Amanda na posição 0 do meu Array.
    console.log(nomes);

  // Substituindo com splice().
  nomes.splice(1,1,'Julia'); // Substitui da posição 1 (Bernado) do meu Array e adiciei Julia nesse lugar.
  console.log(nomes);
 
// ALTERANDO COM REMOÇÃO -> pop(), shift() e splice().

  // Remover da ultima posição com pop().
  var ultima_cor_removida = cores.pop(); // Remove e armazena a ultima cor removida
  console.log(cores);
  console.log(ultima_cor_removida);


  // Remover da primeira posição com shift().
  var primeira_cor_removida = cores.shift(); // Remove e armazena a primeira cor removida
  console.log(cores);
  console.log(primeira_cor_removida);

  // Remover da primeira posição com splice().
  cores.splice(5,1);
     //Removi 1 elemento (número da direita) da posição 5.

console.log(nomes);
console.log(idades);
console.log(cores);
console.log(nomes.length);
console.log(idades.length);
console.log(cores.length);
