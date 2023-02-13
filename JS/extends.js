class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.brand} 의 ${this.color}색 자동차`);
  }
}

class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color); //부모것을 그대로 받아오겠다.
    this.fuel = fuel;
  }
  showFuel() {
    console.log(`자동차는 ${this.fuel}로 움직인다.`);
  }
}

const tesla = new ElecCar("tesla", "red", "electricity");
console.log(tesla.showFuel());
tesla.drive();
