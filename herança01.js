// A HERANÇA É REALIZADA ENTRE OBJETOS E NAO classes.

const functionalLanguage = Object.create({});
    functionalLanguage.paradigm = 'Functional';

const scheme = Object.create(functionalLanguage);
    scheme.name = 'Scheme';
    scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
    javascript.name = 'Javascript';
    javascript.year = 1995;
    javascript.paradigm = '00';//orientaçao a objeto

for (let key in javascript){
    console.log(key, javascript [key]);
}
console.log(javascript);
console.log(javascript.paradigm);
console.log(javascript.__proto__.paradigm);
console.log(Object.getPrototypeOf(javascript));

//console.log(functionalLanguage);
//console.log(scheme);
//console.log(javascript);
