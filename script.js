/* DOM - DOCUMENT OBJECT MODEL (MODELO DE DOCUMENTO DE OBJETO) */

/**
 * ELEMENT = todas as tags html
 * ATTRIBUTE = class e id
 * TEXT = texto contido dentro da tag, #texto mesmo# EX: <p>Texto contido na tag</p>
 */

//SELETORES DE ELEMENTOS - ele precisa de uma variavel que guarde o valor que ele pegou (get)
/**
 * getElementById() - seleciono pelo ID atribuido ao elemento (SEMPRE ÚNICO)
 * getElementsByTagName() - seleciona o elementos pela tag
 * getElementsByClassName() - seleciono pela CLASS atribuida ao elemento (PODE SE REPETIR NO ARQUIVO)
 * querySelector('.nomeDaClass') - seleciona os elementos pelo seletor usado no CSS
 * EX CSS:
 * .nomeDaClass
 * #nomeID
 * 
 */

let pegaElementoId = document.getElementById('entradaTexto');
console.log(pegaElementoId);

const pegaElementoTag = document.getElementsByTagName('button');
console.log(pegaElementoTag);

const pegaElementoClass = document.getElementsByClassName('enviar');
console.log(pegaElementoClass);

const pegaElementoQuerySelector = document.querySelectorAll('.enviar');
console.log(pegaElementoQuerySelector);



//MANIPULADORES DE ELEMENTOS
/**
 *  createElement() - criando o elemento html  
 *  appendChild() - interligar o elemento pai falando quem será o filho
 *  textContent - adicionando um texto 
 *  innerText - adicionando um texto
 *  innerHTML - adicionando um texto com uma tag html
 */




