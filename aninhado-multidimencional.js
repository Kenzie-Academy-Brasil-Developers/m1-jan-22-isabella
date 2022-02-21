//FOR ANINHADO
/**
 * looping de fora{
 *  o incremento de fora só acontece quando termina o de dentro
    *  looping de dentro{
    *  vai acontecer até que a condicional de FALSE
    * }
 * }
 * 
 */

for(let i = 0; i < 3; i++){
    //console.log("Looping de fora - i: " + i);
    for(let j = 0; j < 5; j++){
        //console.log("j: " + j);
    }
}

//string, number, boolean, array, objeto

//ARRAY MULTIDIMENCIONAL

const arraySozinho = [];

const arrayComunidade = [[1,2],[3,4],[5,6]];
//console.log(arrayComunidade);

let numeros = [];

for(let i = 0; i < 3; i++){
    numeros.push([]);

    //numeros = [[],[],[]]
    for(let j = 0; j < 5; j++){
        numeros[i].push(j + 1);

        //i = 0; numeros = [[]]
        //numeros[0] = 1
        //numeros = [[1,2,3,4]]
    }
}

console.table(numeros);

//eixo da vertical => array grande/for de fora
//eixo da horizontal => arrays de dentro/for de dentro