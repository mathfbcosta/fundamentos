// exercicio 01
function cumprimentar(nome) {
    return console.log(`Olá ${nome}!`)
}

cumprimentar("Matheus")
cumprimentar('Gustavo')

// // exercicio 02

// function converterIdade(idade) {
//     let dias = idade * 365
//     return console.log(`${idade} anos equivale a ${dias} dias`)
// }
// converterIdade(25)
// converterIdade(22)

// // exercicio 03

// function calcularSalario(horasTrabalhadas, salarioPorHora) {
//     let salarioBruto = horasTrabalhadas * salarioPorHora
//     let imposto = salarioBruto * 0.30
//     let salarioLiquido = salarioBruto - (salarioBruto * 0.30)
//     return [
//         console.log('O salario bruto é igual a R$ ' + salarioBruto),
//         console.log('O salario liquido é igual a R$ ' + salarioLiquido),
//         console.log('O imposto é igual a R$ ' + imposto)
//     ]
// }

// const funcionario1 = new calcularSalario(160, 10);
// const funcionario2 = new calcularSalario(160, 20);
// exercicio 04

function maiorOuIgual(n1, n2) {
    if (n1 >= n2) { return true } else { return false }
}
console.log(maiorOuIgual(2, 3))
console.log(maiorOuIgual(5, 1))

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false
    return primeiro <= segundo
}
console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(0, 1))

