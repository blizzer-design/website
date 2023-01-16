"use client";

import Head from "next/head";
import { Container } from "../../components/container";
import BlizzerLogoType from "../../components/logo/blizzer-logotype";
import TriangleSeparator from "../../components/separator/triangle-separator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Datenschutz | Blizzer - Einfach. Geile. Websites.™</title>
      </Head>
      <header className="py-32 bg-blizzer">
        <Container>
          <BlizzerLogoType />
          <h1 className="text-black text-5xl lg:text-8xl font-black">
            Datenschutz
          </h1>
        </Container>
      </header>
      <TriangleSeparator />

      <main className="py-32">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            <section>
              <h1 className="lg:text-2xl font-bold mb-12">
                1. Datenschutz auf einen Blick
              </h1>

              <div className="space-y-16">
                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Allgemeine Hinweise
                  </h1>
                  <p className="text-sm">
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Datenpassiert, wenn
                    Sie diese Website besuchen. Personenbezogene Daten sind alle
                    Daten, mit denen Siepersönlich identifiziert werden können.
                    Ausführliche Informationen zum Thema Datenschutz
                    entnehmenSie unserer unter diesem Text aufgeführten
                    Datenschutzerklärung.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Wer ist verantwortlich für die Datenerfassung auf dieser
                    Website?
                  </h1>
                  <p className="text-sm">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den
                    Websitebetreiber. Dessen Kontaktdatenkönnen Sie dem
                    Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser
                    Datenschutzerklärung entnehmen.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Wer ist verantwortlich für die Datenerfassung auf dieser
                    Website?
                  </h1>
                  <p className="text-sm">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                    diese mitteilen. Hierbei kann es sich z. B. um Daten
                    handeln, die Sie in ein Kontaktformular eingeben. Andere
                    Daten werden automatisch oder nach Ihrer Einwilligung beim
                    Besuch der Website durch unsere IT- Systeme erfasst. Das
                    sind vor allem technische Daten (z. B. Internetbrowser,
                    Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                    Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
                    Website betreten.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Wofür nutzen wir Ihre Daten?
                  </h1>
                  <p className="text-sm">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie
                    Bereitstellung der Website zu gewährleisten. Andere Daten
                    können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Welche Rechte haben Sie bezüglich Ihrer Daten?
                  </h1>
                  <p className="text-sm">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                    Herkunft, Empfänger und Zweck Ihrer gespeicherten
                    personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                    Recht, die Berichtigung oder Löschung dieser Daten zu
                    verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                    erteilt haben, können Sie diese Einwilligung jederzeit für
                    die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                    bestimmten Umständen die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. Des Weiteren
                    steht Ihnen ein Beschwerderecht bei der zuständigen
                    Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum
                    Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                </section>
              </div>
            </section>

            <section>
              <h1 className="lg:text-2xl font-bold mb-12">2. Hosting</h1>

              <div className="space-y-16">
                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Wir hosten die Inhalte unserer Website bei folgendem
                    Anbieter:
                  </h1>
                  <p className="text-sm">
                    Diese Website wird extern gehostet. Die personenbezogenen
                    Daten, die auf dieser Website erfasst werden, werden auf den
                    Servern des Hosters / der Hoster gespeichert. Hierbei kann
                    es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                    Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                    Websitezugriffe und sonstige Daten, die über eine Website
                    generiert werden, handeln. <br />
                    <br />
                    Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                    gegenüber unseren potenziellen und bestehenden Kunden (Art.
                    6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                    schnellen und effizienten Bereitstellung unseres
                    Online-Angebots durch einen professionellen Anbieter (Art. 6
                    Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung
                    abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                    TTDSG, soweit die Einwilligung die Speicherung von Cookies
                    oder den Zugriff auf Informationen im Endgerät des Nutzers
                    (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
                    Die Einwilligung ist jederzeit widerrufbar. <br /> <br />
                    Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                    verarbeiten, wie dies zur Erfüllung seiner
                    Leistungspflichten erforderlich ist und unsere Weisungen in
                    Bezug auf diese Daten befolgen. <br /> <br />
                    Wir setzen folgende(n) Hoster ein:
                    <br />
                    <br />
                    Vercel <br /> San Francisco HQ <br /> 1046 Kearny St
                  </p>
                </section>
              </div>
            </section>

            <section>
              <h1 className="lg:text-2xl font-bold mb-12">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h1>

              <div className="space-y-16">
                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Datenschutz
                  </h1>
                  <p className="text-sm">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                    persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung. Wenn Sie diese Website benutzen,
                    werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich
                    identifiziert werden können. Die vorliegende
                    Datenschutzerklärung erläutert, welche Daten wir erheben und
                    wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
                    Zweck das geschieht. Wir weisen darauf hin, dass die
                    Datenübertragung im Internet (z. B. bei der Kommunikation
                    per E-Mail) 3 / 7 Sicherheitslücken aufweisen kann. Ein
                    lückenloser Schutz der Daten vor dem Zugriff durch Dritte
                    ist nicht möglich.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Hinweis zur verantwortlichen Stelle
                  </h1>
                  <p className="text-sm">
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                    <br />
                    <br />
                    Daniel Hitzel Telefon:
                    <br />
                    E-Mail: daniel@blizzer.design
                    <br />
                    <br />
                    Verantwortliche Stelle ist die natürliche oder juristische
                    Person, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Speicherdauer
                  </h1>
                  <p className="text-sm">
                    Soweit innerhalb dieser Datenschutzerklärung keine
                    speziellere Speicherdauer genannt wurde, verbleiben Ihre
                    personenbezogenen Daten bei uns, bis der Zweck für die
                    Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                    Löschersuchen geltend machen oder eine Einwilligung zur
                    Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                    sofern wir keine anderen rechtlich zulässigen Gründe für die
                    Speicherung Ihrer personenbezogenen Daten haben (z. B.
                    steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                    letztgenannten Fall erfolgt die Löschung nach Fortfall
                    dieser Gründe.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Allgemeine Hinweise zu den Rechtsgrundlagen der
                    Datenverarbeitung auf dieser Website
                  </h1>
                  <p className="text-sm">
                    Sofern Sie in die Datenverarbeitung eingewilligt haben,
                    verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
                    von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a
                    DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
                    DSGVO verarbeitet werden. Im Falle einer ausdrücklichen
                    Einwilligung in die Übertragung personenbezogener Daten in
                    Drittstaaten erfolgt die Datenverarbeitung außerdem auf
                    Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                    Speicherung von Cookies oder in den Zugriff auf
                    Informationen in Ihr Endgerät (z. B. via
                    Device-Fingerprinting) eingewilligt haben, erfolgt die
                    Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                    TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
                    Daten zur Vertragserfüllung oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
                    Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                    Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                    Erfüllung einer rechtlichen Verpflichtung erforderlich sind
                    auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                    Datenverarbeitung kann ferner auf Grundlage unseres
                    berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                    erfolgen. Über die jeweils im Einzelfall einschlägigen
                    Rechtsgrundlagen wird in den folgenden Absätzen dieser
                    Datenschutzerklärung informiert.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h1>
                  <p className="text-sm">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                    ausdrücklichen Einwilligung möglich. Sie können eine bereits
                    erteilte Einwilligung jederzeit widerrufen. Die
                    Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Widerspruchsrecht gegen die Datenerhebung in besonderen
                    Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                  </h1>
                  <p className="text-sm">
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1
                    LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT,
                    AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
                    ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
                    DATEN 4 / 7 WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
                    AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
                    RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                    ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE
                    WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
                    PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN,
                    WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                    VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                    FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                    GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                    RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                    DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                    JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
                    WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
                    ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                    WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG
                    VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h1>
                  <p className="text-sm">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                    ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere
                    in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                    Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Recht auf Datenübertragbarkeit
                  </h1>
                  <p className="text-sm">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                    Einwilligung oder in Erfüllung eines Vertrags automatisiert
                    verarbeiten, an sich oder an einen Dritten in einem
                    gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    Sofern Sie die direkte Übertragung der Daten an einen
                    anderen Verantwortlichen verlangen, erfolgt dies nur, soweit
                    es technisch machbar ist.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Auskunft, Löschung und Berichtigung
                  </h1>
                  <p className="text-sm">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                    jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                    gespeicherten personenbezogenen Daten, deren Herkunft und
                    Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                    Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                    sowie zu weiteren Fragen zum Thema personenbezogene Daten
                    können Sie sich jederzeit an uns wenden.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Recht auf Einschränkung der Verarbeitung
                  </h1>
                  <p className="text-sm">
                    Sie haben das Recht, die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                    Sie sich jederzeit an uns wenden. Das Recht auf
                    Einschränkung der Verarbeitung besteht in folgenden Fällen:
                    <br />
                    <br />
                    <br />
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                    personenbezogenen Daten bestreiten, benötigen wir in der
                    Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
                    haben Sie das Recht, die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. <br />
                    <br />
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten
                    unrechtmäßig geschah/geschieht, können Sie statt der
                    Löschung die Einschränkung der Datenverarbeitung verlangen.{" "}
                    <br />
                    <br />
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                    Sie sie jedoch zur Ausübung, Verteidigung oder
                    Geltendmachung von Rechtsansprüchen benötigen, haben Sie das
                    Recht, statt der Löschung die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. <br />
                    <br />
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                    eingelegt haben, muss eine Abwägung zwischen Ihren und
                    unseren Interessen vorgenommen werden. Solange noch nicht
                    feststeht, wessen Interessen überwiegen, haben Sie das
                    Recht, die Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                    <br />
                    <br />
                    <br />
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                    eingeschränkt haben, dürfen diese Daten - von ihrer
                    Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur
                    Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                    natürlichen oder juristischen Person oder aus Gründen eines
                    wichtigen öffentlichen Interesses der Europäischen Union
                    oder eines Mitgliedstaats verarbeitet werden.
                  </p>
                </section>

                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    SSL- bzw. TLS-Verschlüsselung
                  </h1>
                  <p className="text-sm">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                    Übertragung vertraulicher Inhalte, wie zum Beispiel
                    Bestellungen oder Anfragen, die Sie an uns als
                    Seitenbetreiber senden, eine SSL- bzw. TLS- Verschlüsselung.
                    Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                    Adresszeile des Browsers von „http://“ auf „https://“
                    wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
                    die Daten, die Sie an uns übermitteln, nicht von Dritten
                    mitgelesen werden.
                  </p>
                </section>
              </div>
            </section>

            <section>
              <h1 className="lg:text-2xl font-bold mb-12">
                4. Datenerfassung auf dieser Website
              </h1>

              <div className="space-y-16">
                <section>
                  <h1 className="text-sm lg:text-xl font-bold mb-4">
                    Server-Log-Dateien
                  </h1>
                  <p className="text-sm">
                    Der Provider der Seiten erhebt und speichert automatisch
                    Informationen in so genannten Server-Log- Dateien, die Ihr
                    Browser automatisch an uns übermittelt. Dies sind:
                    <br />
                    <br />
                    <br />
                    <ul>
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen
                    wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt
                    auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                    Websitebetreiber hat ein berechtigtes Interesse an der
                    technisch fehlerfreien Darstellung und der Optimierung
                    seiner Website - hierzu müssen die Server-Log-Files erfasst
                    werden.
                  </p>
                </section>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
