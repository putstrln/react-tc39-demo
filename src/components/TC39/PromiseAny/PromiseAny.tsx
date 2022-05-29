import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../Feature/Feature";
import { Notes } from "../../Notes/Notes";
import { Source } from "../../Source/Source";
import { PromiseCombinatorLinks } from "../Promise/Promise";
import { getPromiseAnyExample } from "./PromiseAnySource";
import source from "./PromiseAnySource?source";

export const PromiseAny = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getPromiseAnyExample();
      setResults(results);
      console.debug(results);
    };
    getResults();
  }, []);
  return (
    <Feature
      name={PromiseAny.name}
      refUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any"
    >
      <ul>
        <li>One of promise combinators</li>
        <li>
          Returns the first fulfilled promise without waiting for others, unlike
          Promise.race which returns the first settled promise (either fulfilled
          or rejected)
        </li>
        <li>
          If all are rejected, return{" "}
          <strong>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError">
              AggregateError
            </a>
          </strong>{" "}
          that includes all rejected errors
        </li>
      </ul>
      <Source>{source}</Source>
      <br></br>
      <h2>Results</h2>
      {results.length && (
        <ul>
          <li>{results[0]}</li>
          <li>{results[1]}</li>
          <li>AggregateError.errors: {results[2].errors.join(", ")}</li>
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
