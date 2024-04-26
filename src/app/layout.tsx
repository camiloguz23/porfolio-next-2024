import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { UiFooter, UiHeader } from "@/components";

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
  console.log("🚀 ~ theme:", theme);

  return (
    <html
      lang="es"
      data-theme={theme?.value || "system"}
      className={inter.variable}
    >
      <body>
        <UiHeader />
        {children}
        <UiFooter />
      </body>
    </html>
  );
}
