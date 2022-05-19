import { Link, useParams } from "react-router-dom";
import { FeatureType } from "../../constants";

export interface FeatureListProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  features: Function[];
  type: FeatureType;
}
export const FeatureList = ({ features, type }: FeatureListProps) => {
  const { featureName } = useParams();
  const Feature = features.find((f) => f.name === featureName);
  console.debug(featureName, Feature, features);
  return (
    <>
      <ol>
        {features.map((f) => (
          <li key={f.name}>
            <Link to={`/${type}/${f.name}`}>{f.name}</Link>
          </li>
        ))}
      </ol>
      {Feature && <Feature />}
    </>
  );
};
