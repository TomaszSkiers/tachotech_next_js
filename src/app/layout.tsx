import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import "./globals.css";
import TopContactInfo from "@/components/TopContactInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CentralHeading from "@/components/CentralHeading";

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Serwis Tachografów Cyfrowych Kalibracja Naprawa Tacho-tech",
  description:
    "Twój autoryzowany punkt. Doświadczeni technicy i kompleksowa obsługa tachografów cyfrowych wszystkich marek (VDO, Stoneridge, Efkon). Wystawiamy certyfikaty. Skontaktuj się z nami!",
  verification:{
    google: "L_uDNWXC6v6e9Foph9WhZCQZ5wR18fDFaYlzJTKMlyA" 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${goldman.variable} antialiased`}>
      <body className={`flex flex-col min-h-screen min-w-[320px] mb-15` }>
        <div
          className="bg-[url('/halftone_pattern_in_distort_effect_background.jpg')] 
             bg-cover 
             bg-center 
             bg-no-repeat
             md:bg-none"
        >
          <TopContactInfo />
          <Header />
          <CentralHeading
            titleLine1="Serwis"
            titleLine2="tachografów"
            titleLine3="Skrzeszew"
          />
        </div>

        <main className="flex-grow" role="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
