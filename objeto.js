//DECLARAÇÃO DE VARIAVEL
//let ou const

let fruta = 'Melancia';
let idade = 27;
let acorada = true;

const arrNumeros = [];
const caneca = {};

//OBJETOS

const xicara = {
    tipo: 'café', //propriedade 1
    cor: 'transparente', //propriedade 2
    tamanho: '', //propriedade 3
    material: 'vidro', //propriedade 4
    formato: 'Arredondado', //propriedade 5
    cheia: false //propriedade 6
};

console.log(xicara.material);
console.log(xicara['material']);

//adicionando uma nova propriedade
xicara.limpa = false;
xicara.tamanho = 50;

//apagar o valor da chave
xicara.tipo = '';

//deleta a propriedade inteira
delete xicara.cor;

console.log(xicara.limpa);
console.log(xicara);

const pessoa = {
    primeiroNome: 'Isabella',
    ultimoNome: 'Bertini',
    idade: 27 + ' anos',
    qtdFilhos: 2,
    casada: true
}
console.log(pessoa);

const melancia = {
    fruta: true,
    quantidade: 12,
    valorUnitario: 3.25,
    dataEntrada: '22/02/2022',
    vencimento: 5
}

console.log(melancia.quantidade);
console.log(melancia);


//array de objetos
const frutas = [
    {
        nomeFruta: 'Melancia',
        quantidade: 10,
        valorUnitario: 3.25
    },
    {
        nomeFruta: 'Banana',
        quantidade: 32,
        valorUnitario: 0.55
    },
    {
        nomeFruta: 'Manga',
        quantidade: 12,
        valorUnitario: 2.15
    }
];

console.log(frutas);

for(let i = 0; i < frutas.length; i++){
    if(frutas[i].quantidade < 15){
        console.log(frutas[i].nomeFruta);
    }
}

/**
 * usuario
 * foto
 * data
 * descricao
 */