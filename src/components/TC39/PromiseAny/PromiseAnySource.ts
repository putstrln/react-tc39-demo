const getGoodPromise = () => Promise.resolve("good promise");
const getBadPromise = () => Promise.reject("bad promise");

const allGood = () => [getGoodPromise(), getGoodPromise(), getGoodPromise()];
const someGood = () => [getBadPromise(), getGoodPromise(), getBadPromise()];
const allBad = () => [getBadPromise(), getBadPromise(), getBadPromise()];

export const getAnyPromiseExample = async () => {
  const results = [];
  [allGood, someGood, allBad].forEach(async (p) => {
    try {
      // returns the first fulfilled promise
      const promiseArray = p();
      results.push(await Promise.any(promiseArray));
    } catch (e) {
      // returns AggregateError if ALL are rejected
      results.push(e);
    }
  });
  return results;
};
