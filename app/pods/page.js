import CarouselWrapper from "@/components/CarouselWrapper";
import CarouselWrapperCopy from "@/components/CarouselWrapper copy";
import Navbar from "@/components/Navbar";

export default function Pods() {
  return (
    <main className="flex w-full bg-[#c6aca7] flex-col items-center relative justify-between min-h-screen">
      <Navbar />
      <CarouselWrapperCopy />
    </main>
  );
}
