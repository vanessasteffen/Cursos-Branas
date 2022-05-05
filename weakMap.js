//funcao set
const wn1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wn1.set(obj1, 'obj1');
wn1.set(obj2, 'obj2');
console.log(wn1);

//funcao delete
console.log(wn1.delete(obj1));
console.log(wn1.delete(obj2));
console.log(wn1);

//funcao has retorna true ou false
console.log(wn1.has(obj1));
console.log(wn1.has(obj2));

//funcao get
console.log(wn1.get(obj1));
console.log(wn1.get(obj2));