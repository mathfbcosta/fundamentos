function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") { return !valor }
    if (tipo == "number") { return -valor }
    else { return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}` }
}

console.log(inverso(5))
console.log(inverso('Teste'))
console.log(inverso())
console.log(inverso(false))