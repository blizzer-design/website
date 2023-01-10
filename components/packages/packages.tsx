import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { type FunctionComponent } from "react";
import PackageFeatureList from "./package-feature-list";

const Packages: FunctionComponent = ({}) => {
  return (
    <div className="grid lg:grid-cols-3 sm:max-w-full md:max-w-[50%] lg:max-w-full mx-auto">
      <section
        className="bg-gray-50 border border-gray-300 lg:border-r-0 rounded-2xl lg:rounded-r-none lg:rounded-l-2xl mt-8 mb-8 shadow-xl z-10"
        data-aos="fade-up"
      >
        <div className="text-center bg-white rounded-t-2xl px-8 py-12">
          <h1 className="text-xl font-bold mb-2">Landing page</h1>
          <h2 className="text-6xl font-black">5.000 €</h2>
        </div>
        <div className="border-t py-12 px-8">
          <section className="mb-8">
            <h1 className="text-sm font-bold mb-4">In diesem Paket</h1>
            <ul className="text-sm [&>li]:py-1">
              <li className="flex items-center gap-x-2">
                <CheckCircleIcon
                  width={24}
                  height={24}
                  className="text-green-600"
                />
                Landing Page
              </li>
            </ul>
          </section>
          <PackageFeatureList />
        </div>
      </section>
      <section
        className="bg-gray-50 border border-gray-300 rounded-2xl shadow-xl z-20"
        data-aos="fade-up"
      >
        <div className="text-center bg-blizzer rounded-t-2xl px-8 py-12">
          <h1 className="text-xl font-bold mb-2">Website</h1>
          <h2 className="text-6xl font-black">8.000 €</h2>
        </div>
        <div className="py-12 px-8">
          <section className="mb-8">
            <h1 className="text-sm font-bold mb-4">In diesem Paket</h1>
            <ul className="text-sm [&>li]:py-1">
              <li className="flex items-center gap-x-2">
                <CheckCircleIcon
                  width={24}
                  height={24}
                  className="text-green-600"
                />
                Landing Page + 5 Unterseiten
              </li>
            </ul>
          </section>
          <PackageFeatureList />
        </div>
      </section>
      <section
        className="bg-gray-50 border border-gray-300 lg:border-l-0 rounded-2xl lg:rounded-l-none lg:rounded-r-xl mt-8 mb-8 shadow-xl z-10"
        data-aos="fade-up"
      >
        <div className="text-center bg-white rounded-t-2xl lg:rounded-tl-none lg:rounded-tr-xl px-8 py-12">
          <h1 className="text-xl font-bold mb-2">Enterprise-Seiten ab</h1>
          <h2 className="text-6xl font-black">12.000€</h2>
        </div>
        <div className="border-t py-12 px-8">
          <section>
            <h1 className="text-sm font-bold mb-4">In diesem Paket</h1>
            <ul className="text-sm [&>li]:py-1 mb-8">
              <li className="flex items-center gap-x-2">
                <CheckCircleIcon
                  width={24}
                  height={24}
                  className="text-green-600"
                />
                Beliebige Seiten
              </li>
            </ul>
          </section>
          <PackageFeatureList />
        </div>
      </section>
    </div>
  );
};

export default Packages;
