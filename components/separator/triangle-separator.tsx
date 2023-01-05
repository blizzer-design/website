import Image from "next/image";
import React, { type FunctionComponent } from "react";
import Triangle from "../../public/triangle.svg";

export type TriangleSeparatorProps = {};

const TriangleSeparator: FunctionComponent<TriangleSeparatorProps> = ({}) => {
  return (
    <Image
      alt="Triangle Separator"
      className="h-auto w-full object-contain"
      src={Triangle}
    />
  );
};

export default TriangleSeparator;
