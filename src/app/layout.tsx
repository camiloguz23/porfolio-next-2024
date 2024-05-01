import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { UiFooter, UiHeader } from "@/components";
import React from "react";

const inter = Onest({
  subsets: ["latin"],
  style: ["normal", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--onest",
});

export const metadata: Metadata = {
  title:
    "Portfolio de Jeyson Guzman - Desarrollador Frontend y programador Web con mas 2 años de experiencia",
  description:
    "Con más de 2 años de experiencia, soy un apasionado desarrollador web colombiano especializado en JavaScript y React. Transformo ideas en increíbles realidades digitales. ¡Déjame impulsar tu proyecto con creatividad y profesionalismo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <html
      lang="es"
      data-theme={theme?.value || "system"}
      className={inter.variable}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Portfolio de Jeyson Guzman" />
        <meta
          property="og:description"
          content="Desarrollador Frontend y programador Web con mas 2 años de experiencia."
        />
        <meta property="og:image" content="https://i.ibb.co/Np52f2V/JR.png" />
        <meta property="og:url" content="https://www.jeysonguzman.online/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/JR.png" sizes="any" />
      </head>
      <body>
        <UiHeader />
        {children}
        <p></p>
        <UiFooter />
      </body>
    </html>
  );
}
