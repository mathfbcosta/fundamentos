function converterIdade(idade) {
    this.dias = idade * 365
    this.imprimir = () => {
        console.log(`${idade} anos equivale a ${this.dias} dias`)
    }
}
const aluno = new converterIdade(22);
const aluno2 = new converterIdade(30);
aluno.imprimir()
aluno2.imprimir()


// function receberNomeDoMes(numero) {
//     const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
//         'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
//     return mapeamento[--numero];
// }
// console.log(receberNomeDoMes(5))    