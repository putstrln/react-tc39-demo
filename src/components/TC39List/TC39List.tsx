import { FeatureType } from "../../constants";
import { FeatureList } from "../FeatureList/FeatureList";
import { ClassStaticBlock } from "../TC39/ClassStaticBlock/ClassStaticBlock";
import { GlobalThis } from "../TC39/GlobalThis/GlobalThis";
import { PromiseAny } from "../TC39/PromiseAny/PromiseAny";

const features = [ClassStaticBlock, GlobalThis, PromiseAny];

export const TC39List = () => (
  <FeatureList features={features} type={FeatureType.TC39} />
);
