//funcao preventExtensions

const javascript = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};
//Object.preventExtensions(javascript);
//Object.seal(javascript);
Object.freeze(javascript);

javascript.name = 'ECMAScript';
javascript.author = 'Brendan Eich';
delete javascript.year;

console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));

//Object.setPrototypeOf(javascript, {});//nao sera possivel a duplicação pois é usada freeze, seal e preventExtension, no caaso
//ver se as variaveis tem algo em comum