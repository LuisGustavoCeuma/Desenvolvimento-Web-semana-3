
// variavel let pontos

let pontos = 0;
pontos += 10;

console.log(pontos);

////////////////////////////////////////////////

// variavel para cada tipo de dado

const texto = 'string';
const numero = 10;
const booleano = true;
let  indefinido;
const nulo = null;

console.log("string:   ", typeof texto);      // "string"
console.log("number:   ", typeof numero);     // "number"
console.log("boolean:  ", typeof booleano);   // "boolean"
console.log("undefined:", typeof indefinido); // "undefined"
console.log("null:     ", typeof nulo);       // "object" (bug histórico da linguagem)


////////////////////////////////////////////////

// template literals

const dinheiro = 10
const centavos = 20
console.log(`Eu tenho ${dinheiro} reais e ${centavos} centavos.`)

console.log('Eu tenho ' + dinheiro + ' reais e ' + centavos + ' centavos.')

////////////////////////////////////////////////

// variavel MAX_PONTOS

const MAX_PONTOS = 100;
MAX_PONTOS = 99;
