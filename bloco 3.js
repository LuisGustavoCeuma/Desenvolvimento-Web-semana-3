
// função classificar nota

function classificarNota(nota) {
    if (nota >= 6) {
        return console.log('Aprovado')
    }
    else {
        return console.log('Reprovado')
    }
}

classificarNota(10)

////////////////////////////////////////////////

// cor semaforo

let cor_semaforo = 'verde'

switch(cor_semaforo) {
    case 'amarelo': console.log('Atenção'); 
    case 'vermelho': console.log('Pare');
    case 'verde': console.log('Siga');
    default: null; break;
}

////////////////////////////////////////////////////

// loop for classico tabuada 5

for (let i = 1; i < 11; i++){
    console.log(5*i)
}

//////////////////////////////////////////////////////

// while regressivo

contagem = 5
while (true) {
    console.log(contagem)
    contagem -= 1
    if (contagem === 0) {
        break
    }
}

/////////////////////////////////////////////////////////

// par ou impar até 20

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(`O numero ${i} é par.`)
    }
    else {
        console.log(`O numero ${i} é ímpar.`)
    }
}

i = 1
while (true) {
    if (i % 2 === 0) {
        console.log(`O numero ${i} é par.`)
    }
    else {
        console.log(`O numero ${i} é ímpar.`)
    }

    i += 1
    if (i === 21) {
        break
    }

}

//////////////////////////////////////////////////////////

// função dia da semana

function diaDaSemana(numero) {
    switch(numero) {
        case 1: return console.log('Segunda feira')
        case 2: return console.log('Terça feira')
        case 3: return console.log('Quarta feira')
        case 4: return console.log('Quinta feira')
        case 5: return console.log('Sexta feira')
        case 6: return console.log('Sabado')
        case 7: return console.log('Domingo')
        default: return console.log('Numero invalido')
    }
}

diaDaSemana(3)

