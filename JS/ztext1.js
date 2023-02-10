let isAdult = true;
let VIP = true;
let isDrunken = true;
let moneyPay = true;

if (((isAdult || VIP) && isDrunken) || moneyPay) {
  console.log("통과");
}
