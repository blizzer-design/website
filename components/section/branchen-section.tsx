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
      intro="Blizzer glänzt durch seinen minimalen Aufwand in der Administration vor allem dort, wo die Zeit knapp ist und die Kernkompetenz nicht Technik ist."
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
                    text="Für viele Vereine ist Digitalisierung ein akutes Thema. Mit einer geilen Vereinswebsite und dem passenden Google-Konzept, können schnell neue Mitglieder gewonnen werden."
                    features={[
                      "Verwaltung der Abteilungen / Teams",
                      "Integration von Tabellen und Spieltagen",
                      "Eigener Kalender",
                      "Top Google-Ranking",
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
                    text="Für Selbstständig ist die Website der wichtigste Kanal zur Außendarstellung und Kundengewunnung. Mit einem geilen Design und der richtigen SEO-Strategie sticht man spielend leicht die Konkurenz aus."
                    features={[
                      "Integration deiner Tools wie Newsletter",
                      "CTA-Buttons zur Lead-Generierung",
                      "Einzigartiges Design",
                      "Nices SEO-Konzept",
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
                    text="Friseure müssen sich online gegen viel Konkurrenz behaupten. Hier muss schon eine geile Website her, um den Kunden bei der Google-Recherche zu überzeugen: Eine professionelle Inszenierung des Salons, gepaart mit einer Online-Terminbuchung in zwei Klicks und gewinnst neue Kunden."
                    features={[
                      "Integration deiner Terminbuchungssoftware",
                      "Professioneller Inzensierung des Salons",
                      "Integration von Werbeaktionen",
                      "Top Google-Ranking",
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
                    text="Ärzte haben vor allem eins: Keine Zeit sich um ihre Website zu kümmern. Dabei kann eine geile Website sowohl für alte als auch junge Patienten viel Mehrwert bieten. Von der Terminbuchung bis zur Online-Sprechstunde - mit Blizzer sind diese Problem gelöst."
                    features={[
                      "Integration der Terminbuchungssoftware",
                      "Integration der Online-Sprechstundensoftware",
                      "Professionelles Design, das Alt und Jung versteht",
                      "Top Google-Ranking",
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
                    text="Firmenseiten sind vor allem im Mittelstand ein großes Thema. Eine geile Website kann der entscheidende Faktor bei der Gewinnung neuer Kunden oder der Entscheidung auf dem Jobmarkt sein. "
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
                    text="Für Künstler verdient eine Website, die so individuell wie er selbst ist. Es darf ruhig extravagant sein!"
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
                    text="Sind wir mal ehrlich: Kennst jemand eine geile Kirchen-Website? Nicht wirklich. Dabei kann die Website gerade junge Menschen erreichen, die ein digitales Angbot in allen Bereichen den Lebens gewöhnt sind."
                    features={[
                      "Top Inszenierung der Kirche und Gemeinde",
                      "Einfaches Abrufen zentraler Infos für die Gläubigen",
                      "Integration interner Tools wie Kalender",
                      "Top Google-Ranking",
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
