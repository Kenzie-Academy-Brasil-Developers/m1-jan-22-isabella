/**
 * Variaveis (let, const)
 * condicional 
 * introdução a escopo 
 */

/**
 * eu pego a lampada
 * eu tiro da caixa
 * eu pego uma escada...
 * 
 */

function isEven(num) {
    // num = 16
    if(num % 2 === 0){
        return true;
    }else {
        return false;
    }

        
}


function concatStringIsEven(){
    let numero = 15;
    let resultIsEven = isEven(numero);
    let string = '';

    if (resultIsEven === true){
         string = 'Nicholas'
    } else{
        string =  'Céu'
    }  
    return string;
}

concatStringIsEven()