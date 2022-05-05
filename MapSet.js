const timeUnits = new Map();
timeUnits.set('second', 1);
timeUnits.set('minute', 60);
timeUnits.set('hour', 3600);

//funcao forEach
//timeUnits.forEach(function (value, key){
  //  console.log(key, value); //ira imprimir segundos e depois o numero
    //});
//console.log(timeUnits);
//console.log(timeUnits.size);

//funçao has
console.log(timeUnits.has('hour'));//ira retornar true ou false se existe na variavel
console.log(timeUnits.has('day'));

//funcao GET
console.log(timeUnits.get('second'));//retornara o valor
console.log(timeUnits.get('minute'));
console.log(timeUnits.get('hour'));

//funcao DELETE
console.log(timeUnits.delete('hour'));
console.log(timeUnits);

//funcao clear
console.log(timeUnits.size);
timeUnits.clear();