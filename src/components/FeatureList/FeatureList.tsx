import { Link, useParams } from "react-router-dom";
import { FeatureType } from "../../constants";

export interface FeatureListProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  features: Function[];
  type: FeatureType;
}
export const FeatureList = ({ features, type }: FeatureListProps) => {
  const { featureName } = useParams();
  const sortedFeatures = [...features];
  sortedFeatures.sort((a, b) => a.name.localeCompare(b.name));
  const Feature = sortedFeatures.find((f) => f.name === featureName);
  console.debug(featureName, Feature, sortedFeatures);
  return (
    <>
      <ol>
        {sortedFeatures.map((f) => (
          <li key={f.name}>
            <Link to={`/${type}/${f.name}`}>{f.name}</Link>
          </li>
        ))}
      </ol>
      {Feature && <Feature />}
    </>
  );
};
