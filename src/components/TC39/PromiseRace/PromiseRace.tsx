import source from "./PromiseRaceSource?source";
import { Feature } from "../../Feature/Feature";
import { useState, useEffect } from "react";
import { Source } from "../../Source/Source";
import { Notes } from "../../Notes/Notes";
import { getPromiseRaceExample } from "./PromiseRaceSource";
import { Link } from "react-router-dom";
import { PromiseCombinatorLinks } from "../Promise/Promise";

export const PromiseRace = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getPromiseRaceExample();
      setResults(results);
      console.debug(results);
    };
    getResults();
  }, []);
  return (
    <Feature
      name={PromiseRace.name}
      refUrl={
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"
      }
    >
      <ul>
        <li>One of promise combinators</li>
        <li>
          Returns either the value or the error of the first promise that
          settles, unlike Promise.allSettled that returns the array of values or
          errors and waits until all promises are settled
        </li>
        <li>
          Can be used to timeout an async operation with setTimeout promise,
        </li>
        <li>Can be blocked forever if the promise array is empty</li>
      </ul>
      <Source>{source}</Source>
      <br></br>
      <h2>Results</h2>
      <ul>
        {results.map((r, i) => (
          <li key={i}>{JSON.stringify(r, null, 4)}</li>
        ))}
      </ul>
      <Notes>
        <li>
          <a
            href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md"
            target="_blank"
            rel="noreferrer"
          >
            Promise states and fates
          </a>
        </li>
        <PromiseCombinatorLinks />
      </Notes>
    </Feature>
  );
};
