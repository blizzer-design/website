import { type FunctionComponent } from "react";
import BlizzerLogo from "./blizzer-logo";

export type BlizzerLogoTypeProps = {
  height?: string;
  width?: string;
};

const BlizzerLogoType: FunctionComponent<BlizzerLogoTypeProps> = ({
  height = "h-12",
  width = "w-12",
}) => {
  return (
    <div className="flex items-center gap-x-4 mb-10">
      <BlizzerLogo height={height} width={width} />
      <span className="text-2xl font-bold">Blizzer</span>
    </div>
  );
};

export default BlizzerLogoType;
