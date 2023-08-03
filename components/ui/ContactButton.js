"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AnimatePresence, motion } from "framer-motion";

import { OpenDialog, OverlayAnimation } from "@/Data/Animations";
import { useAtom } from "jotai";
import { ContactModal } from "@/Data/Atoms";
import ContactForm from "../ContactForm";

export default function ContactButton() {
  const [isContactModalOpen, setIsContactModalOpen] = useAtom(ContactModal);
  const handleClose = () => {
    setIsContactModalOpen((isContactModalOpen) => {
      const newIsContactModalOpen = !isContactModalOpen;
      console.log(newIsContactModalOpen);
      return newIsContactModalOpen;
    });
  };
  return (
    <Dialog.Root
      open={isContactModalOpen}
      onOpenChange={handleClose}
      className=""
    >
      <Dialog.Trigger className="focus:ring focus:ring-violet-300 focus:outline-none rounded-xl">
        <div className="px-2 py-1 text-sm text-white bg-blue-800 rounded-full">
          I want one
        </div>
      </Dialog.Trigger>
      <AnimatePresence>
        {isContactModalOpen && (
          <Dialog.Portal>
            <Dialog.Overlay asChild>
              <motion.div
                onClick={handleClose} // Handle the close button click
                className="fixed inset-0  cursor-pointer bg-black/50 backdrop-blur-[10px]"
                variants={OverlayAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              ></motion.div>
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                variants={OpenDialog}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white border border-black rounded-lg absolute top-[50%] flex left-[60%] h-screen -translate-x-1/2 origin-right -translate-y-1/2 w-[90%]"
              >
                <div className="flex flex-col flex-1 h-full gap-4 py-10 px-14">
                  <Dialog.Close
                    // onClick={handleClose} // Handle the close button click
                    className=" p-2 w-fit bg-black/20 text-black rounded-full opacity-60 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  >
                    <ArrowLeftIcon className="w-6 h-6" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                  <Dialog.Title className="hidden w-full pt-10 text-4xl text-black ">
                    <h1>Contact Form</h1>
                  </Dialog.Title>
                  <VisuallyHidden asChild>
                    <Dialog.Description className="text-black DialogDescription">
                      Contact Form
                    </Dialog.Description>
                  </VisuallyHidden>
                  <div className="flex">
                    <p className="pt-10 text-4xl text-black">
                      Please fill the form and one of our local representatives
                      will get back to you with details.
                    </p>
                  </div>
                </div>
                <div className="flex-1 h-full py-5 pr-20 rounded-xl">
                  <ContactForm />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
