import { Feature } from "../../Feature/Feature";
import { Source } from "../../Source/Source";
import { getGlobalThisComparison } from "./GlobalThisSource";
import source from "./GlobalThisSource?source";

export const GlobalThis = () => {
  return (
    <Feature
      name={GlobalThis.name}
      refUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis"
    >
      <Source>{source}</Source>
      <p>
        <strong>globalThis</strong> standardizes how we access the top-level
        global object in all JS environments.
      </p>
      <p>
        This means we could avoid using window, self, global, and such.&nbsp;
        <strong>getGlobalThisComparison</strong> will result in
      </p>
      <ul>
        {getGlobalThisComparison().map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </Feature>
  );
};
