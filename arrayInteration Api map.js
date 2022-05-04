
//funcao maps

const frameworks = [
    {
        name:'Angular.js',
        contributors: 1548
    },
    {
        name: 'Ember.js',
        contributors: 746
    },
    {
        name: 'Vue.js',
        contributors: 240
    }
];
const result = frameworks.map(function (framework){
    return framework.name;//ira retornar  somente os nomes das linguagens
});
console.log(result);

