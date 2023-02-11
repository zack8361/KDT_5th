/**
 * 중첩된 callback 패턴을 Promise로 변환하는 예제.
 */

const func1 = () => {
  console.log("시작");
  setTimeout(() => {
    console.log("1 초");
    setTimeout(() => {
      console.log("2 초");
      setTimeout(() => {
        console.log("3초");
      }, 1000);
    }, 1000);
  }, 1000);
};

func1();
