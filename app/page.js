import CarouselWrapper from "@/components/CarouselWrapper";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex w-full bg-[#c6aca7] flex-col items-center relative justify-between min-h-screen">
      <Navbar />
      <CarouselWrapper />
    </main>
  );
}
