//funcao weakset

const ws1 = new WeakSet();
const obj1 = {};
const  obj2 = {};

//funcao add
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);

//funcao delete
console.log(ws1.delete(obj2));

//funcao has
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));

