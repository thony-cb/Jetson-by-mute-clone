"use client";
import { features } from "@/Data/features";
import React from "react";
import Card from "./Card";
import Modal from "./ui/modal";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Carousel from "./Carousel";
import {
  Dragging,
  ModalAnimations,
  ModalIndex,
  OverlayAnimations,
  SwitchState,
} from "@/Data/Atoms";
import { useAtom } from "jotai";

import {
  OpenDialog,
  OverlayAnimation,
  SwitchAnimation,
  SwitchDialog,
  SwitchOverlayAnimation,
} from "@/Data/Animations";

export default function CarouselWrapperCopy() {
  const [openIndex, setOpenIndex] = useAtom(ModalIndex);
  const [isDragging] = useAtom(Dragging);
  const [isSwitching, setIsSwitching] = useAtom(SwitchState);
  // const [animateModal, setAnimateModal] = useAtom(ModalAnimations);
  // const [animateOverlay, setAnimateOverlay] = useAtom(OverlayAnimations);
  const handleOpenChange = (index) => {
    console.log(`open index: ${openIndex}, ${index}`);
    console.log(`switch state ${isSwitching}`);
    if (openIndex > -1) {
      setIsSwitching(false);
      setOpenIndex(-1);
      console.log(isSwitching);
    } else {
      console.log(isSwitching);
      setOpenIndex(index);
    }
    console.log(`Modal: ${index}`);
  };
  const increment = () => {
    if (openIndex != 5) {
      console.log(isSwitching);
      setIsSwitching(true);
      // setAnimateOverlay(SwitchOverlayAnimation);
      // setAnimateModal(SwitchDialog);
      setOpenIndex(openIndex + 1);
    } else {
      return;
    }
  };
  const decrement = () => {
    if (openIndex != 0) {
      setIsSwitching(true);
      // setAnimateOverlay(SwitchOverlayAnimation);
      // setAnimateModal(SwitchDialog);
      setOpenIndex(openIndex - 1);
    } else {
      return;
    }
  };
  const handleClose = (index) => {
    console.log(`Close index: ${openIndex}, ${index}`);
    if (openIndex > -1) {
      setIsSwitching(false);
      setOpenIndex(-1);
      console.log(isSwitching);
    } else {
      return;
    }
    console.log(`Modal Close: ${index}`);
  };
  return (
    <div className="flex flex-col justify-center w-full h-screen gap-10 px-24 pt-24 overflow-hidden">
      <div>
        <h2 className="text-4xl">People-focused. Simple. Comfortable.</h2>
      </div>
      <div className="flex">
        <Carousel features={features}>
          {features.map((feature, index) => {
            return (
              <Modal
                key={index}
                open={openIndex}
                onOpenChange={handleOpenChange}
                isDragging={isDragging}
                handleClose={handleClose}
              >
                <Card
                  key={index}
                  label={feature.label}
                  icon={feature.icon}
                  image={feature.image}
                />
                <Modal.Content>
                  <Modal.LeftContent
                    title={"Contact Form"}
                    handleClose={handleClose}
                    description={"This is a contact form"}
                    isSwitching={isDragging}
                  />

                  <Modal.RightContent>
                    <Image
                      src={feature.imageURL}
                      height={600}
                      width={600}
                      alt="image"
                      className="w-full h-full rounded-xl"
                    />
                  </Modal.RightContent>
                </Modal.Content>
              </Modal>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
