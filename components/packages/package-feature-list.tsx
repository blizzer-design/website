import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { type FunctionComponent } from "react";

export type PackageFeatureListProps = {};

const PackageFeatureList: FunctionComponent<PackageFeatureListProps> = ({}) => {
  return (
    <section>
      <h1 className="text-sm font-bold mb-4">In allen Paketen enthalten</h1>
      <ul className="text-sm [&>li]:py-1 mb-8">
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Individuelles Design
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Professionelle SEO-Optimierung
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Google Business Eintrag
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          PageSpeed Insights Optimierung
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Tool-Integration wie Kalender
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Vorlage für Impressum
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Vollwertige DSGVO-Kompatibilität
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Lebenslange Wartung
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircleIcon
            width={24}
            height={24}
            className="shrink-0 text-green-600"
          />
          Kostenloses Hosting
        </li>
      </ul>
    </section>
  );
};

export default PackageFeatureList;
