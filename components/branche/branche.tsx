import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import { type FunctionComponent } from "react";
import Button from "../button/button";

export type BrancheProps = {
  name: string;
  text: string;
  features: Array<string>;
  cta: string;
  img: StaticImageData;
};

const Branche: FunctionComponent<BrancheProps> = ({
  name,
  text,
  features,
  cta,
  img,
}) => {
  return (
    <div className="lg:grid grid-cols-2 gap-x-20">
      <div className="self-top hidden lg:block" data-aos="fade-up">
        <div
          className="bg-blizzer"
          style={{
            mask: 'url("/mask.svg")',
            maskSize: "auto 100%",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMask: 'url("/mask.svg")',
            WebkitMaskSize: "auto 100%",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        >
          <div className="drop-shadow-xl">
            <Image
              src={img}
              className="row-start-1 col-start-1 aspect-square object-cover translate-x-8 -translate-y-8"
              alt={`${name} Wallpaper`}
              style={{
                mask: 'url("/mask.svg")',
                maskSize: "auto 100%",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMask: 'url("/mask.svg")',
                WebkitMaskSize: "auto 100%",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
      <div className="self-center py-8" data-aos="fade-up">
        <p className="lg:text-2xl font-bold mb-4 lg:mb-6">Blizzer für</p>
        <h2 className="text-5xl lg:text-7xl font-black mb-8">{name}</h2>
        <p className="text-sm lg:text-base mb-6">{text}</p>
        <ul className="font-bold [&>li]:py-1">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-sm lg:text-base flex items-center gap-x-2"
            >
              <CheckCircleIcon className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Button>{cta}</Button>
        </div>
      </div>
    </div>
  );
};

export default Branche;
