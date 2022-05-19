import { FeatureType } from "../../constants";
import { FeatureList } from "../FeatureList/FeatureList";
import { UseId } from "../React/UseId/UseId";

const features = [UseId];

export const ReactList = () => (
  <FeatureList features={features} type={FeatureType.React} />
);
