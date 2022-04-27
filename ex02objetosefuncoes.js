//meio de buscar os dados por meio do key

const key1 = 'title';
const key2 = 'author';
const key3 = 'pages';
const key4 = 'language';
const key5 = 'available';

const book={};
book[key1] = 'Clean Code';
book[key2] = 'Robert Martin';
book[key3] = 464;
book[key4] = 'English';
book[key5] = true;

console.log(book);


//forma de buscar os dados por meio de parametros sobre book = book.title.
/*const book={};
book.title = 'Clean Code';
book.author = 'Robert Martin';
book.pages = 464;
book.language = 'English';
book.available = true;

console.log(book);
 */