/**
 * LER
 * ENTENDER
 * INTERPRETAR 
 */

/**
 * ALGORITMO
 * 
 * PASSO A PASSO A SER SEGUIDO PRA CHEGAR NA RESOLUÇÃO FINAL
 * 
 * - RECEITA DE BOLO - Qual o problema? Não ter bolo 
 * 
 * Bolo de Chocolate
 * 2 xícaras de farinha de trigo
 * 1 xícara de açucar
 * 1 xícara de óleo
 * 3 ovos
 * 1 xícara de cacau em pó
 * 1 c de chá de fermento
 * 1 xícara de água ou leite
 * 
 * PASSO A PASSO DE INSTRUÇÕES
 * 0. Verificar se tenho todos os ingredientes
 * 0.1. Ligar o forno em 180C para pré aquecer
 * 0.2. Untar uma forma com óleo + farinha 
 * 
 * 1. Misturar os ingredientes secos sem o fermento
 * 2. Bater no liquidificador os ovos com o óleo e o liquidos (leite ou água)
 * 3. Com uma espatula juntar os secos com a mistura do liquificador
 * 4. Se a mistura já estiver homogenia, acrescentar o fermento e misturar
 * 5. Colocar a mistura em uma forma e assar
 */


//Escreva uma função que receba um array de palavras e verifique quais palavras possuem valor par
// Retornar todas que forem par
/**
 * 1. Criar um função que recebe 1 parametro => function Nomedafuncao(parametro)
 * 2. Percorrer o parametro e contar os caracteres contidos em cada palavra - looping em cima do parametro => FOR
 * 3. Verificar se a quantidade é par - condicional => IF
 * 4. Retornar todas as palavras que forem par - return todasAsPalavrasPares
 */

console.log("Texto dentro do console.log");

//VARIAVEL
/**
 * TIPO DE VARIAVEL
 * 
 * STRING => '2' OU ""
 * NUMBER => 2
 * BOOLEAN => TRUE OR FALSE | VERDADEIRO OU FALSO
 * 
 * 
 * ARRAY => CONJUNTO DE STRINGS OU NUMBERS
 * FUNÇÃO => CONJUNTO DE INSTRUÇÕES
 * OBJETO
 **/

// LET 
// CONST 

//CASE SENSITIVE = fruta Fruta frutA FRUTA

let fruta = 'Banana';
let numero = 15;
let condicao = true;


/**
 * COMPARADORES
 * OPERADORES MATEMÁTICOS
 * CONDICIONAIS
 */

// = ATRIBUI VALOR
// == COMPARA SE SÃO IGUAIS => '2' == 2
// === IDENTICO, COMPARA VALORES E TIPO => '2' === 2 -> FALSE

/**
 * 
 * && -> AND -> ambas as condições precisam retornar TRUE/VERDADEIRO
 *  
 * || -> OR -> pelo menos uma condicional precisa ser verdadeira TRUE/VERDEIRO
 * 
 * ! -> NOT
 * 
 * !== -> DIFERENTE
 * 
 * > - maior que
 * >= - maior ou igual
 * < - menor que
 * <= - menor ou igual
 * 
 */
 
/**
 *  + = soma
 *  - = subtração
 *  * = multiplicação
 *  / = divisão
 *  % (mod/módulo) = resto da divisão
 *  15 % 2 === 0 -> verifico se é par
 * 
 * ++ = incremento (3++ = 3+1)
 *  -- = descremento (2-- = 2-1)
 *  
 */

if(15 % 2 === 0){
    console.log('numero par');
}

let valor;

if('Banana' === 'Banana'){
    valor = 12 * 0.5;
    console.log(valor);

    if(valor === 6){
        console.log('Pode comprar');
    }else{
        console.log('compre menos bananas');
    }
} else{
    console.log('compre melancia');
}
if(valor % 2 === 0){
    console.log(`par porque o resto é 0 = ${valor}`);
    console.log('par porque o resto é 0 = ' + valor);

}

/*if(){

} else if(){

} else if(){

}else{

}*/

if(2 > 4){
    console.log('true');
}else{
    console.log('false');
}

/*

*/