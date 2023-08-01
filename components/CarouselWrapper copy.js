"use client";
import { features } from "@/Data/features";
import React from "react";
import Card from "./Card";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Carousel from "./Carousel";
import { Dragging, ModalIndex } from "@/Data/Atoms";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";

export default function CarouselWrapperCopy() {
  const [openIndex, setOpenIndex] = useAtom(ModalIndex);
  const [isDragging] = useAtom(Dragging);
  const handleOpenChange = (index) => {
    console.log(`open index: ${openIndex}, ${index}`);
    if (openIndex > -1) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
    console.log(`Modal: ${index}`);
  };
  const increment = () => {
    if (openIndex != 5) {
      setOpenIndex(openIndex + 1);
    } else {
      return;
    }
  };
  const decrement = () => {
    if (openIndex != 0) {
      setOpenIndex(openIndex - 1);
    } else {
      return;
    }
  };
  return (
    <div className="flex flex-col items-start justify-center w-full h-screen gap-10 px-24 pt-24 overflow-hidden">
      <div>
        <h2 className="text-4xl">People-focused. Simple. Comfortable.</h2>
      </div>
      <div className="flex">
        <Carousel features={features}></Carousel>
      </div>
    </div>
  );
}
const animateModal = {
  initial: {
    x: "0%",
    y: "-50%",
    opacity: 0,
  },
  animate: {
    x: "-50%",
    y: "-50%",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "0%",
    y: "-50%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
