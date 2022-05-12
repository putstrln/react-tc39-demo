import { Link, useParams } from "react-router-dom";
import { ClassStaticBlock } from "../TC39/ClassStaticBlock/ClassStaticBlock";

const features = [ClassStaticBlock];

export const TC39List = () => {
  const { featureName } = useParams();
  const Feature = features.find((f) => f.name === featureName);
  console.debug(featureName, Feature, features);
  return (
    <>
      <ol>
        {features.map((f) => (
          <li key={f.name}>
            <Link to={`/tc39/${f.name}`}>{f.name}</Link>
          </li>
        ))}
      </ol>
      {Feature && (
        <>
          <h1>{featureName}</h1>
          {Feature && <Feature />}
        </>
      )}
    </>
  );
};
