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
    const textItem = document.createElement("label");
    const checkItem = document.createElement("input");
    const removeItem = document.createElement("button");
    removeItem.innerText = "x";
    removeItem.classList.add('removeItem');

    //defino o type do input
    checkItem.type = "checkbox";

    //pega somente o texto escrito no input
    const nameValue = valueList.value;
    textItem.innerText = nameValue;

    //adiciona filhos da li
    itemList.appendChild(checkItem);
    itemList.appendChild(textItem);
    itemList.appendChild(removeItem);

    //adiciona item na ul
    parentList.appendChild(itemList);

    //armazena item no array
    toDoList.push(nameValue);
}

//IDENTIFICA O ELEMENTO CLICADO
function identificaItem(event){
    const itemClick = event.target;

    // - Identificar o click na tag input
    if(itemClick.tagName === 'INPUT'){
        checkedItem(itemClick);
    }

    // - Identificar o click na tag button
    if(itemClick.tagName === 'BUTTON'){
        removeItem(itemClick);
    }
}

//FUNÇÃO QUE CHECKED NO ITEM DA LISTA => .checked-item
function checkedItem(input){
    input.parentNode.classList.toggle('checked-item');
}

//FUNÇÃO QUE EXCLUI O ITEM DA LISTA
function removeItem(button){
    const textButton = button.parentElement.children[1].textContent;
    /**let indexItem = 0;
    for (let i = 0; i< toDoList.length; i++){
        if(toDoList[i] === textButton){
            indexItem = i;
        }
    }
    */
    const indexItem = toDoList.indexOf(textButton);
    toDoList.splice(indexItem,1);

    button.parentElement.remove();

}

//CHAMANDO A FUNÇÃO
buttonAdd.addEventListener('click', newItem);

//Chama a função de identificação de item
parentList.addEventListener('click', identificaItem);