import { type FunctionComponent } from "react";
import PhilosophieItem from "../philosophie-item/philosophie-item";
import Section from "./section";

export type PhilisophieSectionProps = {};

const PhilisophieSection: FunctionComponent<PhilisophieSectionProps> = ({}) => {
  return (
    <Section
      heading="Philosophie"
      intro="Bei Blizzer machen wir viele Dinge bewusst anders als traditionelle Web-Agenturen. Wieso muss sich eine Website im Jahr 2023 immer noch wie Quantenphysik anfühlen?"
    >
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20">
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Kein weiteres Wordpress-Monster"
            text="Falls du schon mal eine Wordpress-Seite eingekauft hast, weißt du wovon wir reden. Jedes Mal kaufst du dir neben der Website einen riesigen Klotz ans Bein, der im Nachhinein mehr Kosten verursacht als generiert. Wir bei Blizzer finden: du hast was Geileres verdient."
          />
        </section>
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Content-First Administration"
            text="Willst du Texte auf deiner Website abändern? So geht das mit Blizzer schnell und effektiv. Bei uns werden alle Webseiten als Content-First umgesetzt. So kannst du dich beim Administrieren deiner Website, voll ganz auf die Inhalte konzentrieren."
          />
        </section>
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Kostenlose Wartung & Security Updates"
            text="Du hast keinen Plan von IT? Warum sollst du dich dann, um Wartung und Security deiner Seite kümmern müssen? Deswegen ist es bei uns selbstverständlich, dass wir alles rund um Wartung und Sicherheit deiner Website kostenlos übernehmen. Du kannst dich voll und ganz auf dein Projekt konzentrieren können."
          />
        </section>
        <section data-aos="fade-up">
          <PhilosophieItem
            heading="Das Blizzer-Feeling"
            text="Für uns ist jede Website eine Herzensangelegenheit. Wir wollen das Erlebnis einer geilen Website für dich so einfach und nice wie möglich machen. Mit dir als Inspiration und einer Brise Blizzer-Feeling machen wir gemeinsam dein nächstes Webseiten-Projekt zu einem vollen Erfolg."
          />
        </section>
      </div>
    </Section>
  );
};

export default PhilisophieSection;
