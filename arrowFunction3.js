//arrow function serve para reduzir o código 
//ffuncao usando arrow para simplificar o codigo
const person = {
    name: 'James Gosling',
    city: 'Alberta',
    year: 1955,
    getAge: () => {
        return (new Date().getFullYear() - this.year);
    }
};
console.log(person);
console.log(person.getAge());