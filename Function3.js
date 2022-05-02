const sum = function (a,b){
    return a + b;
}
console.log(sum(2,2));
console.log(sum(5));//o resultado ira ser NaN pois é somente 1 numero e assim não funciona
console.log(sum(1,2,3));

//outro exemplo que as variaveis já sao iniciadas

const sum1 = function (c =1, d=1){
    return c + d;
};
console.log(sum1(2,2));
console.log(sum1(5));//aqui o D recebera o numero 1
console.log(sum1());//aqui como nenhuma variavel foi iniciada ira receber 1 para cada
