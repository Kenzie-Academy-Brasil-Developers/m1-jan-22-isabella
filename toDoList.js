/**
 * Precisamos de um seletor PARENT que ficará fixo no HTML
 * pra que o DOM entenda onde os filhos dinamicos serão criados
 * 
 */

/****** LISTA DE TAREFAS  ********/
/**
 * 1. Criar a lista de tarefas de forma dinamica - Função de criar item
 * 2. Armazenar os itens da lista - armazenar em um array
 * 3. Checkar os itens da lista - Função de checkar item
 * 4. Excluir os itens da lista - Função de excluir item
 */

const toDoList = [];
const parentList = document.getElementById('parentList');
const buttonAdd = document.getElementById('insertItem');

//FUNÇÃO QUE CRIA O ITEM DA LISTA
function newItem(){
    //texto inserido no input
    const valueList = document.getElementById('valueList');

    //crio os elementos html
    const itemList = document.createElement("li");
    const textItem = document.createElement("span");
    const checkItem = document.createElement("input");
    //defino o type do input
    checkItem.type = "checkbox";

    //pega somente o texto escrito no input
    const nameValue = valueList.value;
    textItem.innerText = nameValue;

    //adiciona filhos da li
    itemList.appendChild(textItem);
    itemList.appendChild(checkItem);

    //adiciona item na ul
    parentList.appendChild(itemList);

    //armazena item no array
    toDoList.push(nameValue);
}

//FUNÇÃO QUE CHECKED NO ITEM DA LISTA
//FUNÇÃO QUE EXCLUI O ITEM DA LISTA


//CHAMANDO A FUNÇÃO
buttonAdd.addEventListener('click', newItem);