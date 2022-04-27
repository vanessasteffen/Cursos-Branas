

let regExp = /john@gmail.com/;
let result = regExp.exec('E-mail: john@gmail.com');
console.log(result[0]);
console.log(result.index);
console.log(result.input);



let regexp = /^\w+@\w+\.\w{3}$/;
let res = regexp.exec("mary@hotmail.com");
console.log(res[0]);
console.log(res.index);
console.log(res.input);

//grupo de captura
let reg = /^(\w+)@\w+(\.\w{2,3})+$/;
let re = reg.exec('mary@gmail.com');
console.log(re[1]);
console.log(re.index);
console.log(re.input);