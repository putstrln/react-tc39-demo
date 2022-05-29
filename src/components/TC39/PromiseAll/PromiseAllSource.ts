const getGoodPromise = (i) => Promise.resolve(`good promise ${i}`);
const getBadPromise = (i) => Promise.reject(`bad promise ${i}`);

const allGood = () => [getGoodPromise(1), getGoodPromise(2), getGoodPromise(3)];
const someGood = () => [getBadPromise(1), getGoodPromise(1), getBadPromise(2)];
const allBad = () => [getBadPromise(1), getBadPromise(2), getBadPromise(3)];

export const getPromiseAllExample = async () => {
  const results = [];
  [allGood, someGood, allBad].forEach(async (p) => {
    try {
      // returns an array of resolved values if ALL are fulfilled
      const promiseArray = p();
      results.push(await Promise.all(promiseArray));
    } catch (e) {
      // returns the error of first rejected
      results.push(e);
    }
  });
  return results;
};
