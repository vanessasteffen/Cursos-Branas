

const charsets = new Set();
charsets.add('ASCII');
charsets.add('ISO-8859-1');
charsets.add('UTF-8');

//funcao delete
console.log(charsets.delete('ISO-8859-1'));
console.log(charsets.has('ISO-8859-1'));

//FUNCAO FOREACH
charsets.forEach(function (charset){
    console.log(charset);
});
console.log(charsets);
//console.log(Array.from(charsets)); //retorna o vetor como esta escrito
//console.log(charsets.size);

//funcao HAS
console.log(charsets.has('ASCII'));
console.log(charsets.has('CP-1252'));