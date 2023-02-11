const condition = true;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then((message) => {
    console.log(message + " at message1");
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message) => {
    console.log(message + " at message2");
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message) => {
    console.log(message + " at message3");
  })
  .catch((error) => {
    console.log(error);
  });
