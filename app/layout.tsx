"use client";

import "./globals.css";
import "aos/dist/aos.css";

import "@fontsource/roboto/500.css"; // Weight 500.
import "@fontsource/roboto/700.css"; // Weight 500.
import "@fontsource/roboto/900.css"; // Weight 500.

import AOS from "aos";

import { useEffect } from "react";
import Footer from "../components/footer/footer";

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
