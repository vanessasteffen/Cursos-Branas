calculateArea = function (fn) {
    return fn (Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.call(circle, Math.round));
console.log(calculateArea.apply(circle, [Math.ceil]));