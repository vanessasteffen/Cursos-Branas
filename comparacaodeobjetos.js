const book1 =
    {
        title: 'Clean Code',
        author: 'Robert Martin',
        pages: 464
    };

const book2 =
    {
        title: 'Clean Code',
        author: 'Robert Martin',
        pages: 464
    };
//console.log(book1 == book2);
//console.log(book1 === book2);

let equal = true;
for (let key in book1){
    if (book1[key] !== book2[key])
        equal = false;
}
for (let key in book2){
    if (book1[key] !== book2[key])
        equal =  false;
}

console.log(equal);
