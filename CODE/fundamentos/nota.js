const aluno = function (nota) {
    if (nota <= 10 && nota >= 0) {
        if (nota >= 7) { console.log(`Você tirou ${nota} e está aprovado`) }
        else {
            console.log(`Você tirou ${nota} e está de recuperação`)
        }
    } else { console.log(`nota inválida`) }
}


const aluno1 = new aluno(8)
const aluno2 = new aluno(4)

function imprimirMes(mes) {
    switch (mes) {
        case 12: return console.log('dezembro');

        case 11: console.log('novembro')
            break
        case 10: console.log('outubro')
            break
        case 9: console.log(`setembro `)
            break
        case 8: console.log(`agosto`)
            break
        case 7: console.log(`julho `)
            break
        case 6: console.log(`junho `)
            break
        case 5: console.log(`maio `)
            break
        case 4: console.log(`abril `)
            break
        case 3: console.log(`março `)
            break
        case 2: console.log(`fevereiro `)
            break
        case 1: console.log(`janeiro `)
            break

        default: console.log("Mês invalido")
    }

}
imprimirMes(2)

