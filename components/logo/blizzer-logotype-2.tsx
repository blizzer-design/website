import Image from "next/image";
import { type FunctionComponent } from "react";
import Logo from "../../public/blizzer-logo.svg";

const BlizzerLogoType2: FunctionComponent = ({}) => {
  return (
    <div className="flex items-center">
      <Image
        src={Logo}
        alt="Blizzer Logo"
        className="h-10 w-10 lg:h-12 lg:w-12"
      />
      <span className="text-xl lg:text-2xl font-bold p-[3px] -ml-1">
        Blizzer
      </span>
    </div>
  );
};

export default BlizzerLogoType2;
