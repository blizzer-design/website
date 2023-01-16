import { type FunctionComponent } from "react";

export type TriangleSeparatorProps = {};

const TriangleSeparator: FunctionComponent<TriangleSeparatorProps> = ({}) => {
  return (
    <div
      className="-mt-[1px] h-32 lg:h-64 w-full bg-blizzer"
      style={{
        mask: 'url("/triangle.svg")',
        maskSize: "100% auto",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMask: 'url("/triangle.svg")',
        WebkitMaskSize: "auto 100%",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    ></div>
  );
};

export default TriangleSeparator;
