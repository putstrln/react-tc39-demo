import { Link, useParams } from "react-router-dom";
import { UseId } from "../React/UseId/UseId";

const features = [UseId];

export const ReactList = () => {
  const { featureName } = useParams();
  const Feature = features.find((f) => f.name === featureName);
  console.debug(featureName, Feature, features);
  return (
    <>
      <ol>
        {features.map((f) => (
          <li key={f.name}>
            <Link to={`/react/${f.name}`}>{f.name}</Link>
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
