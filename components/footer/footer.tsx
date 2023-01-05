import Link from "next/link";
import { type FunctionComponent } from "react";
import { Container } from "../container";
import BlizzerLogoType from "../logo/blizzer-logotype";

export type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = ({}) => {
  return (
    <footer className="w-full py-32 bg-blizzer">
      <Container>
        <BlizzerLogoType />
        <div className="lg:flex items-center justify-between">
          <p className="text-xl font-bold mb-16 lg:mb-0">
            Einfach. Geile. Websites.™
          </p>
          <div className="flex items-center gap-x-8">
            <Link href="/impressum" className="font-bold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="font-bold">
              Datenschutz
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
