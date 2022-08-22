function obj(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.tela = () => {
        console.log('nome: ' + nome);
        console.log('idade: ' + idade);
    }
}
const objum = new obj("matheus", 22);

objum.tela()

