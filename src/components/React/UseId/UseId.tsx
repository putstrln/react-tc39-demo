import { Feature } from "../../Feature/Feature";
import { Source } from "../../Source/Source";
import { UseIdSource } from "./UseIdSource";
import source from "./UseIdSource.tsx?source";

export const UseId = () => {
  return (
    <Feature
      name={UseId.name}
      refUrl="https://reactjs.org/docs/hooks-reference.html#useid"
    >
      <ul>
        <li>useId generates stable ids across client and server</li>
        <li>It persists through re-renders.</li>
      </ul>
      <hr />
      <Source>{source}</Source>
      <hr />
      <UseIdSource />
    </Feature>
  );
};
