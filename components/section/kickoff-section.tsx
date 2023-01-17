import { BoltIcon } from "@heroicons/react/24/solid";
import React, { type FunctionComponent } from "react";
import Button from "../button/button";
import Section from "./section";

export type KickoffSectionProps = {};

const KickoffSection: FunctionComponent<KickoffSectionProps> = ({}) => {
  return (
    <Section
      heading="Los geht's!"
      intro="Wenn du auch glaubst, dass du eine geile Website verdient hast, lass uns nicht länger warten und einfach loslegen."
      id="kickoff"
    >
      <div className="max-w-screen-sm mx-auto space-y-16">
        <div className="flex items-center gap-x-8" data-aos="fade-up">
          <div className="shrink-0  h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center text-3xl font-black">
            1
          </div>
          <div className="font-bold text-lg">
            Wir quatschen völlig kostenfrei über dein Projekt.
          </div>
        </div>

        <div className="flex items-center gap-x-8" data-aos="fade-up">
          <div className="shrink-0 h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center text-3xl font-black">
            2
          </div>
          <div className="font-bold text-lg">
            In einem gemeinsamen Workshop erarbeiten wir gemeinsam die Roadmap
            für deine Website.
          </div>
        </div>

        <div className="flex items-center gap-x-8" data-aos="fade-up">
          <div className="shrink-0  h-16 w-16 rounded-2xl bg-blizzer flex items-center justify-center text-3xl font-black">
            3
          </div>
          <div className="font-bold text-lg">
            Wir setzen deine geile Website um.
          </div>
        </div>
      </div>

      <div className="mt-32">
        <p
          className="text-center text-gray-600 max-w-screen-sm mx-auto mb-16"
          data-aos="fade-up"
        >
          Das Eis zu brechen ist immer schwierig.😅 <br />
          Schreib uns einfach ein paar Zeilen Text und wir bringen alles in
          Rollen.
        </p>
        <div className="flex justify-center" data-aos="fade-up">
          <Button href="mailto:hallo@blizzer.design">
            hallo@blizzer.design
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default KickoffSection;
