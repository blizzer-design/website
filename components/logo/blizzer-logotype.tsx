import Image from "next/image";
import { type FunctionComponent } from "react";
import Logo from "../../public/blizzer-logo.svg";

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
      <Image
        src={Logo}
        alt="Blizzer Logo"
        className="shadow-lg rounded-xl bg-white p-[3px] h-10 w-10 lg:h-12 lg:w-12"
      />
      <span className="text-xl lg:text-2xl font-bold">Blizzer</span>
    </div>
  );
};

export default BlizzerLogoType;
