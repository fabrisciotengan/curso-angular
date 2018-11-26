var minhaVar = 'minha Variavel';

function minhaFunc(x, y){
    return x + y;
}

//EcmaScript 6 ou ES 2015 - es6-features.org
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];

//tradicional
numeros.map(function(valor) {
    return valor * 2;
}); 

numeros.map(valor => valor * 2); //ES 2015

class Matematica {
    soma(x, y) {
        return x + y;
    }
}