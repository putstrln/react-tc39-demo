import { ReactChild } from "react";
import { Reference } from "../Reference/Reference";
import "./Feature.scss";

interface FeatureProps {
  name: string;
  refUrl: string;
  children: ReactChild | ReactChild[];
}

export const Feature = ({ children, name, refUrl }: FeatureProps) => (
  <div className="Feature">
    <div className="title">
      <h1>{name}</h1>
      <Reference url={refUrl} />
    </div>
    {children}
  </div>
);
