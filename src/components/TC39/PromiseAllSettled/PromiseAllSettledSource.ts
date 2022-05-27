const getGoodPromise = () => Promise.resolve("good promise");
const getBadPromise = () => Promise.reject("bad promise");

const allGood = () => [getGoodPromise(), getGoodPromise(), getGoodPromise()];
const someGood = () => [getBadPromise(), getGoodPromise(), getBadPromise()];
const allBad = () => [getBadPromise(), getBadPromise(), getBadPromise()];

export const getPromiseAllSettledExample = async () => {
  const results = [];
  [allGood, someGood, allBad].forEach(async (p) => {
    const promiseArray = p();
    results.push(await Promise.allSettled(promiseArray));
  });
  return results;
};
