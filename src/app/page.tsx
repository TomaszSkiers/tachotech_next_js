"use client";
import {
  Download,
  IdCard,
  Wrench,
  Combine,
  MessagesSquare,
} from "lucide-react";

import ServiceAccordion from "@/components/ServiceAccordion";
import TachografCalibrationInfo from "@/components/TachografCalibrationInfo";
import TachografDataDownloadInfo from "@/components/TachografDataDownloadInfo";
import UniqueFeatures from "@/components/UniqueFeatures";
import TachografInfo from "@/components/TachografInfo";
import TrainingInfo from "@/components/TrainingInfo";
// import ReviewCarousel from "@/components/ReviewCarousel";
import ContactSection from "@/components/ContactSection";
import TachografRepairInfo from "@/components/TachografRepairInfo";
import TachografPartsInfo from "@/components/TachografPartsInfo";
import FreeLegalAdvice from "@/components/FreeLegalAdvece";

export default function Home() {
  return (
    <>
      <section id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Nasze usługi
        </h2>
        <ul className="container mx-auto max-w-4xl">
          <ServiceAccordion
            icon={<IdCard className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20" />}
            text="kalibracja"
          >
            <TachografCalibrationInfo />
          </ServiceAccordion>

          <ServiceAccordion
            icon={<Download className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20"/>}
            text="pobieranie danych"
          >
            <TachografDataDownloadInfo />
          </ServiceAccordion>
          <ServiceAccordion
            icon={<Wrench className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20" />}
            text="naprawy"
          >
            <TachografRepairInfo />
          </ServiceAccordion>
          <ServiceAccordion
            icon={
              <Combine className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20" />
            }
            text="części zamienne"
          >
            <TachografPartsInfo />
          </ServiceAccordion>
          <ServiceAccordion
            icon={
              <MessagesSquare
                className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20"
              />
            }
            text="doradztwo"
          >
            <FreeLegalAdvice />
          </ServiceAccordion>
        </ul>
      </section>
      <UniqueFeatures />{" "}
      {/**tag <section> jes już w komponencie UniqueFeatures */}
      <TachografInfo />
      <TrainingInfo />
      {/* <ReviewCarousel /> */}
      <ContactSection />
    </>
  );
}
