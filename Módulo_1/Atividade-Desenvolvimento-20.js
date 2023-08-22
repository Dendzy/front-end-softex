class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }
}

const pessoa1 = new Pessoa("Ana", 35);
const pessoa2 = new Pessoa("João", 40);
const pessoa3 = new Pessoa("Maria", 28);

pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;

function imprimirLista(pessoa) {
    while (pessoa !== null) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
        if (pessoa.filho) {
            console.log(`Filho: ${pessoa.filho.nome}`);
        } else {
            console.log("Filho: Nenhum");
        }
        console.log("-----");
        pessoa = pessoa.filho;
    }
}
imprimirLista(pessoa1);
