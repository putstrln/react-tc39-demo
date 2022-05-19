import { FeatureType } from "../../constants";
import { FeatureList } from "../FeatureList/FeatureList";
import { ClassStaticBlock } from "../TC39/ClassStaticBlock/ClassStaticBlock";
import { GlobalThis } from "../TC39/GlobalThis/GlobalThis";

const features = [ClassStaticBlock, GlobalThis];

export const TC39List = () => (
  <FeatureList features={features} type={FeatureType.TC39} />
);
