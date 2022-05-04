
const numbers = new Array(1,2,3);
console.log(numbers);

const n = new Array(10);
console.log(n);//aqui aparecera um array com 10 posiçoes

//propriedade length indica a quantidade de elementos que existem dentro do array
const languages = [];
languages[0] = 'Python';
languages[1] = 'C';
languages[2] = 'Java';
console.log(languages);
console.log(languages.length); //ira mostrar a quantidade de itens dentro do array
delete languages[1];//ira deletar o valor mas não a possiçao
console.log(languages);
console.log(languages.length);
