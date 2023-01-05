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
          <h1 className="text-black text-8xl font-black">Datenschutz</h1>
        </Container>
      </header>
      <TriangleSeparator />

      <main className="py-32">
        <Container>
          <address>
            Daniel Hitzel <br />
            Max-Planck-Str. 22 <br />
            64807 Dieburg
          </address>
        </Container>
      </main>
    </>
  );
}
