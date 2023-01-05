"use client";

import Button from "../components/button/button";
import { Container } from "../components/container";
import Header from "../components/header/header";
import BlizzerLogoType from "../components/logo/blizzer-logotype";
import BranchenSection from "../components/section/branchen-section";
import KickoffSection from "../components/section/kickoff-section";
import PhilisophieSection from "../components/section/philosophie-section";
import PreiseSection from "../components/section/preise-section";

import TriangleSeparator from "../components/separator/triangle-separator";

export default function Home() {
  return (
    <>
      <div>
        <Header />

        <TriangleSeparator />

        <main>
          <PreiseSection />

          <section className="py-32">
            <Container>
              <div
                className="rounded-2xl bg-blizzer px-16 py-32"
                data-aos="fade-up"
              >
                <div className="flex justify-center" data-aos="fade-up">
                  <BlizzerLogoType />
                </div>
                <h1
                  className="text-4xl lg:text-6xl font-black text-center mb-16"
                  data-aos="fade-up"
                >
                  Du verdienst eine geile Website.
                </h1>
                <div className="flex justify-center" data-aos="fade-up">
                  <Button scope="header">Das sehe ich auch so!</Button>
                </div>
              </div>
            </Container>
          </section>

          <BranchenSection />

          <PhilisophieSection />

          <KickoffSection />
        </main>
      </div>
    </>
  );
}
