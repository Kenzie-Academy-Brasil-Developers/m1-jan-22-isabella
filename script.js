const data = [
    {
        titulo: 'Como utilizar CSS da melhor forma em 2021',
        descricao: 'Transforme-se em especialista em UI Design e dê um Boost na sua carreira',
        img: './img/isa.jpg',
        tags: ['Diversão', 'Curiosidades']
    },
    {
        titulo: 'Como utilizar CSS da melhor forma em 2021',
        descricao: 'Transforme-se em especialista em UI Design e dê um Boost na sua carreira',
        img: './img/andre.jpg',
        tags: ['Diversão', 'News']
    },
    {
        titulo: 'Como utilizar CSS da melhor forma em 2021',
        descricao: 'Transforme-se em especialista em UI Design e dê um Boost na sua carreira',
        img: './img/nicole.jpg',
        tags: ['Diversão', 'Curiosidades', 'Programação', 'Futuro']
    },
    {
        titulo: 'Como utilizar CSS da melhor forma em 2021',
        descricao: 'Transforme-se em especialista em UI Design e dê um Boost na sua carreira',
        img: './img/rafa.jpg',
        tags: ['Diversão', 'Curiosidades']
    }
];

function createPost(arrayPosts){
    const list = document.querySelector('.post-list');
    list.innerHTML = '';

    for(let i = 0; i < arrayPosts.length; i++){
        const li = document.createElement('li'); //Criar li
        li.classList.add('post-item')

        const img = document.createElement('img'); //Criar img
        img.src = arrayPosts[i].img;

        const h2 = document.createElement('h2'); //Criar h2
        h2.innerText = arrayPosts[i].titulo;

        const descricao = document.createElement('p'); //Criar descrição
        descricao.innerText = arrayPosts[i].descricao;
    
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(descricao);

        let arrayTags = arrayPosts[i].tags; //Atribui o array de tags a variavel
        for(let j=0; j< arrayTags.length;j++){ //Loop pelo array tags
            const tag = document.createElement('span'); //Criei uma tag
            tag.innerText = arrayTags[j]; // Inseri o texto do array na tag
            li.appendChild(tag); //Inseri a tag no li
        }

        list.appendChild(li);
    }
}

createPost(data);

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