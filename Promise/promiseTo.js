function func(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      resolve(`Success ${value}`);
    } else {
      reject(`Fail${value}`);
    }
  });
}

function start0() {
  console.log("start");
  setTimeout(() => {
    const promise1 = func(30);
    promise1
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });

    const promise2 = func(5);
    promise2
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1000);
}

start0();
