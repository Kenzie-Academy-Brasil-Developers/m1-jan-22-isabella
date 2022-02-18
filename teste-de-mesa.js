/** TESTE DE MESA
 * 
 * 1. LER e ENTENDER a função
 * 2. IDENTIFICAR as variaveis
 * 3. INTERPRETAR as linhas de instrução da função  
 */

//somaPares([1,2,3,4]);

function somaPares(arrNumbers){
    let soma = 0; 

    for(let i = 0; i < arrNumbers.length; i++){
        if(arrNumbers[i] % 2 === 0){
            soma += arrNumbers[i];
        }
    }

    return soma;
}


function retornaLetras(palavra){
    const arrLetras = [];

    for(let i = 0; i < palavra.length; i++){
        arrLetras.push(palavra[i]);
    }

    return arrLetras;
}

function verificaImpar(number){
    if(number % 2 !== 0){
        return true;
    }else{
        return false;
    }
}