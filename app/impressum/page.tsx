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
          <h1 className="text-black text-8xl font-black">Impressum</h1>
        </Container>
      </header>
      <TriangleSeparator />

      <main className="py-32">
        <Container>
          <h1 className="text-xl font-bold mb-6">Angaben gemäß § 5 TMG</h1>
          <address className="not-italic font-bold text-3xl">
            Daniel Hitzel <br />
            Max-Planck-Str. 22 <br />
            64807 Dieburg
          </address>
        </Container>
      </main>
    </>
  );
}
