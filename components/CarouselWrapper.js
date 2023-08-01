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
import {
  Dragging,
  ModalAnimations,
  ModalIndex,
  OverlayAnimations,
  SwitchState,
} from "@/Data/Atoms";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { OpenDialog, OverlayAnimation, SwitchAnimation, SwitchDialog, SwitchOverlayAnimation } from "@/Data/Animations";

export default function CarouselWrapper() {
  const [openIndex, setOpenIndex] = useAtom(ModalIndex);
  const [isDragging] = useAtom(Dragging);
  const [isSwitching, setIsSwitching] = useAtom(SwitchState)
  // const [animateModal, setAnimateModal] = useAtom(ModalAnimations);
  // const [animateOverlay, setAnimateOverlay] = useAtom(OverlayAnimations);
  const handleOpenChange = (index) => {
    console.log(`open index: ${openIndex}, ${index}`);
     console.log(`switch state ${isSwitching}`)
    if (openIndex > -1) {
      setIsSwitching(false)
      setOpenIndex(-1);
            console.log(isSwitching)

    } else {
       console.log(isSwitching)
      setOpenIndex(index);
    }
    console.log(`Modal: ${index}`);
  };
  const increment = () => {
    if (openIndex != 5) {
            console.log(isSwitching)
      setIsSwitching(true)
      // setAnimateOverlay(SwitchOverlayAnimation);
      // setAnimateModal(SwitchDialog);
      setOpenIndex(openIndex + 1);
    } else {
      return;
    }
  };
  const decrement = () => {
    if (openIndex != 0) {
      setIsSwitching(true)
      // setAnimateOverlay(SwitchOverlayAnimation);
      // setAnimateModal(SwitchDialog);
      setOpenIndex(openIndex - 1);
    } else {
      return;
    }
  };
  const handleClose = (index) =>{
    console.log(`Close index: ${openIndex}, ${index}`);
    if (openIndex > -1) {
      setIsSwitching(false)
      setOpenIndex(-1);
      console.log(isSwitching)
    } else {
      return
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
              <Dialog.Root
                className=""
                key={index}
                open={openIndex == index}
                onOpenChange={() => handleOpenChange(index)}
              >
                <Dialog.Trigger
                  className={twMerge(
                    "focus:ring focus:ring-violet-300 focus:outline-none rounded-xl",
                    isDragging && "pointer-events-none"
                  )}
                >
                  <Card
                    key={index}
                    label={feature.label}
                    icon={feature.icon}
                    image={feature.image}
                  />
                </Dialog.Trigger>
                <AnimatePresence>
                  {openIndex > -1 && (
                    <Dialog.Portal
                   >
                      <Dialog.Overlay asChild>
                        
                        <motion.div
                        
                         onClick={() => handleClose(index)} // Handle the close button click
                          className="fixed inset-0  cursor-pointer bg-black/50 backdrop-blur-[10px]"
                          variants={isSwitching ? null : OverlayAnimation}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        ></motion.div>
                      </Dialog.Overlay>
                      <Dialog.Content asChild>
                        <motion.div
                        
                          variants={isSwitching ? null : OpenDialog}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-white border border-black rounded-lg absolute top-[50%] flex left-[60%] h-screen -translate-x-1/2 origin-right -translate-y-1/2 w-[90%]"
                        >
                          <div className="flex flex-col flex-1 h-full gap-4 py-10 px-14">
                            <Dialog.Close
                              onClick={() => handleClose(index)} // Handle the close button click
                              className=" p-2 w-fit bg-black/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                            >
                              <ArrowLeftIcon className="w-6 h-6" />
                              <span className="sr-only">Close</span>
                            </Dialog.Close>
                            <Dialog.Title 
                            
                          
                          className="w-full pt-10 text-4xl text-black ">

                            <motion.h1
                        
                            variants={isSwitching ? SwitchAnimation: null}
                          initial="initial"
                          animate="animate"
                          exit="exit" >

                              {feature.label}
                            </motion.h1>

                            </Dialog.Title>
                            <VisuallyHidden asChild>
                              <Dialog.Description className="text-black DialogDescription">
                                More information on the feature
                              </Dialog.Description>
                            </VisuallyHidden>
                            <div className="flex">
                              <motion.p 
                               variants={isSwitching ? SwitchAnimation: null}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="text-4xl text-black">
                                {feature.content}
                              </motion.p>
                              <div className="absolute flex items-center justify-between gap-4 px-4 bottom-10 h-fit">
                                <button
                                  onClick={() => {
                                    decrement();
                                  }}
                                  className={twMerge(
                                    " p-2 bg-white/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                                    //   openIndex === 0 && "opacity-10 pointer-events-none"
                                  )}
                                >
                                  <ArrowLeftIcon className="w-6 h-6" />
                                  <span className="sr-only">Left</span>
                                </button>
                                <button
                                  onClick={() => {
                                    increment();
                                  }}
                                  className={twMerge(
                                    " p-2 bg-black/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                                    //   openIndex === 5 && "opacity-10 pointer-events-none"
                                  )}
                                >
                                  <ArrowRightIcon className="w-6 h-6" />
                                  <span className="sr-only">Right</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 h-full py-5 pr-20 overflow-clip rounded-xl">
                            <Image
                              src={feature.imageURL}
                              height={600}
                              width={600}
                              alt="image"
                              className="w-full h-full rounded-xl"
                            />
                          </div>
                        </motion.div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  )}
                </AnimatePresence>
              </Dialog.Root>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
