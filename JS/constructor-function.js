//
//
//
//
//

function Kdt(name, age) {
  this.name = name;
  this.age = age;
  this.showNameAge = function () {
    console.log(`이름은 : ${this.name} , 나이는 ${this.age}`);
  };
}

let p1 = new Kdt("이찬호", 25);
let p2 = new Kdt("공공공", 24);

p1.showNameAge();
p2.showNameAge();
