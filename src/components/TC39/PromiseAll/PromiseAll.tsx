import source from "./PromiseAllSource?source";
import { Feature } from "../../Feature/Feature";
import { useState, useEffect } from "react";
import { Source } from "../../Source/Source";
import { Notes } from "../../Notes/Notes";
import { getPromiseAllExample } from "./PromiseAllSource";
import { Link } from "react-router-dom";
import { PromiseCombinatorLinks } from "../Promise/Promise";

export const PromiseAll = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getPromiseAllExample();
      setResults(results);
      console.debug(results);
    };
    getResults();
  }, []);
  return (
    <Feature
      name={PromiseAll.name}
      refUrl={
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
      }
    >
      <ul>
        <li>One of promise combinators</li>
        <li>
          Returns an array of resolved values when ALL promises are fulfilled,
          unlike Promise.any which resolves as soon as any promise is fulfilled
        </li>
        <li>
          Can be used to process and/or merge the results only when all
          operations succeed.
        </li>
      </ul>
      <Source>{source}</Source>
      <br></br>
      <h2>Results</h2>
      {results.length && (
        <ul>
          <li>{results[0].join(", ")}</li>
          <li>{results[1]}</li>
          <li>{results[2]}</li>
        </ul>
      )}
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
