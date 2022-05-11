import { Link, useParams } from "react-router-dom";
import { ClassStaticBlock } from "../TC39/ClassStaticBlock/ClassStaticBlock";

const features = [ClassStaticBlock];

export const TC39List = () => {
  // const feature =
  const { featureName } = useParams();
  const Feature = features.find((f) => f.name === featureName);
  return (
    <>
      <ol>
        {features.map((f) => (
          <li key={f.name}>
            <Link to={f.name}>{f.name}</Link>
          </li>
        ))}
      </ol>
      <h1>{featureName}</h1>
      {Feature && <Feature />}
    </>
  );
};
