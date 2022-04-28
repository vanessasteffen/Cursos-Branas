// A HERANÇA É REALIZADA ENTRE OBJETOS E NAO classes.

const functionalLanguage = {
    paradigm: 'Functional'
}

const scheme = {
    name: 'Scheme',
    year: 1975,
    //__proto__: functionalLanguage
};
Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = {
    name: 'Javascript',
    year: 1995,
    //__proto__: functionalLanguage
};
Object.setPrototypeOf(javascript, functionalLanguage);

for (let key in scheme){
    console.log(key, scheme.hasOwnProperty(key));
}

//console.log(functionalLanguage);
//console.log(scheme);
//console.log(javascript);
