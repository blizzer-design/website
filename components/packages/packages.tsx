import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { type FunctionComponent } from "react";
import cx from "classnames";

export type PackageProps = {
  name: string;
  price: string;
  text: string;
  features: Array<string>;
};

export type PackagesProps = {
  packages: {
    landing: PackageProps;
    webiste: PackageProps;
    enterprise: PackageProps;
  };
};

const Packages: FunctionComponent<PackagesProps> = ({ packages }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:max-w-full md:max-w-[50%] lg:max-w-full mx-auto">
      <div
        className="bg-gray-50 border border-gray-300 lg:border-r-0 rounded-xl lg:rounded-r-none lg:rounded-l-xl mt-8 mb-8 shadow-xl z-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="text-center bg-white rounded-t-xl px-8 py-12">
          <div className="text-xl font-bold mb-2">{packages.landing.name}</div>
          <div className="text-6xl font-black">{packages.landing.price}</div>
        </div>
        <div className="border-t py-12 px-8">
          <p className="text-sm mb-8">{packages.landing.text}</p>
          <ul className="text-sm [&>li]:py-1 mb-16">
            {packages.landing.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-x-2">
                <CheckCircleIcon
                  width={24}
                  height={24}
                  className="text-green-600"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="bg-gray-50 border border-gray-300 rounded-xl shadow-xl z-20"
        data-aos="fade-up"
      >
        <div className="text-center bg-blizzer rounded-t-xl px-8 py-12">
          <div className="text-xl font-bold mb-2">{packages.webiste.name}</div>
          <div className="text-6xl font-black">{packages.webiste.price}</div>
        </div>
        <div className="py-12 px-8">
          <p className="text-sm mb-8">{packages.webiste.text}</p>
          <ul className="text-sm [&>li]:py-1 mb-8">
            {packages.webiste.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-x-2">
                <CheckCircleIcon
                  width={24}
                  height={24}
                  className="text-green-600"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="bg-gray-50 border border-gray-300 lg:border-l-0 rounded-xl lg:rounded-l-none lg:rounded-r-xl mt-8 mb-8 shadow-xl z-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="text-center bg-white rounded-t-xl lg:rounded-tl-none lg:rounded-tr-xl px-8 py-12">
          <div className="text-xl font-bold mb-2">
            {packages.enterprise.name}
          </div>
          <div className="text-6xl font-black">{packages.enterprise.price}</div>
        </div>
        <div className="border-t py-12 px-8">
          <p className="text-sm mb-8">{packages.enterprise.text}</p>
          <ul className="text-sm [&>li]:py-1 mb-8">
            {packages.enterprise.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-x-2">
                <CheckCircleIcon
                  width={24}
                  height={24}
                  className="text-green-600"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packages;
