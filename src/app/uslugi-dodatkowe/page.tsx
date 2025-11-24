"use client";
import type { NextPage } from 'next'
import React from 'react'
import {
  Download,
  IdCard,
  Wrench,
  Combine,
  MessagesSquare,
} from "lucide-react";

import ServiceAccordion from "@/components/ServiceAccordion";
import TachografCalibrationInfo from '@/components/TachografCalibrationInfo';
// import TachografDataDownloadInfo from '@/components/TachografDataDownloadInfo';
import TachografRepairInfo from '@/components/TachografRepairInfo';
import TachografPartsInfo from '@/components/TachografPartsInfo';
import FreeLegalAdvice from '@/components/FreeLegalAdvece';
import ParkingHeaterRepairInfo from '@/components/ParkingHeaterRepairInfo';





const ONasPage: NextPage = () => {
  return (
    

      <section id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Nasze wszystkie usługi
        </h2>
        <ul className="container mx-auto max-w-4xl">
          <ServiceAccordion
            icon={<IdCard className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20" />}
            text="tachografy"
          >
            <TachografCalibrationInfo />
          </ServiceAccordion>

          <ServiceAccordion
            icon={<Download className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20"/>}
            text="ogrzewania postojowe"
          >
            <ParkingHeaterRepairInfo />
          </ServiceAccordion>
          <ServiceAccordion
            icon={<Wrench className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20" />}
            text="cb radio"
          >
            <TachografRepairInfo />
          </ServiceAccordion>
          <ServiceAccordion
            icon={
              <Combine className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20" />
            }
            text="e-toll"
          >
            <TachografPartsInfo />
          </ServiceAccordion>
          <ServiceAccordion
            icon={
              <MessagesSquare
                className="text-red-500 w-15 h-15 stroke-1 ml-2 sm:w-20 sm:h-20"
              />
            }
            text="montaż gps"
          >
            <FreeLegalAdvice />
          </ServiceAccordion>
        </ul>
      </section>
    
  )
}

export default ONasPage