function run() {
  console.log("sub task : run after 3 sec");
}

function go() {
  console.log("start");
  setTimeout(run, 3000);
  console.log("end");
}
go();

//setTimeout -> I/O 작업   
