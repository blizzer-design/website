import React, { PropsWithChildren, type FunctionComponent } from "react";
import cx from "classnames";

export type ButtonProps = PropsWithChildren<{
  scope?: "header" | "main";
}>;

const Button: FunctionComponent<ButtonProps> = ({
  children,
  scope = "main",
}) => {
  return (
    <a
      href="mailto:der-daniel@outlook.com"
      className={cx(
        "max-w-max flex items-center shadow-xl font-bold py-4 lg:py-5 px-8 lg:px-10 rounded-2xl transition-colors",
        {
          "border-4 border-black text-black lg:text-lg hover:bg-black hover:text-white":
            scope === "header",
          "bg-black text-white hover:bg-blizzer hover:text-black text-sm lg:text-base":
            scope === "main",
        }
      )}
      // style={{ boxShadow: "-6px 6px #fcea2b" }}
    >
      {children}
    </a>
  );
};

export default Button;
