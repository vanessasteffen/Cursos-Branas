

const book = {
    title: 'Clean Code',
    author: 'Robert Martin',
    pages: 464,
    language: 'English',
    available: true
};
//console.log(book.title);

for (let key in book){
    console.log(book[key]);
}