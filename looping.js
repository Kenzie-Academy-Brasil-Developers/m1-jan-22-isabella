//LOOPING **FOR**

//PARA alguma coisa, COM ESSAS REGRINHAS vou executar essas INSTRUÇÕES
//for(**expressão inicial**; **expressão condicional**; **incremento**){
    //conjunto de instruções
    //uma ou mais 
//}

/**ENQUANTO a expressão for VERDADEIRA vou executar essas INSTRUÇÕES
 * while(**expressão condicional**){
 *  //conjunto de instruções
 *  //uma ou mais
 * 
 *  **incremento**
 * }
 */

/** FAÇA essas linhas de INSTRUÇÕES, ENQUANTO a expressão for VERDADEIRA
 * do{
 *  //conjunto de instruções
 *  //uma ou mais
 * 
 *  **incremento**
 * } while(**expressão condicional**);
 */


//INCREMENTO
/**
 * i++ => i + 1
 * 
 * i+1 => 2 + 1 = 3
 * i++ => 3 + 1 = 4 
 */

//(**expressão inicial**; **expressão condicional**; **incremento**)
//Imprimir no console todos os numeros contidos entre 0 e 5
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i);
    }else{
        console.log('par');
    }
}




