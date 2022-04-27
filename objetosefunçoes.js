
const title = 'Clean Code';
const author = 'Robert Martin';
const pages = 464;
const language = 'English';
const available = true;

//quando criada uma constante com o mesmo nome pode ser usada dessa forma
//criando a variavel em cima e somente chamando ela dentro do que quer.
const book = {
    title,
    author,
    pages,
    language,
    available
};
console.log(book);
