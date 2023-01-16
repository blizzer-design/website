"use client";

import Head from "next/head";
import { Container } from "../../components/container";
import BlizzerLogoType from "../../components/logo/blizzer-logotype";
import TriangleSeparator from "../../components/separator/triangle-separator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Impressum | Blizzer - Einfach. Geile. Websites.™</title>
      </Head>
      <header className="py-32 bg-blizzer">
        <Container>
          <BlizzerLogoType />
          <h1 className="text-black text-5xl lg:text-8xl font-black">
            Impressum
          </h1>
        </Container>
      </header>
      <TriangleSeparator />

      <main className="py-32">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            <section>
              <h1 className="text-sm lg:text-xl font-bold mb-4 lg:mb-6">
                Angaben gemäß § 5 TMG
              </h1>
              <address className="not-italic font-bold text-xl lg:text-3xl">
                Daniel Hitzel <br />
                Max-Planck-Str. 22 <br />
                64807 Dieburg
              </address>
            </section>
            <section>
              <h1 className="text-sm lg:text-xl font-bold mb-4 lg:mb-6">
                Kontakt
              </h1>
              <a
                className="text-xl lg:text-3xl font-bold"
                href="mailto:blizzerdesign@gmail.com"
              >
                blizzerdesign@gmail.com
              </a>
            </section>

            <section>
              <h1 className="text-sm lg:text-xl font-bold mb-4 lg:mb-6">
                Umsatzsteuer-ID
              </h1>
              <p className="text-xl lg:text-3xl font-bold">DE347815196</p>
            </section>

            <section>
              <h1 className="text-sm lg:text-xl font-bold mb-4 lg:mb-6">
                Haftung für Inhalte
              </h1>
              <p className="text-sm">
                Alle Inhalte unseres Internetauftritts wurden mit größter
                Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
                Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
                oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntniserlangung einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden von den o.g.
                Rechtsverletzungen werden wir diese Inhalte unverzüglich
                entfernen.
              </p>
            </section>

            <section>
              <h1 className="text-sm lg:text-xl font-bold mb-4 lg:mb-6">
                Haftungsbeschränkung für externe Links
              </h1>
              <p className="text-sm">
                Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf
                die Inhalte dieser direkt oder indirekt verlinkten Webseiten
                haben wir keinen Einfluss. Daher können wir für die „externen
                Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen.
                Für die Inhalte der externen Links sind die jeweilige Anbieter
                oder Betreiber (Urheber) der Seiten verantwortlich. Die externen
                Links wurden zum Zeitpunkt der Linksetzung auf eventuelle
                Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung
                frei von rechtswidrigen Inhalten. Eine ständige inhaltliche
                Überprüfung der externen Links ist ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht möglich. Bei direkten oder
                indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb
                unseres Verantwortungsbereichs liegen, würde eine
                Haftungsverpflichtung ausschließlich in dem Fall nur bestehen,
                wenn wir von den Inhalten Kenntnis erlangen und es uns technisch
                möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
                Inhalte zu verhindern. Diese Haftungsausschlusserklärung gilt
                auch innerhalb des eigenen Internetauftrittes „Name Ihrer
                Domain“ gesetzten Links und Verweise von Fragestellern,
                Blogeinträgern, Gästen des Diskussionsforums. Für illegale,
                fehlerhafte oder unvollständige Inhalte und insbesondere für
                Schäden, die aus der Nutzung oder Nichtnutzung solcherart
                dargestellten Informationen entstehen, haftet allein der
                Diensteanbieter der Seite, auf welche verwiesen wurde, nicht
                derjenige, der über Links auf die jeweilige Veröffentlichung
                lediglich verweist. Werden uns Rechtsverletzungen bekannt,
                werden die externen Links durch uns unverzüglich entfernt.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
