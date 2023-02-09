//
//
//
const candyMachine = {
  status: {
    name: "이찬호",
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const {
  getCandy,
  status: { count },
} = candyMachine;

console.log(candyMachine.getCandy());
console.log(count);
