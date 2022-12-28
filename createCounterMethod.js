/* #javascript #developer #js #br */

const makeCounter = () => {
    let count = 0;
    return () => {
      return count++;
    }
  }
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  console.log(counter1()); //0
  console.log(counter2()); //0
  console.log(counter2()); //1