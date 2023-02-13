// let sayHello = () => {
//   console.log(`Hello, I'm ${this.name}`);
// };
// let sayHallo = function () {
//   console.log(`Hello, I'm ${this.name}`);
// };

// const boy = {
//   name: "mike",
//   sayHello,
// };
// const girl = {
//   name: "jane",
//   sayHallo,
// };

// boy.sayHello();
// girl.sayHallo();

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return super.getArea();
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius * this.radius;
  }
}

const numShape = new Shape(10, 20);
const numRec = new Rectangle(20, 30);
const numTri = new Triangle(10, 20);
const numCircle = new Circle(30, 40, 10);

/*---------------------출력부---------------------------*/

console.log(`shape 의 넓이 : ${numShape.getArea()}`);
console.log(`원의 넓이 : ${numCircle.getArea()}`);
console.log(`사각형의 넓이 : ${numRec.getArea()}`);
console.log(`삼각형의 넓이 : ${numTri.getArea()}`);
