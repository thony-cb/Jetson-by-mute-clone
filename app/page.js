import CarouselWrapper from "@/components/CarouselWrapper";
import CarouselWrapperCopy from "@/components/CarouselWrapper copy";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full bg-[#c6aca7] flex-col items-center relative justify-between min-h-screen">
      <Navbar />
      <CarouselWrapper />
    </main>
  );
}
