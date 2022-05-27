import source from "./PromiseAllSettledSource?source";
import { Feature } from "../../Feature/Feature";
import { useState, useEffect } from "react";
import { Source } from "../../Source/Source";
import { Notes } from "../../Notes/Notes";
import { getPromiseAllSettledExample } from "./PromiseAllSettledSource";
import { Link } from "react-router-dom";

export const PromiseAllSettled = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getPromiseAllSettledExample();
      setResults(results);
      console.debug(results);
    };
    getResults();
  }, []);
  return (
    <Feature
      name={PromiseAllSettled.name}
      refUrl={"https://github.com/tc39/proposal-promise-allSettled"}
    >
      <ul>
        <li>One of promise combinators</li>
        <li>
          Returns an array of results (either value or error) when all promises
          are settled (either fulfilled or rejected).
        </li>
        <li>
          Unlike Promise.all, we don't need to catch rejections since they'll be
          returned as state objects
        </li>
        <li>Can be used to get the settled states of all promises</li>
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
        <li>
          <Link to="/tc39/PromiseAny">PromiseAny</Link>
        </li>
      </Notes>
    </Feature>
  );
};
