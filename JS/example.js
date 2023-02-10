const obj = {
  name: "이찬호",
  age: 17,
  isMarried: false,
  getAge() {
    this.age--;
    return this.age;
  },
};
console.log(obj.getAge());
