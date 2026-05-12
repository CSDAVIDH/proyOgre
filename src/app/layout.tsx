import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import BackgroundScene from "@/components/BackgroundScene";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ogre Uniformes | Portfólio Corporativo",
  description:
    "Site corporativo da Ogre Uniformes, especialistas em uniformes escolares, industriais, corporativos e esportivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <BackgroundScene />
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
