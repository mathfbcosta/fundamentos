let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}


dobro = a => 7 * a
console.log(dobro(Math.PI))

let ola = function () { return '0lá' }

ola = () => 'Olá'

ola => '0lá' // possui um param
console.log(ola())