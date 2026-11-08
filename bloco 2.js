
//Função declarada

ehMaiorDeIdade(18)

function ehMaiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('true')
        return true  
    }

    else {
        console.log('false')       
        return false 
    }
}

////////////////////////////////////////////////////////////

// função dobro

function dobro(numero) {
    return console.log(numero*2)
}

dobro(10)

const dobroo = function(numero) {
    return console.log(numero*2)
}

dobroo(10)

const dobrooo = (numero) => console.log(numero*2)

dobrooo(10)

//////////////////////////////////////////////////////////////

// dobro variante

function dobro_variante(numero = 1) {
    return console.log(numero*2)
}

dobro_variante()

//////////////////////////////////////////////////////////////

//Reference Error


ehMaiorDeIdadeExpressao(18) 

const ehMaiorDeIdadeExpressao = function(idade) {
    if (idade >= 18) {
        console.log('true')
        return true  
    }

    else {
        console.log('false')       
        return false 
    }
}