const rectangle = {
    x: 10,
    y: 2,
    calculateArea() {
        return this.x * this.y;
    }
};
console.log(rectangle.calculateArea());


const rectangle1 = {
    set a(a) {
       if (a > 0) {
           this._a = a;
       }else{
           console.log("Invalid value for a");
       }
    },
    set b(b) {
        if (b > 0){
            this._b = b;
        }else{
            console.log("Invalid value for b");
        }
    },
    get area() {
        return this._a * this._b;
    }
};
rectangle1.a = 10;
rectangle1.b = 5;
console.log(rectangle1.area);