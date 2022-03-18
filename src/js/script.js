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



