const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 8.8, 9.9];
for (let i in notas) {
    console.log(`Elemento ${i} é a nota ${notas[i]}`)
}

const dadosPessoais = {
    Nome: 'Matheus',
    Altura: 170 + ' cm',
    Peso: 70 + ' kg',
    Idade: 22
}
for (let atributo in dadosPessoais) {
    console.log(`Dados Pessoais: ${atributo} = ${dadosPessoais[atributo]}`)
}
// --------------------------------------------------------------------------------------------//

var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
    this.color = "red";
}
function ColorYelowTriangle() {
    this.color2 = 'yellow'
}
ColorYelowTriangle.prototype = triangle;
ColoredTriangle.prototype = triangle;
const obj1 = new ColorYelowTriangle();
var obj = new ColoredTriangle();
for (let prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
        console.log(`obj. ${prop} = ${obj1[prop]}`)
    }
}
for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log("obj." + prop + " = " + obj[prop]);
    }
}

// Output:
// "obj.color = red"