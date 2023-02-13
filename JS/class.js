class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this.drive = () => {
      console.log(`차 종 : ${this.brand}`);
    };
  }
}

const hyundai = new Car("현대", "빨강");
const porsche = new Car("포르쉐", "파랑");
const bmw = new Car("비엠", "보라");
