function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Valor encontrado, retorna o índice
    } else if (arr[mid] < target) {
      left = mid + 1; // Procura na metade direita
    } else {
      right = mid - 1; // Procura na metade esquerda
    }
  }

  return -1; // Valor não encontrado
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const targetValue = 20;
const resultIndex = binarySearch(array, targetValue);

if (resultIndex !== -1) {
  console.log(`O valor ${targetValue} foi encontrado no índice ${resultIndex}.`);
} else {
  console.log(`O valor ${targetValue} não foi encontrado no array.`);
}
