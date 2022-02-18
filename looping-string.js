//for(**expressão inicial**; **expressão condicional**; **incremento**){ //instruções }

/**
 * verificar a primeira letra
 * descobrir o tamanho da palavra
 * substituir alguma letra da palavra
 */


// Percorrer uma string e adicionar cada letra em um array

/**
 * LER
 * ENTENDER
 * INTERPRETAR
 * 
 *  1. Criar uma função que recebe um parametro
 *  2. Pegar cada caracter -> looping com o tamanho total da palavra
 *  3. Adicionar cada caracter no array -> Acessar cada posição i da palavra e adiciona no push
 *  4. Criar a variavel de array antes do for 
 */


function arrayDeCaracteres(palavra){
    const arrCaracteres = [];
    
    console.log(palavra.length);

    let metade = palavra.length / 2;

    for(let i = 0; i < palavra.length; i++){
        //arrCaracteres[i] = palavra[i];
        arrCaracteres.push(palavra[i]);
    }

    console.log(arrCaracteres);
    return arrCaracteres;
}

/**
 * .push
 * nomeArray[i] = 'informação'
 */

arrayDeCaracteres('Batata');

let texto = 'banana';

//arrayDeCaracteres(texto);

let frase = 'Frase pra contar o tamanho';

let tamanhoPalavra = texto.length;

console.log(tamanhoPalavra);
console.log(frase.length);


//Verificar se a primeira letra da palavra é A

//regex

//Verificar se a palavra está começando com um caracter especifico

function verificaPrimeiraLetra(palavra){
    if(palavra[0] === 'A' || palavra[0] === 'a'){
        //console.log(true);
        let novaPalavra = palavra + '#';

        return novaPalavra;

    }else {
        //console.log(false);
        return false;
    }
}

//Verificar quantas vezes existe a letra A ou a na palavra

/**
 * 1. Criar função que recebe um parametro
 * 2. Fazer um looping com o tamanho da palavra
 * 3. Verificar se tem letra A ou a na posição especifica
 * 4. Somar +1 em uma variavel contadora
 * 5. Retornar o valor total
 * 6. Declarar a variavel contadora fora do looping
 */


function contaLetras(palavra){
    let contadora = 0;

    for(let i = 0; i < palavra.length; i++){
        console.log(palavra[i]);
        if(palavra[i] === 'A' || palavra[i] === 'a'){
            contadora += 1; //contadora = contadora + 1
            console.log(i); //posição em a letra apareceu
            
        }
    }

    return contadora;
}









//Faça um algoritmo que receba uma frase e adicione as de comprimento par em um array

/**
 * 1. Criar função que um parametro
 * 
 */


/**
 * A !== a
 * a !== A
 * Maiusculo é diferente de minusculo
 */