import { features } from "@/Data/features";
import Carousel from "@/components/Carousel";
import CarouselWrapperCopy from "@/components/CarouselWrapper copy";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-screen px-24 pt-24 overflow-hidden">
        <Carousel features={features} />
      </div>
      <div></div>
    </div>
  );
}
