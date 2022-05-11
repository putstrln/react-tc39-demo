import source from "./ClassStaticBlockSource.ts?source";
import { getRectName, Rect } from "./ClassStaticBlockSource";
import { Source } from "../../Source/Source";

export const ClassStaticBlock = () => {
  const rect = new Rect("private name");
  return (
    <div>
      Given <Source>{source}</Source>
      <ul>
        <li>
          Static block gives us the ability to initialize static values using
          multiple statements.
        </li>
        <li>The static width and height will change on every reload.</li>
        <li>
          Rect.defaultWidth: {Rect.defaultWidth} and Rect.defaultHeight:{" "}
          {Rect.defaultHeight}
        </li>
      </ul>
      <ul>
        <Source>
          {`const rect = new Rect("private name");
getRectName(rect);`}
        </Source>
        <br />
        <li>
          We can define external functions that have access to private fields as
          well such as <strong>getRectName</strong>. The above will return
          {getRectName(rect)}
        </li>
      </ul>
    </div>
  );
};
