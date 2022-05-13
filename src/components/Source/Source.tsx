import { ReactChild } from "react";
import { CopyBlock, codepen } from "react-code-blocks";

interface SourceProps {
  children: ReactChild;
}
export const Source = ({ children }: SourceProps) => (
  <div>
    <div>Source</div>
    <CopyBlock
      text={children}
      theme={codepen}
      language="typescript"
      codeBlock
    ></CopyBlock>
  </div>
);
