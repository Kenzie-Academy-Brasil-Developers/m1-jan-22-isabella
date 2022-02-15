//ARRAYS => armazenar vários valores em uma única variavel 

let fruta1 = 'Banana';
let fruta2 = 'Manga';
let fruta3 = 'Morango';

const frutas = ['Banana', 'Manga', 'Morango'];

//indice = i => 0,1,2,3...

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

//nomeDoArray.length
console.log(frutas.length);
//3 => 0 1 2

//ADICIONO VALORES NO ARRAY NO FINAL
frutas.push('Melancia');

frutas[2] = 'Melão';

console.log(frutas);

////ADICIONO VALORES NO ARRAY NO COMEÇO
console.log(frutas);
frutas.unshift('Tomate');
console.log(frutas);

//EXCLUIR ULTIMO ELEMENTO
frutas.pop();

console.log(frutas);

//-------------------------------------------
const cores = [];

function nomeCores(cor){
    cores.push(cor);

    return cores;
}

const numbers = [];

function umNumero(numero){

    numbers.push(numero);

    return numbers;
}

console.log(numbers);

umNumero(2);
umNumero(3);
umNumero(5);

console.log(numbers);
//------------------------------------------
console.log(cores);

const arrayDiferente = ['string', 2, true, 'uma frase', 2548];
console.log(arrayDiferente);

const numeros = [1,2,3,4,5];

//NÃO FAZER ISSO, PORQUE PERCO O CONTROLE DE TIPAGEM DA VARIAVEL
let strings = ['palavra', 'palavra', 'palavra'];

console.log(strings);
strings = 'Se torna uma frase';
//----------------------------------------------------------------


//[o que estiver aqui dentro faz parte do array]
//[os indices são separado por ,]

//console.log(numeros[2]);

numeros.push(numeros[2]);
//console.log(numeros);

numeros[2] = 0;

//console.log(numeros);