const condition = true; //true 면 resolve, false 면 reject

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then((message) => {
    console.log("성공");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("default");
  });
