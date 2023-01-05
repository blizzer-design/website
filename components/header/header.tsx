import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { type FunctionComponent } from "react";
import TypeIt from "typeit-react";
import { Container } from "../container";
import BlizzerLogoType from "../logo/blizzer-logotype";

export type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = ({}) => {
  return (
    <header className="py-16 min-h-screen h-full w-full flex items-center bg-blizzer text-black">
      <Container>
        <BlizzerLogoType />
        <h1 className="leading-10 mb-12 lg:mb-20">
          <span className="text-4xl lg:text-8xl font-black">
            Einfach. Geile. <br />
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .pause(2000)
                  .delete()
                  .pause(500)
                  .type("Landing Pages.")
                  .pause(2000)
                  .delete()
                  .pause(500)
                  .type("Frimen<wbr>seiten.")
                  .pause(2000)
                  .delete()
                  .pause(500)
                  .type("Vereins<wbr>seiten.")
                  .pause(2000)
                  .delete()
                  .pause(500)
                  .type("Friseur<wbr>seiten.")
                  .pause(2000)
                  .delete()
                  .pause(500)
                  .type("Kirchen<wbr>seiten.")
                  .pause(2000)
                  .delete()
                  .pause(500)

                  .type("Websites.™");

                return instance;
              }}
              options={{ startDelete: true }}
            >
              Websites.
            </TypeIt>
          </span>
          <br />
        </h1>
        <ul className="lg:text-xl font-bold [&>li]:py-1">
          <li className="flex items-center gap-x-2">
            <CheckCircleIcon className="shrink-0 h-6 w-6 lg:h-8 lg:w-8 text-black" />
            Transparenter Pauschaulpreis
          </li>
          <li className="flex items-center gap-x-2">
            <CheckCircleIcon className="shrink-0 h-6 w-6 lg:h-8 lg:w-8 text-black" />
            Geile Designs
          </li>
          <li className="flex items-center gap-x-2">
            <CheckCircleIcon className="shrink-0 h-6 w-6 lg:h-8 lg:w-8 text-black" />
            Sauschnelle Ladezeiten
          </li>
          <li className="flex items-center gap-x-2">
            <CheckCircleIcon className="shrink-0 h-6 w-6 lg:h-8 lg:w-8 text-black" />
            Mega SEO-Rankings
          </li>
          <li className="flex items-center gap-x-2">
            <CheckCircleIcon className="shrink-0 h-6 w-6 lg:h-8 lg:w-8 text-black" />
            Lebenslange Wartung und Security Updates
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
