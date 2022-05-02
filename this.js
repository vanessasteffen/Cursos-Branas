const rectangle = {
    x: 10,
    y: 2,
    calculateArea() {
        return this.x * this.y;//sem o this ira retornar um erro, pois ele nao sabe daonde esta vindo esses valores
    }//e com o this ele ira puxar de rectangle
};
console.log(rectangle.calculateArea());