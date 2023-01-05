"use client";

import "./globals.css";
import "aos/dist/aos.css";

import { Roboto } from "@next/font/google";
import AOS from "aos";

import { useEffect } from "react";
import Footer from "../components/footer/footer";

const roboto = Roboto({ weight: ["500", "700", "900"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="de">
      <head />
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
