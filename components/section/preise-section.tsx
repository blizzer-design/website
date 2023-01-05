import { type FunctionComponent } from "react";
import Packages from "../packages/packages";
import Section from "./section";

export type PreiseSectionProps = {};

const PreiseSection: FunctionComponent<PreiseSectionProps> = ({}) => {
  return (
    <Section
      heading="Pakete"
      intro="Alle Pakete sind transparente Pauschalpreise. Wir stimmen uns in einem Workshop über den Umfang ab und lost geht's. Es gibt keine versteckten Kosten."
      width="xl"
    >
      <Packages
        packages={{
          landing: {
            name: "Landing Page",
            price: "5.000 €",
            text: "Alles was du für einen schnellen Start benötigst",
            features: [
              "Landing Page",
              "Individuelles Design",
              "Professionelle SEO-Optimi",
              "Google Business Eintrag",
              "Tool-Integration wie Kale",
              "PageSpeed Insights Optimi",
              "Mobile Ready",
              "Kostenloses Hosting",
              "Kostenlose Wartung & Secu",
              "30 Minuten Support pro Mo",
              "Vorlage für Impressum",
              "Vollwertige DSGVO-Kompatibilität",
            ],
          },
          webiste: {
            name: "Website",
            price: "8.000 €",
            text: "Alles was du für einen schnellen Start benötigst",
            features: [
              "Landing Page + 5 Unterseiten",
              "Individuelles Design",
              "Professionelle SEO-Optimi",
              "Google Business Eintrag",
              "Tool-Integration wie Kale",
              "PageSpeed Insights Optimi",
              "Mobile Ready",
              "Kostenloses Hosting",
              "Kostenlose Wartung & Secu",
              "30 Minuten Support pro Mo",
              "Vorlage für Impressum",
              "Vollwertige DSGVO-Kompatibilität",
            ],
          },
          enterprise: {
            name: "Enterprice-Seiten ab",
            price: "12.000 €",
            text: "Alles was du für einen schnellen Start benötigst",
            features: [
              "Landing Page",
              "Individuelles Design",
              "Professionelle SEO-Optimi",
              "Google Business Eintrag",
              "Tool-Integration wie Kale",
              "PageSpeed Insights Optimi",
              "Mobile Ready",
              "Kostenloses Hosting",
              "Kostenlose Wartung & Secu",
              "30 Minuten Support pro Mo",
              "Vorlage für Impressum",
              "Vollwertige DSGVO-Kompatibilität",
            ],
          },
        }}
      />
    </Section>
  );
};

export default PreiseSection;
