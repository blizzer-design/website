import { BoltIcon } from "@heroicons/react/24/solid";
import React, { type FunctionComponent } from "react";

export type PhilosophieItemProps = {
  heading: string;
  text: string;
};

const PhilosophieItem: FunctionComponent<PhilosophieItemProps> = ({
  heading,
  text,
}) => {
  return (
    <div className="flex gap-x-8">
      <div>
        <div className="h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center">
          <BoltIcon className="h-8 w-8 text-black" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4">{heading}</h1>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default PhilosophieItem;
