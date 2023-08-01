import {
  DesktopIcon,
  LightningBoltIcon,
  RocketIcon,
  SunIcon,
  TargetIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export const features = [
  {
    label: "Motion sensor",
    content:
      "Jetson comes with a high-sensitivity smart motion sensor that turns on and off the light and ventilation. Just step inside and focus on the task.",
    image: (
      <>
        <Image
          src={"/motionsensor.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/motionsensor.webp",
    icon: (
      <>
        <TargetIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Ventilation",
    content:
      "You can’t see it and you barely hear it. Ventilation exchanges the air inside Jetson almost 40 times an hour to keep your mind sharp and your ideas fresh.",
    image: (
      <>
        <Image
          src={"/ventilation.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/ventilation.webp",
    icon: (
      <>
        <RocketIcon className="w-16 h-16 text-white " />
      </>
    ),
  },
  {
    label: "Lighting",
    content:
      "Depending on the size, Jetson’s energy-saving LED lighting provides more light than you need for a few hours of comfortable work.",
    image: (
      <>
        <Image
          src={"/lighting.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/lighting.webp",
    icon: (
      <>
        <SunIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Media port",
    content:
      "Jetson is equipped with an advanced, modular media port with two electrical outlets and a fast charging USB A+C port in standard, to keep you connected and powered up.",
    image: (
      <>
        <Image
          src={"/mediaport.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/mediaport.webp",
    icon: (
      <>
        <DesktopIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Plug & play",
    content:
      "Every function of Jetson is integrated with its electrical system. After installation, all you need to do is to connect Jetson to a power source and step inside.",
    image: (
      <>
        <Image
          src={"/plugandplay.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/plugandplay.webp",
    icon: (
      <>
        <LightningBoltIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Plug & play",
    content:
      "Every function of Jetson is integrated with its electrical system. After installation, all you need to do is to connect Jetson to a power source and step inside.",
    image: (
      <>
        <Image
          src={"/plugandplay.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/plugandplay.webp",
    icon: (
      <>
        <LightningBoltIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Plug & play",
    content:
      "Every function of Jetson is integrated with its electrical system. After installation, all you need to do is to connect Jetson to a power source and step inside.",
    image: (
      <>
        <Image
          src={"/plugandplay.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/plugandplay.webp",
    icon: (
      <>
        <LightningBoltIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Plug & play",
    content:
      "Every function of Jetson is integrated with its electrical system. After installation, all you need to do is to connect Jetson to a power source and step inside.",
    image: (
      <>
        <Image
          src={"/plugandplay.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/plugandplay.webp",
    icon: (
      <>
        <LightningBoltIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Plug & play",
    content:
      "Every function of Jetson is integrated with its electrical system. After installation, all you need to do is to connect Jetson to a power source and step inside.",
    image: (
      <>
        <Image
          src={"/plugandplay.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/plugandplay.webp",
    icon: (
      <>
        <LightningBoltIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
  {
    label: "Plug & play",
    content:
      "Every function of Jetson is integrated with its electrical system. After installation, all you need to do is to connect Jetson to a power source and step inside.",
    image: (
      <>
        <Image
          src={"/plugandplay.webp"}
          width={600}
          height={900}
          alt={"feature image"}
          className="absolute top-0 h-full "
        />
      </>
    ),
    imageURL: "/plugandplay.webp",
    icon: (
      <>
        <LightningBoltIcon className="w-16 h-16 text-white" />
      </>
    ),
  },
];
