import React, { PropsWithChildren, type FunctionComponent } from "react";

export type CardProps = PropsWithChildren;

const Card: FunctionComponent<CardProps> = ({ children }) => {
  return (
    <div className="rounded-2xl shadow-xl bg-white p-8 border">{children}</div>
  );
};

export default Card;
