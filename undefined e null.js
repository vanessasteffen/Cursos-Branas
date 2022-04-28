//null é a ausencia de valores na variavel
//e undefined é que a variavel nao existe

const book = {
    title: 'Clean Code',
    author: 'Robert Martin',
    pages: 464,
    language: 'English',
    available: true
};
//book.available = undefined;
delete book.available;
// ou assim delete book['available'];
console.log(book);
console.log('available' in book);

//console.log(book.publisher); //ira retornar undefined

//console.log('title' in book);
//console.log('author' in book);
//console.log('pages' in book);
//console.log('language' in book);
//console.log('available' in book);
//console.log('publisher' in book);//ira retornar falso