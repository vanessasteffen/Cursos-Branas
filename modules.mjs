import{PI, pow} from './modules1.mjs';
class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    get area(){
        return PI * Math.pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);