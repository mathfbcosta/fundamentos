function irAoShopping(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) BITWISE XOR - XOR BIT A BIT
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel }
}
console.log('01)', irAoShopping(true, true))
console.log('02)', irAoShopping(true, false))
console.log('03)', irAoShopping(false, true))
console.log('04)', irAoShopping(false, false))