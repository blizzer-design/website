import { type FunctionComponent } from "react";
import Packages from "../packages/packages";
import Section from "./section";

export type PreiseSectionProps = {};

const PreiseSection: FunctionComponent<PreiseSectionProps> = ({}) => {
  return (
    <Section
      heading="Pakete"
      intro="Alle Pakete sind transparente Pauschalpreise. Wir stimmen uns in einem Workshop über den Umfang ab und los geht's. Es gibt keine versteckten Kosten."
      width="xl"
    >
      <Packages />
    </Section>
  );
};

export default PreiseSection;
