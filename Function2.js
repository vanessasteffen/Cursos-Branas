const sum = function (a,b){
    return a + b;
}

const subtract = function (a, b){
    return a - b;
};

const calculator = function (fn){
    return function (a,b){
    return fn(a,b);
    }
}

console.log(calculator(sum)(2,2));
console.log(calculator(subtract)(2,2));


//console.log(sum(2,2)); forma simples de calcular
//console.log(subtract(2,2)) forma simples de diminuir