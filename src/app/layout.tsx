import type { Metadata } from "next";
import { Goldman } from "next/font/google";
import "./globals.css";
import TopContactInfo from "@/components/TopContactInfo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CentralHeading from "@/components/CentralHeading";
// import UniqueFeatures from "@/components/UniqueFeatures";
// import ContactSection from "@/components/ContactSection";

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Serwis Tachografów Cyfrowych | e-toll | Kalibracja Naprawa Części Użądzenia | Tacho-tech",
  description:
    "Serwis tachografów cyfrowych i systemów e-toll. Kalibracja, naprawa, legalizacja, montaż. Autoryzowany punkt z certyfikatami. Doświadczeni technicy, obsługa wszystkich marek. Skontaktuj się z nami!",
  verification: {
    google: "L_uDNWXC6v6e9Foph9WhZCQZ5wR18fDFaYlzJTKMlyA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${goldman.variable} antialiased`}>
      <body className={`flex flex-col min-h-screen min-w-[320px] mb-15`}>
        <div
          
        >
          <TopContactInfo />
          <Header />
          <CentralHeading />
        </div>
        <main className="flex-grow" role="main">
          {children}
        </main>
        {/* <UniqueFeatures /> */}
        {/* <ContactSection /> */}
        <Footer />
      </body>
    </html>
  );
}
