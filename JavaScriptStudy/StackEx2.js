function run() {
  console.log("sub task: run");
}

function go() {
  console.log("start");
  run();
  console.log("end");
}
go();

// 쌓이는 순서 : go > run
// pop과 동시에 출력되는 순서 : start > run > end
