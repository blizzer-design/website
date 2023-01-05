import React, { type FunctionComponent } from "react";
import Section from "./section";

export type KickoffSectionProps = {};

const KickoffSection: FunctionComponent<KickoffSectionProps> = ({}) => {
  return (
    <Section
      heading="Los geht's!"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum autem assumpta ratío est, tanto in dominatu locatur, ut omnia illa prima naturae hulus tutelae subiciantur. Et ego: Piso, inquam, si est quisquam"
    >
      <ul className="text-3xl font-bold [&.li]:py-2 text-center">
        <li>1. Wir telefonieren</li>
        <li>2. Workshop</li>
        <li>3. Ich kümmer mich um alles</li>
      </ul>
    </Section>
  );
};

export default KickoffSection;
