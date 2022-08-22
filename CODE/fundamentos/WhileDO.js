function numeroaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 2

do {
    opcao = numeroaleatorio(4, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
} while (opcao != 4)

console.log("isso é tudo pessoal")


