import { Source } from "../../Source/Source";
import { UseIdSource } from "./UseIdSource";
import source from "./UseIdSource.tsx?source";

export const UseId = () => {
  return (
    <div>
      <ul>
        <li>useId generates stable ids across client and server</li>
        <li>It persists through re-renders.</li>
      </ul>
      <hr />
      <Source>{source}</Source>
      <hr />
      <UseIdSource />
    </div>
  );
};
