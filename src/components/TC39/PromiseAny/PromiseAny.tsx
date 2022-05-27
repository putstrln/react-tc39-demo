import { useEffect, useState } from "react";
import { Feature } from "../../Feature/Feature";
import { Source } from "../../Source/Source";
import { getAnyPromiseExample } from "./PromiseAnySource";
import source from "./PromiseAnySource?source";

export const PromiseAny = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getAnyPromiseExample();
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
          Returns the first{" "}
          <a href="https://stackoverflow.com/a/56850392">fulfilled</a> promise
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
    </Feature>
  );
};
