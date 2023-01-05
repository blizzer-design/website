import React, { type FunctionComponent } from "react";
import Card from "../card/card";
import { Container } from "../container";
import Section from "./section";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import PhilosophieItem from "../philosophie-item/philosophie-item";

export type PhilisophieSectionProps = {};

const PhilisophieSection: FunctionComponent<PhilisophieSectionProps> = ({}) => {
  return (
    <Section
      heading="Philosophie"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in
    statu corporis nihil inest, quod animadvertendum esse ipsa natura
    iudicet?"
    >
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20">
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Kein weiteres Wordpress-Monster"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                illum, quem nominavi, et ceteros sophistas, ut e Platone
                intellegi potest, lusos videmus a Socrate. Sin eam, quam"
          />
        </section>
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Content-first Editor"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                illum, quem nominavi, et ceteros sophistas, ut e Platone
                intellegi potest, lusos videmus a Socrate. Sin eam, quam"
          />
        </section>
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Kostenlose Wartung & Security Updates"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                  illum, quem nominavi, et ceteros sophistas, ut e Platone
                  intellegi potest, lusos videmus a Socrate. Sin eam, quam"
          />
        </section>
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Kein weiteres Wordpress-Monster"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                    illum, quem nominavi, et ceteros sophistas, ut e Platone
                    intellegi potest, lusos videmus a Socrate. Sin eam, quam"
          />
        </section>
      </div>
    </Section>
  );
};

export default PhilisophieSection;
