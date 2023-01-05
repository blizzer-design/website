import Image from "next/image";
import React, { type FunctionComponent } from "react";
import Logo from "../../public/blizzer-logo.svg";
import cx from "classnames";

export type BlizzerLogoProps = {
  height?: string;
  width?: string;
};

const BlizzerLogo: FunctionComponent<BlizzerLogoProps> = ({
  height = "h-16",
  width = "w-16",
}) => {
  return (
    <Image
      src={Logo}
      alt="Blizzer Logo"
      className={cx("shadow-lg rounded-xl bg-white p-[3px]", height, width)}
    />
  );
};

export default BlizzerLogo;
