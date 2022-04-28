//DEFINEPROPERTY

const javascript ={};
Object.defineProperty(javascript, 'name', {
    enumerable: true, //passa a exibir as propriedades que estao ocultas
    value: 'JavaScript',
    writable: true, //ira permitir renomear o atributo senão nao
    configurable: true //somente a funcao delete nao deleta os dados, precisa a atribuicao
    //configurable em true para deixar deletar
});
javascript.name = 'ECMAScript';//renomeia o atributo name
delete javascript.name;//deleta a propriedade de name


console.log(javascript.name);
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
