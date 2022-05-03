//arrow function serve para reduzir o código 
//funcao normal
const person = {
    name: 'James Gosling',
    city: 'Alberta',
    year: 1955,
    getAge: function (){
        return (new Date().getFullYear() - this.year);
    }
};
console.log(person);
console.log(person.getAge());