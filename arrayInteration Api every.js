
//funcao every

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
const result = frameworks.every(function (framework){
    return framework.name.includes ('js');//ira retornar  true ou false, neste caso sim pois todas tem JS
});
console.log(result);

