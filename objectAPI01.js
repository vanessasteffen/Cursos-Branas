

const javascript ={
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};
console.log(Object.is(javascript, javascript));//faz a comparação, neste caso ele nao tem nada para comparar
//mas se tivesse dois tipos de constante e os nomes fosse parecidos deve retornar false, pois não sao iguais
console.log(Object.values(javascript));//mostrara somente os valores das variaveis
console.log(Object.entries(javascript));//ira mostrar os itens 2 em 2