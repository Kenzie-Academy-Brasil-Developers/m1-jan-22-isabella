// Criar um novo array para armazenar meu resultado - OK
//Verificar o valor da tag que foi clicada - OK
// Se for Todos, executa a função com o array principal -OK
// Senão => filtrar - OK 
//Vou filtrar o array principal -OK
//Vou incrementar meu array - OK
//Vou chamar a função de criação recebendo meu novo array como parametro - Ok

function filterPosts(event){
    const newData = [];
    const item = event.target;
    const arrayItens = document.querySelectorAll('.item-nav');

    if(item.dataset.tag === 'Todos'){
        createPost(data);
    }else{
        for(let i=0; i<data.length; i++){
            if(data[i].tags.indexOf(item.dataset.tag) !== -1){
                newData.push(data[i]);
            }
        }
        createPost(newData); 
    }

    for(let i=0; i<arrayItens.length; i++){
        arrayItens[i].classList.remove('active');
    }
    item.classList.add('active');
}

function findPosts(){
    const inputValue = document.getElementById('inputFind');
    const newData = [];

    for (let i=0; i<data.length;i++){
        if(data[i].tags.indexOf(inputValue.value) !== -1){
            newData.push(data[i])
        }
    }
    createPost(newData);
}

const buttonBuscar = document.getElementById('btnFind');
buttonBuscar.addEventListener('click', findPosts);

const listItem = document.getElementById('listNav');
listItem.addEventListener('click', filterPosts)