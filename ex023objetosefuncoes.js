

const book1 = {
    title: 'Clean Code',
    author: 'Robert Martin',
    pages: 464,
    language: 'English',
    available: true
};
//console.log(book.title);

const book2 = {}
for (let key in book1){
    book2[key] = book1[key];
}
console.log( book2);

console.log(book1);
