import React, { PropsWithChildren, type FunctionComponent } from "react";
import cx from "classnames";

export type ButtonProps = PropsWithChildren<{
  scope?: "header" | "main";
  href: string;
}>;

const Button: FunctionComponent<ButtonProps> = ({
  children,
  scope = "main",
  href,
}) => {
  return (
    <a
      href={href}
      className={cx(
        "max-w-max flex items-center shadow-xl font-bold py-4 lg:py-5 px-8 lg:px-10 rounded-2xl hover:scale-105 hover:-rotate-1 transition-all",
        {
          "border-4 border-black text-black lg:text-lg": scope === "header",
          "bg-blizzer text-black lg:text-lg shadow-xl": scope === "main",
        }
      )}
      // style={{ boxShadow: "-6px 6px #fcea2b" }}
    >
      {children}
    </a>
  );
};

export default Button;
