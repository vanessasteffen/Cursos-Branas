

class Square { //class declarecion
    constructor(side) { //recebe o valoor de square 4
        this.side = side; //retorna o valor de side que foi repassado por square
    }
    calculateArea(){
        return Math.pow(this.side, 2); //elevado a potencia 4 elevado na 2
    }


    toString(){
        return `side: ${this.side}`;
    }
}
const square = new Square(4); //tem o valor de 4
console.log(square.toString());
console.log(square.calculateArea());