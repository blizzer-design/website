import Image from "next/image";
import { type FunctionComponent } from "react";
import Button from "../button/button";
import { Container } from "../container";

export type NavbarProps = {};

const Navbar: FunctionComponent<NavbarProps> = ({}) => {
  return (
    <>
      <nav className="bg-blizzer fixed top-0 left-0 w-full z-50">
        <Container>
          <div className="h-16 w-full flex items-center justify-between">
            <a className="flex items-center gap-x-1">
              <Image
                src={"/blizzer-logo.svg"}
                width={40}
                height={40}
                alt="Blizzer Logo"
              />
              <div className="font-bold">
                Blizzer
                <span className="ml-8 font-normal">
                  Einfach. Geile. Websites.
                </span>
              </div>
            </a>
            <div>
              <Button>Kostenlos Beraten</Button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
