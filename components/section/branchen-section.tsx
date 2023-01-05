import { type FunctionComponent } from "react";
import Branche from "../branche/branche";
import Tabs from "../tabs/tabs";
import Section from "./section";

import VereineWallpaper from "../../public/vereine-wallpaper.jpg";
import KirchengemeindeWallpaper from "../../public/kirchengemeinde-wallpaper.jpg";
import SelbststaendigeWallpaper from "../../public/selbststaendige-wallpaper.jpg";
import FriseureWallpaper from "../../public/friseure-wallpaper.jpg";
import AerzteWallpaper from "../../public/aerzte-wallpaper.jpg";
import FirmenWallpaper from "../../public/firmen-wallpaper.jpg";
import StaedteWallpaper from "../../public/staedte-wallpaper.jpg";

export type BranchenSectionProps = {};

const BranchenSection: FunctionComponent<BranchenSectionProps> = ({}) => {
  return (
    <Section
      heading="Branchen"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in
     statu corporis nihil inest, quod animadvertendum esse ipsa natura
    iudicet?"
      width="xl"
    >
      <div>
        <Tabs
          tabs={[
            {
              name: "Vereine",
              content: (
                <>
                  <Branche
                    name="Vereine"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Verwaltung der Teams",
                      "Integration von Tabellen und Spieltagen",
                      "Eigener Kalender",
                      "Ganz oben in Google",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt Vereinsseite sichern!"
                    img={VereineWallpaper}
                  />
                </>
              ),
            },
            {
              name: "Selbstständige",
              content: (
                <>
                  <Branche
                    name="Selbstständige"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Integration deiner Tools wie Newsletter",
                      "CTA-Buttons",
                      "Einzigartiges",
                      "SEO-Optimierung",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt mehr Kunden erreichen!"
                    img={SelbststaendigeWallpaper}
                  />
                </>
              ),
            },
            {
              name: "Friseure",
              content: (
                <>
                  <Branche
                    name="Friseure"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Integration deiner Buchungssoftware",
                      "Professioneller Internetauftritt",
                      "Lorem",
                      "SEO-Optimieriung",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt Vereinsseite sichern!"
                    img={FriseureWallpaper}
                  />
                </>
              ),
            },
            {
              name: "Ärzte",
              content: (
                <>
                  <Branche
                    name="Ärzte"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Verwaltung der Teams",
                      "Integration von Tabellen und Spieltagen",
                      "Eigener Kalender",
                      "Ganz oben in Google",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt Vereinsseite sichern!"
                    img={AerzteWallpaper}
                  />
                </>
              ),
            },
            {
              name: "Firmen",
              content: (
                <>
                  <Branche
                    name="Firmen"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Verwaltung der Teams",
                      "Integration von Tabellen und Spieltagen",
                      "Eigener Kalender",
                      "Ganz oben in Google",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt Vereinsseite sichern!"
                    img={FirmenWallpaper}
                  />
                </>
              ),
            },
            {
              name: "Künstler",
              content: (
                <>
                  <Branche
                    name="Künstler"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Verwaltung der Teams",
                      "Integration von Tabellen und Spieltagen",
                      "Eigener Kalender",
                      "Ganz oben in Google",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt Vereinsseite sichern!"
                    img={StaedteWallpaper}
                  />
                </>
              ),
            },
            {
              name: "Kirchen",
              content: (
                <>
                  <Branche
                    name="Kirchen"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet"
                    features={[
                      "Verwaltung der Teams",
                      "Integration von Tabellen und Spieltagen",
                      "Eigener Kalender",
                      "Ganz oben in Google",
                      "Lebenslange Wartung und Security Updates",
                    ]}
                    cta="Jetzt Vereinsseite sichern!"
                    img={KirchengemeindeWallpaper}
                  />
                </>
              ),
            },
          ]}
        />
      </div>
    </Section>
  );
};

export default BranchenSection;
