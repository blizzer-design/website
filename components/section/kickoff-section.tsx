import { BoltIcon } from "@heroicons/react/24/solid";
import React, { type FunctionComponent } from "react";
import Button from "../button/button";
import Section from "./section";

export type KickoffSectionProps = {};

const KickoffSection: FunctionComponent<KickoffSectionProps> = ({}) => {
  return (
    <Section
      heading="Los geht's!"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum autem assumpta ratío est, tanto in dominatu locatur, ut omnia illa prima naturae hulus tutelae subiciantur. Et ego: Piso, inquam, si est quisquam"
      id="kickoff"
    >
      <div className="max-w-screen-sm mx-auto space-y-16">
        <div className="flex items-center gap-x-8" data-aos="fade-up">
          <div className="shrink-0  h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center text-xl font-black">
            1
          </div>
          <div className="font-bold text-lg">
            Wir quatschen völlig kostenfrei über dein Projekt
          </div>
        </div>

        <div className="flex items-center gap-x-8" data-aos="fade-up">
          <div className="shrink-0 h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center text-xl font-black">
            2
          </div>
          <div className="font-bold text-lg">
            In einem gemeinsamen Workshop legen wir die Roadmap für deine
            Website fest
          </div>
        </div>

        <div className="flex items-center gap-x-8" data-aos="fade-up">
          <div className="shrink-0  h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center text-xl font-black">
            3
          </div>
          <div className="font-bold text-lg">
            In regelmäßer Rücksprache setze ich deine Website um.
          </div>
        </div>
      </div>

      <div className="mt-32 flex justify-center" data-aos="fade-up">
        <Button href="mailto:der-daniel@outlook.com">
          Schreib mich einfach an und los geht's!
        </Button>
      </div>
    </Section>
  );
};

export default KickoffSection;
