import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#c6aca7] flex-col items-center justify-between min-h-screen">
      <Navbar />
      <Carousel />
    </main>
  );
}
